
import { Navbar } from "../../../components/layout/navbar";
import { HeroSection } from "../../../components/home/hero";
import { Sections } from "./Sections";
import { Feedback } from "./Feedback";
import DownloadApp from "./DownloadApp";

export default function RenderUi() {
  return (
    <div dir="rtl" className="h-[400vh]">
      <Navbar />
      <HeroSection />
      <Sections />
      <Feedback />
      <DownloadApp />
      <div className="h-[200vh]"></div>
    </div>
  );
}
