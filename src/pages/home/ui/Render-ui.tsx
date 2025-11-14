import { HeroSection } from "../../../components/home/hero";
import { Sections } from "./Sections";
import { Feedback } from "./Feedback";
import DownloadApp from "./DownloadApp";
import MapComponent from "./Map";
import { Footer } from "../../../components/layout/footer";

export default function RenderUi() {
  return (
    <div dir="rtl" className="">
      {/* <Navbar /> */}
      <HeroSection />
      <Sections />
      <Feedback />
      <DownloadApp />
      <MapComponent />
      <Footer />
    </div>
  );
}
