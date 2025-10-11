import { useEffect, useState } from "react";
import storeIcon from "../../../../assets/store.svg";
import logo from "../../../../assets/SVG.svg";
import { navbarData } from "../../../../data/static-navbar-data";

const Ui = () => {
  const [scrolledUp, setScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // إذا المستخدم عم يطلع لفوق → خليه يصير أبيض
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolledUp
          ? "bg-white/95 backdrop-blur-none shadow-md"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="flex px-3 sm:px-5 md:px-6 md:py-2 items-center justify-between">
        {/* logo */}
        <img src={logo} alt="shawarma house logo" />

        {/* list */}
        <ul className="hidden md:flex items-center gap-8">
          {navbarData.map((item) => (
            <li
              key={`navbar item ${item.title}`}
              className="text-text-dis cursor-pointer hover:text-main transition-colors"
            >
              {item.title}
            </li>
          ))}
        </ul>

        {/* register */}
        <div className="hidden md:flex items-center gap-4">
          <img src={storeIcon} alt="store icon" />
          <button className="bg-red-btn px-5 py-2 rounded-lg text-white hover:bg-red-600 transition-colors">
            تسجيل / تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ui;
