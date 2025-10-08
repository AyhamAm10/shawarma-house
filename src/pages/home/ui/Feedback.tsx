import { FeedbackCard } from "../../../components/home/feedback-card";

export function Feedback() {
  return (
    <div className="bg-main p-5 sm:p-7 mx-auto">
      <div className="md:max-w-2/3 mx-auto flex flex-col items-stretch gap-50">
        <FeedbackCard type="variant1" />
        <FeedbackCard type="variant2" />
        <FeedbackCard type="variant3" />
      </div>
    </div>
  );
}
