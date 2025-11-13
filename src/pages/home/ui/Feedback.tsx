import image1 from "../../../assets/feedback/image1.png";
import image2 from "../../../assets/feedback/image2.png";
import image3 from "../../../assets/feedback/image3.png";
import image4 from "../../../assets/feedback/image4.png";
import image5 from "../../../assets/feedback/image5.png";
import image6 from "../../../assets/feedback/image6.png";
import { useFeedbackAnimation } from "../../../hooks/useFeedbackAnimation";
import { motion } from "framer-motion";

export function Feedback() {
  const { onViewVariants, hoverVariants, overlayVariants } =
    useFeedbackAnimation();

  const feedbacks = [
    {
      id: 1,
      image: image1,
      title: "أطلب من التطبيق دائماً!",
      description:
        "أنا زبون دائم لبيت الشاورما، والتطبيق سهّل عليّ كل شيء. الواجهة بسيطة، الطلب سريع، وخدمة التوصيل دائمًا ممتازة صار أساسي في جوالي!",
      position: "bottom",
    },
    {
      id: 2,
      image: image2,
      title: "عجلة الحظ خلتي أربح",
      description:
        "جربت لعبة عجلة الحظ الموجودة في التطبيق، وفزت بوجبة مجانية! حسيت إنهم فعلاً يهتمّون بعملاءهم ويحبون يفاجئونهم.",
      position: "top",
    },
    {
      id: 3,
      image: image3,
      title: "بيت الشاورما دايم معي",
      description:
        "أنا أشتغل دايمًا في أماكن مختلفة داخل الرياض، ومع التطبيق صرت أطلب من أقرب فرع لي بسهولة. اللي يميزهم إن فروعهم كثيرة، والتطبيق يحدد لي الفرع الأقرب ويوصل الطلب بسرعة. الأكل طعمه ثابت، والخدمة ممتازة في كل فرع جربته.",
      position: "bottom",
    },
    {
      id: 4,
      image: image4,
      title: "أطلب من التطبيق دائماً!",
      description:
        "أنا زبون دائم لبيت الشاورما، والتطبيق سهّل عليّ كل شيء. الواجهة بسيطة، الطلب سريع، وخدمة التوصيل دائمًا ممتازة صار أساسي في جوالي!",
      position: "top",
    },
    {
      id: 5,
      image: image5,
      title: "عجلة الحظ خلتي أربح",
      description:
        "جربت لعبة عجلة الحظ الموجودة في التطبيق، وفزت بوجبة مجانية! حسيت إنهم فعلاً يهتمّون بعملاءهم ويحبون يفاجئونهم.",
      position: "bottom",
    },
    {
      id: 6,
      image: image6,
      title: "بيت الشاورما دايم معي",
      description:
        "أنا أشتغل دايمًا في أماكن مختلفة داخل الرياض، ومع التطبيق صرت أطلب من أقرب فرع لي بسهولة. اللي يميزهم إن فروعهم كثيرة، والتطبيق يحدد لي الفرع الأقرب ويوصل الطلب بسرعة. الأكل طعمه ثابت، والخدمة ممتازة في كل فرع جربته.",
      position: "top",
    },
  ];

  return (
    <div className="p-5 sm:p-7 mx-6 sm:mx-9">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16">
        {[...feedbacks].reverse().map((feedback) => (
          <motion.div
            key={feedback.id}
            variants={onViewVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className={`relative w-full flex overflow-hidden ${
              feedback.position === "top"
                ? "md:items-start lg:items-start pt-10 md:pt-14"
                : "md:items-end lg:items-end pb-6 md:pb-10"
            }`}
            style={{ perspective: 800 }}
          >
            <motion.div
              variants={hoverVariants}
              className="relative w-full aspect-[4/5] sm:aspect-[5/6] md:aspect-[6/7] lg:aspect-[7/8] overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Overlay circle */}
              <motion.div
                variants={overlayVariants}
                className="absolute -top-16 -left-16 w-10 h-10 bg-black rounded-full pointer-events-none"
              />

              <img
                src={feedback.image}
                alt={feedback.title}
                className={`w-full h-full object-cover ${
                  feedback.position === "top" ? "object-top" : "object-bottom"
                }`}
              />

              <div className="absolute inset-x-0 top-0 bg-gradient-to-t p-6 text-white">
                <div className="p-4 text-center">
                  <h3 className="text-3xl font-semibold mb-3 text-white">
                    {feedback.title}
                  </h3>
                  <p className="text-xl text-white leading-relaxed">
                    {feedback.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
