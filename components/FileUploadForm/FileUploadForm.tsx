"use client";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";

interface UploadComponentProps {
  onImageUpload: (image: { url: string; key: string }) => void;
}

export const FileUploadForm = ({ onImageUpload }: UploadComponentProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [onSuccess, setOnSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async () => {
    if (!file) return;
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log("data-upload", data);

      onImageUpload(data);
      setIsUploading(false);
      setOnSuccess(true);
    } catch (error) {
      console.error("error", error);
      setIsUploading(false);
      setOnSuccess(false);
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e", e.target.files);
    if (!e.target.files) return;

    const file = e.target.files[0];
    setFile(file);
  };

  console.log("watching", watch("image"));

  return (
    <div className="bg-texasCustomDark flex flex-col items-center justify-center space-y-2 p-11 leading-relaxed">
      <p>
        Upload some pics you took of beautiful Colorado, us, and/or whatever you
        want!
      </p>
      <div className="flex flex-col items-start">
        <p className="text-texasSecondaryTextColor">
          * you can not delete an image unless you let me know (I did not have
          time to add that)
        </p>
        <p className="text-texasSecondaryTextColor">
          * you only can upload one image at a time
        </p>
      </div>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-2">
        <input
          type="file"
          accept="image/*"
          {...(register("image"), { required: true })}
          onChange={handleOnChange}
        />
        <Button
          variant={"secondary"}
          disabled={!file || isUploading}
          type="submit"
        >
          {isUploading ? "Uploading" : "Upload"}
        </Button>
        <p className="text-center text-2xl font-semibold text-green-600">
          {onSuccess ? "Successfully Uploaded" : ""}
        </p>
        <p className="text-center text-2xl font-semibold text-red-400">
          {errors && errors.image && "Error uploading"}
        </p>
      </form>
    </div>
  );
};
