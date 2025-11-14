export type FAQItem = {
  title: string;
  desc: string;
  isOpen: boolean;
  id : number
};
type StateType = {
  faqs: FAQItem[];
  setfaqs: React.Dispatch<React.SetStateAction<FAQItem[] >>;
};

const store = (): StateType => ({
  faqs: [],
  setfaqs: () => {},
});

export { store as stateStore };
export type { StateType };
