import { icons } from "../static-data/data";
import { useMirror } from "../store";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import questionIcon from "../../../assets/fi_1479648.svg"
import plus from "../../../assets/plus/Edit/Vector.svg"
import maines from "../../../assets/mains/Edit/Vector.svg"
export default function ToKnow() {
  const faqsData = useMirror("faqs");
  const onToggleItem = useMirror("onToggleFaqItem");

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

 const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.925, 1]);
const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["50px", "25px", "0px"]);

  return (
    <div className="bg-[#dedcdc]">
      
      <motion.div
        ref={ref}
        style={{ scale, borderRadius }}
        className="bg-white p-6 sm:p-12 md:p-20"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-main sm:mb-12 mb-6">
          وش حابب تعرف؟
        </h1>

        <div className="flex items-center justify-between flex-wrap flex-col sm:flex-row gap-6 ">
          {icons.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center flex-col w-[302px] h-[273px] bg-[#F6F6F6] hover:border border-main rounded-2xl"
            >
              <img src={item.icon} alt={item.title} />
              <h1 className="text-2xl text-text-dis">{item.title}</h1>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-main sm:mb-12 mb-6">
            الأسئلة الشائعة
          </h1>

          <div className="flex flex-col items-stretch gap-6 sm:gap-12">
            {faqsData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 sm:gap-6 sm:p-6 p-3  border-[#E7E7E7] rounded-xl border sm:border-[2px] "
              >
                <div className="w-full flex items-center justify-between">
                  <h1 className="text-lg sm:text-2xl font-semibold text-[#454545]">
                    {item.title}
                  </h1>
                  <button
                    className="text-[#454545]"
                    onClick={() => onToggleItem(item.id)}
                  >
                    <img src={item.isOpen? maines : plus} alt="" />
                  </button>
                </div>

                <div
                  className="overflow-hidden text-sm  sm:text-2xl text-[#5D5D5D] transition-[max-height] duration-300"
                  style={{ maxHeight: item.isOpen ? "500px" : "0px" }}
                >
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 p-12 flex justify-between bg-[#F6F6F6] items-start rounded-lg flex-wrap gap-5 ">
          <h1 className="text-lg sm:text-3xl md:text-5xl font-semibold text-[#454545] max-w-[600px] ">لم تجد الجواب الذي تبحث عنة؟ اسألنا عما تود معرفتة!</h1>
          <button className="bg-main text-white py-1 px-5 rounded-full">
            <div className="flex items-center gap-1">
            <img src={questionIcon} alt=" question icon" width={25}/>
            <h1 className=" font-semibold text-lg ">اسأل</h1>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
