import logo from "../../../../assets/SVG.svg";
import contact1 from "../../../../assets/instgrane-contact/Nav Bar/Social Icons.svg";
import contact2 from "../../../../assets/linkedin-contact/Nav Bar/Social Icons.svg";
import contact3 from "../../../../assets/facebook-contact/Nav Bar/Social Icons.svg";
import contact4 from "../../../../assets/x-contact/Nav Bar/Social Icons.svg";
import email from "../../../../assets/email/Nav Bar/Communication/Vector.svg";
import phone from "../../../../assets/phone/Nav Bar/Communication/Vector.svg";
import vector from "../../../../assets/vector/Nav Bar/Navigation/Vector.svg";

export default function Ui() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1380px] mx-auto py-20 px-5 gap-6 sm:gap-8 md:gap-16">
      <div className="flex flex-col gap-4">
        <img src={logo} alt="shawrma house logo" width={144} />
        <p className="text-text">
          بيت الشاورما مطعم سعودي يقدم أشهى الشاورما والمشويات والوجبات السريعة
          بجودة عالية وطابع شرقي.
        </p>
        <div className="flex items-center gap-8">
          <img src={contact1} alt="instgram link" />
          <img src={contact2} alt="linkedIn link" />
          <img src={contact3} alt="facebook link" />
          <img src={contact4} alt="x link" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl text-[#4B4B4B] mb-5">
          خريطة الموقع
        </h1>
        <div className="flex justify-between gap-3  ">
          <ul className="gap-3 flex flex-col">
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              الصفحة الرئيسية
            </li>
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              قصتنا
            </li>
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              منتجاتنا
            </li>
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              بيت مافيه أسرار
            </li>
          </ul>
          <ul className="gap-3 flex flex-col">
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              أخبارنا
            </li>
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              تطبيقنا
            </li>
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              تواجدنا
            </li>
            <li className="text-[#4A4A4A] hover:text-main cursor-pointer text-lg">
              تواصل معنا
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl text-[#4B4B4B] mb-5">
          تواصل معنا
        </h1>
        <div className="flex items-stretch flex-col gap-7">
          <div className="flex items-center gap-2">
            <img src={phone} alt="shawarma house phone" />
            <span className="text-[#4A4A4A] text-lg">+966 55 123 4567</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={email} alt="shawarma house email" />
            <span className="text-[#4A4A4A] text-lg">
              info@shawarmahouse.sa
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={vector} alt="shawarma house location" />
            <span className="text-[#4A4A4A] text-lg">
              طريق الملك فهد، الرياض، المملكة العربية السعودية
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
