import { useState, type PropsWithChildren } from "react";
import type { FAQItem } from "./store/state";
import { useMirrorRegistry } from "./store";
import { faqs } from "./static-data/data";

export default function State(props: PropsWithChildren) {
  const { children } = props;
  const [data, setData] = useState<FAQItem[]>(faqs);
  useMirrorRegistry("faqs", data);
  useMirrorRegistry("setfaqs", setData);
  return <> {children}</>;
}
