import Quote from "@/components/quote";
import Spotify from "./spotify";

export default function page() {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-y-3 p-24">
      <div className="flex flex-col items-center gap-y-3">
        <p className="text-4xl">Need a reason to ski?</p>
        <p className="text-4xl">Come celebrate my 27th birthday at 🔑🗿 ! </p>
        <p>
          We&apos;ll be parked in the 🇵🇪 lot so we can tailgate for lunch and have a
          couple brewskis.
        </p>
      </div>
      <Quote />
      <Spotify />
    </div>
  );
}