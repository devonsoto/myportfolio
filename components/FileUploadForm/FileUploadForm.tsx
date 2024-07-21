"use client";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { ChangeEvent, useState } from "react";

export const FileUploadForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
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

      console.log("data", data.status);

      setIsUploading(false);
    } catch (error) {
      console.error("error", error);
      setIsUploading(false);
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
    <div>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <p>file upload</p>
        <input
          type="file"
          accept="image/*"
          {...(register("image"), { required: true })}
          onChange={handleOnChange}
        />
        <button disabled={!file || isUploading} type="submit">
          {isUploading ? "Uploading" : "Upload"}
        </button>
      </form>
    </div>
  );
};
