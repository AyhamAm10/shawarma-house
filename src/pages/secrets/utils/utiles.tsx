import { type PropsWithChildren } from "react";
import { useMirror, useMirrorRegistry } from "../store";

export default function Utils(props: PropsWithChildren) {
  const { children } = props;
  const setFaqs = useMirror("setfaqs");

  const handleToggle = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return { ...faq, isOpen: false };
        }
      })
    );
  };

  useMirrorRegistry("onToggleFaqItem", handleToggle);
  return <>{children}</>;
}
