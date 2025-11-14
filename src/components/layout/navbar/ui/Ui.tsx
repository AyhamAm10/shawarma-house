import { useState, useEffect } from "react";
import storeIcon from "../../../../assets/store.svg";
import logo from "../../../../assets/SVG.svg";
import { navbarData } from "../../../../data/static-navbar-data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Ui = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // handle scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-500 ${
        scrolledUp
          ? "bg-white/95 backdrop-blur-none shadow-md"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="flex px-3 sm:px-5 md:px-6 py-2 items-center justify-between">
        {/* logo */}
        <img
          src={logo}
          alt="shawarma house logo"
          className="h-10 sm:h-12 md:h-16 lg:h-20"
        />

        {/* desktop list */}
        <ul className="hidden md:flex items-center gap-8">
          {navbarData.map((item) => (
            <li
              key={item.title}
              className="text-text-dis cursor-pointer hover:text-main transition-colors"
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* register desktop */}
        <div className="hidden md:flex items-center gap-4">
          <img src={storeIcon} alt="store icon" className="h-6" />
          <button className="bg-red-btn px-5 py-2 rounded-lg text-white hover:bg-red-600 transition-colors">
            تسجيل / تسجيل الدخول
          </button>
        </div>

        {/* mobile hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black rounded"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-black rounded"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black rounded"
          />
        </div>
      </div>

      {/* mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          menuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-white/90 backdrop-blur-md shadow-md"
      >
        <ul className="flex flex-col gap-4 p-5">
          {navbarData.map((item) => (
            <li
              key={`mobile-${item.title}`}
              className="text-text-dis cursor-pointer hover:text-main transition-colors"
            >
              {item.title}
            </li>
          ))}
          <li className="flex items-center gap-4 mt-2">
            <img src={storeIcon} alt="store icon" className="h-6" />
            <button className="bg-red-btn px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors">
              تسجيل / تسجيل الدخول
            </button>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Ui;
