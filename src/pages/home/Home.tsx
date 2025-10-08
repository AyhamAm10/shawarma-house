import { HeroSection } from "../../components/home/hero";
import { Navbar } from "../../components/layout/navbar";
import { Feedback } from "./ui/Feedback";
import { Sections } from "./ui/Sections";


export default function Home() {
  return (
    <div dir="rtl" className="h-[400vh]">
        <Navbar />
        <HeroSection />
        <Sections />
        <Feedback />
        <div className="h-[200vh]"></div>
    </div>
  )
}
