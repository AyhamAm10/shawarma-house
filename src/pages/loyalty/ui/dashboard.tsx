import { useMirror } from "../store";
import Tabs from "./tabs";

export default function Dashboard() {
  const tabs = useMirror("tabs");
  return (
    <div>
      <div className="max-w-[914px] mx-9 md:mx-auto ">
        <div className="bg-main rounded-lg flex items-center justify-between p-14">
          <h1 className="text-xl sm:text-4xl font-semibold text-white">
            نقاط الولاء
          </h1>
          <div className="flex items-center gap-2 text-white text-xl font-semibold">
            <span>200</span>
            <span>نقطة</span>
          </div>
        </div>
        <div className="mt-14">
          <div className="max-w-[637px]">
            <Tabs />
            {tabs.map((tab) => {
              if (tab.isActive) {
                return <tab.component key={`tab ${tab.title}`} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
