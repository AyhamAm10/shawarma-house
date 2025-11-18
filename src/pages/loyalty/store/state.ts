import type { ReactNode } from "react";

export type TabItem = {
  id: number;
  title: string;
  query: string;
  icon: string;
  active_Icon: string;
  isActive: boolean;
  component: () => ReactNode;
};
type StateType = {
  tabs: TabItem[];
  setTabs: React.Dispatch<React.SetStateAction<TabItem[]>>;
};

const store = (): StateType => ({
  tabs: [],
  setTabs: () => {},
});

export { store as stateStore };
export type { StateType };
