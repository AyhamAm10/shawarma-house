import { type PropsWithChildren } from "react";
import { useMirror, useMirrorRegistry } from "../store";


export default function Utils(props: PropsWithChildren) {
  const { children } = props;

  const setTabs = useMirror("setTabs");
  const tabs = useMirror("tabs")

  const handleChangeTab = (id: number) => {
    const selected = tabs.find((t) => t.id === id);
    if (!selected) return;

    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === id,
      }))
    );

    const params = new URLSearchParams(window.location.search);
    params.set("tab", selected.query);

    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  useMirrorRegistry("onChangeTab", handleChangeTab);

  return <>{children}</>;
}
