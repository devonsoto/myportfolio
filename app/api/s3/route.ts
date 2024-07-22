import { NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  S3,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_S3_Secret_ACCESS_KEY ?? "",
  },
});

const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_S3_Secret_ACCESS_KEY ?? "",
  },
});

const uploadFileToS3 = async (file: Buffer, fileName: string) => {
  const fileBuffer = file;
  console.log(fileName);

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
  };

  console.log("file buffer", fileBuffer);

  const command = new PutObjectCommand(params);

  await s3Client.send(command);

  return fileName;
};

export async function GET() {
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
    };

    const command = new ListObjectsV2Command(params);
    const data = await s3Client.send(command);

    if (!data.Contents) {
      return NextResponse.json({ error: "No images found" }, { status: 404 });
    }

    const urls = await Promise.all(
      data.Contents.map(async (content) => {
        const url = await getSignedUrl(
          s3Client,
          new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: content.Key,
          }),
          { expiresIn: 3600 },
        );
        return { key: content.Key, url };
      }),
    );

    return NextResponse.json({ status: "success", images: urls });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    console.log("file", file);

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);

    // Generate a signed URL for the uploaded file
    const url = await getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
      }),
      { expiresIn: 3600 },
    );

    // do check here, wrong file, sizes, etc

    return NextResponse.json({ success: true, fileName, url, key: fileName });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
