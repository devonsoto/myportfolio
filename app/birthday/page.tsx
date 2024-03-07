import Quote from "@/app/quote";
import Spotify from "./spotify";

export default function page() {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-y-4 p-24">
      <div className="flex flex-col items-center gap-y-3">
        <p className="text-4xl">Need a reason to ski?</p>
        <p className="text-4xl">Come celebrate my 27th birthday at 🔑🗿 ! </p>
        <p>
          We&apos;ll be parked in the 🇵🇪 lot so we can tailgate for lunch and
          have a couple brewskis.
        </p>
        <p className="font-medium">
          March 15, Meet at 830ish at Peru Lot and around 12ish for lunch!
        </p>
      </div>
      <Spotify />
      <Quote />
    </div>
  );
}
