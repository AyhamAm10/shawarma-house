import { type PropsWithChildren, useEffect, useRef } from "react";
import { useMirror } from "./store";

export default function Init(props: PropsWithChildren) {
  const { children } = props;

  const setTabs = useMirror("setTabs");
  const tabs = useMirror("tabs");
  const onChangeTab = useMirror("onChangeTab");

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    if (!tabs || tabs.length === 0) return;

    const params = new URLSearchParams(window.location.search);
    const tabQuery = params.get("tab");
    let selectedTab = tabs.find((t) => t.query === tabQuery);
    if (!selectedTab) selectedTab = tabs[0];

    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id === selectedTab!.id,
      }))
    );

    if (onChangeTab) {
      onChangeTab(selectedTab!.id);
    }

    initialized.current = true;
  }, [tabs]);

  return <>{children}</>;
}
