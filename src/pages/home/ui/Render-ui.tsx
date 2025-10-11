import { HeroSection } from "../../../components/home/hero";
import { Sections } from "./Sections";
import { Feedback } from "./Feedback";
import DownloadApp from "./DownloadApp";
import MapComponent from "./Map";

export default function RenderUi() {
  return (
    <div dir="rtl" className="h-[400vh]">
      {/* <Navbar /> */}
      <HeroSection />
      <Sections />
      <Feedback />
      <DownloadApp />
      <MapComponent />
      <div className="h-[200vh]"></div>
    </div>
  );
}
