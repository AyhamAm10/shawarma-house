export default function Topup() {
  return (
    <div className="flex flex-col gap-8 py-8 max-w-[637px] ">
      <h1 className="text-2xl font-medium text-[#AB0E0E]">ادخل عدد النقات</h1>
      <div className="h-[156px] w-full flex items-center flex-col justify-center gap-4 rounded-xl border border-[#D1D1D1]">
        <h1 className="text-[#ED6A22] font-semibold text-lg">
          تحويل النقاط إلى رصيد في محفظتك
        </h1>
        <span className="text-[#8B8B8B] text-lg ">مثال : 300</span>
      </div>
      <h1 className="text-2xl font-medium text-[#AB0E0E]">ملاحظات</h1>
      <div className="bg-[#FFF2E7] rounded-xl p-3 sm:p-6 flex flex-col gap-3">
        <h1 className="text-sm sm:text-lg text-[#2D2D2D] ">
          1- يمكن تحويل نقاط الولاء فقط إلى رصيد في المحفظة.
        </h1>
        <h1 className="text-sm sm:text-lg text-[#2D2D2D] ">
          2- 10 نقاط تساوي 1.00 ريال سعودي.
        </h1>
        <h1 className="text-sm sm:text-lg text-[#2D2D2D] ">
          3- بمجرد تحويل النقاط إلى رصيد فلن تعود إلى نقاط.
        </h1>
        <h1 className="text-sm sm:text-lg text-[#2D2D2D] ">
          4- يمكن استخدام النقاط للحصول على رصيد اضافي.
        </h1>
      </div>
      <button className="bg-[#ED6A22] rounded-md py-3 sm:pt-4 px-5 sm:px-12">
      <span className=" font-bold text-lg text-white">تحويل النقاط</span>
      </button>
    </div>
  );
}
