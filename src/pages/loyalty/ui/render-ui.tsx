import { Footer } from "../../../components/layout/footer";
import { Navbar } from "../../../components/layout/navbar";
import Dashboard from "./dashboard";
import Hero from "./hero";

export  function RenderUi() {
  return (
    <>
    <Navbar />
    <Hero />
    <Dashboard />
    <Footer />
    </>
  )
}
