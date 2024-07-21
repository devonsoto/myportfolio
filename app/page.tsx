import { Whoami } from "@/app/whoami/whoami";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Header />
      <Whoami />
      <Footer />
    </>
  );
}
