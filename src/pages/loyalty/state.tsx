import { useState, type PropsWithChildren } from "react";
import { useMirrorRegistry } from "./store";
import type { TabItem } from "./store/state";
import { loyaltyTabs } from "./static-data/data";

export default function State(props: PropsWithChildren) {
  const { children } = props;
  const [data, setData] = useState<TabItem[]>(loyaltyTabs);
  useMirrorRegistry("tabs", data);
  useMirrorRegistry("setTabs", setData);

  return <> {children}</>;
}
