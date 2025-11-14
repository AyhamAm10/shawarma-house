import provides from "../../../assets/provides.png";
import sources from "../../../assets/searces.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Sections() {
  return (
    <div className="p-6 sm:p-12 md:p-20 mt-52">
      <div className="flex flex-col items-center gap-3 sm:gap-6 ">
        <LazyLoadImage src={provides} alt="provids" className="w-full" />
        <h1 className="font-semibold text-lg sm:text-3xl md:text-5xl  text-main">
          موردينا
        </h1>
        <p className="sm:max-w-3/4 md:max-w-[1000px] text-center text-[#5D5D5D] text-sm sm:text-2xl md:text-3xl ">
          في بيت الشاورما نحرص على التعاون مع موردين موثوقين يمتلكون خبرة طويلة
          في مجال توريد المنتجات الغذائية والمعدات. شركاؤنا في التوريد لا
          يزوّدوننا فقط بالمكونات، بل يشاركوننا التزامنا بالجودة، النظافة،
          والاحترافية. نتعامل مع مورّدي لحوم ودواجن معتمدين، وشركات متخصصة في
          الخبز الطازج، والخضروات، والتغليف، والمعدّات التقنية. علاقتنا الوثيقة
          مع الموردين تضمن لنا الاستمرارية والجودة في كل فرع وكل وجبة.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 sm:gap-6 my-6 sm:my-12 md:my-20">
        <LazyLoadImage src={sources} alt="provids" className="w-full" />
        <h1 className="font-semibold text-lg sm:text-3xl md:text-5xl  text-main">
          مصادرنا
        </h1>
        <p className="sm:max-w-3/4 md:max-w-[1000px] text-center text-[#5D5D5D] text-sm sm:text-2xl md:text-3xl ">
          نؤمن أن الطعم يبدأ من المصدر، ولهذا نختار مكوناتنا من أفضل المصادر
          المتاحة. لحومنا تأتي من مزارع محلية تلتزم بمعايير صحية صارمة،
          وخضرواتنا تُجلب يوميًا من أسواق موثوقة لضمان الطزاجة. نستخدم البهارات
          الأصلية من مصادر عالمية مختارة بعناية، مع الحرص على أن تكون كل مادة
          أولية تتوافق مع ثقافتنا وقيمنا الغذائية. مصادرنا جزء من هويتنا، وهي ما
          تجعل تجربة "بيت الشاورما" متفردة في كل مرة.
        </p>
      </div>
    </div>
  );
}
