import { FileUploadForm } from "components/FileUploadForm/FileUploadForm";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
export default function Texas() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center  space-y-2 bg-black p-8 text-white ">
      <div className="bg-texasCustomDark flex flex-col items-center justify-center space-y-6 rounded-lg p-6">
        <div className="flex flex-col items-center justify-center space-y-1">
          <h1 className="text-texasMainTextColor text-3xl font-semibold">
            Hola Amigos!!
          </h1>
          <p className="text-texasSecondaryTextColor">
            I am moving to Texas to become a cowboy 🤠🐎.
          </p>
          <p className="text-texasSecondaryTextColor">
            I leave on the 31st and would love to hang out before I leave!
          </p>
        </div>

        <div className="flex flex-col justify-center sm:flex-row">
          <div className="text-texasSecondaryTextColor flex-1 leading-relaxed">
            <h2 className="text-center text-2xl font-semibold text-white">
              July 27th
            </h2>
            <p>
              We&apos;re gonna do the regular and hang out at Phonsos. Then from
              there we are gonna head downtown. The more the merrier!
            </p>
          </div>
          <div className="text-texasSecondaryTextColor flex-1 text-center leading-relaxed">
            <h2 className="text-2xl font-semibold text-white">July 28th</h2>
            <p>
              Lake day baby! Come out to grub, play volleyball, cornhole and
              paddleboard. We are meeting up at Soda Lake. Time TBD but sometime
              in the afternoon.
            </p>
          </div>
        </div>
        <div className="text-center font-semibold leading-relaxed">
          <p>
            Let me know if you&apos;re coming please, so we can plan
            accordingly!
          </p>
          <p>
            Call or send me a text at{" "}
            <a className="font-semibold" href="tel:7204800272">
              7204800272
            </a>
          </p>
        </div>
      </div>
      <ImageGallery />
    </div>
  );
}
