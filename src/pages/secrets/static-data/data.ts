import questionsIcon from "../../../assets/questions.svg";
import providerIcon from "../../../assets/provider.svg";
import soursingIcon from "../../../assets/sources.svg";
import listeningIcon from "../../../assets/listening.svg";
import type { FAQItem } from "../store/state";

export const icons = [
  {
    icon: questionsIcon,
    title: "الأسئلة الشائعة",
  },
  {
    icon: providerIcon,
    title: "الموردين",
  },
  {
    icon: soursingIcon,
    title: "مصادرنا",
  },
  {
    icon: listeningIcon,
    title: "نسمع سؤالك ",
  },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    title: "متى تم افتتاح أول مطعم لبيت الشاورما؟ ",
    isOpen: false,
    desc: "تم إفتتاح أول مطعم لبيت الشاورما عام 2000م. ",
  },
  {
    id: 2,
    title: "متى تم افتتاح أول مطعم لبيت الشاورما؟ ",
    isOpen: false,
    desc: "تم إفتتاح أول مطعم لبيت الشاورما عام 2000م. ",
  },
  {
    id: 3,
    title: "متى تم افتتاح أول مطعم لبيت الشاورما؟ ",
    isOpen: false,
    desc: "تم إفتتاح أول مطعم لبيت الشاورما عام 2000م. ",
  },
];
