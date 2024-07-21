import { FileUploadForm } from "components/FileUploadForm/FileUploadForm";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
export default function Texas() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-8 ">
      <div className="flex flex-col items-center justify-center space-y-3">
        <h1 className="text-2xl font-semibold">Hola Amigos!! </h1>
        <p>I am moving to Texas to become a cowboy 🤠🐎.</p>
        <p>
          We&apos;re gonna have a cookout/volleyball/cornhole day on{" "}
          <span className="font-bold">Sunday July 28th, 3pm at Zuni Park.</span>
        </p>
        <p>Let me know if you&apos;re coming</p>
        <p>
          Call or send me a text at{" "}
          <a className="font-semibold" href="tel:7204800272">
            7204800272
          </a>
        </p>
      </div>
      <FileUploadForm />
      <ImageGallery />
    </div>
  );
}
