import storeIcon from "../../../../assets/store.svg";
import logo from "../../../../assets/SVG.svg";
import { navbarData } from "../../../../data/static-navbar-data";

const Ui = () => {
  return (
    <div className="flex px-9 sm:px-3 md:px-6 py-2 items-center justify-between">
      {/* logo */}
      <img src={logo} alt="shawarma house logo" />
      {/* list */}
      <ul className="flex items-center gap-8">
        {navbarData.map((item) => (
          <li key={`navbar item ${item.title}`} className="text-text-dis cursor-pointer hover:text-main">{item.title}</li>
        ))}
      </ul>
      {/* registe */}
      <div className="flex items-center gap-4">
        <img src={storeIcon} alt="store icon" />
        <button className="bg-red-btn px-5 py-2 rounded-lg text-white">
          تسجيل / تسجيل الدخول
        </button>
      </div>
    </div>
  );
};

export default Ui;
