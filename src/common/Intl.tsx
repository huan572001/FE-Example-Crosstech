import { useLayout } from "@/hooks/useLayout";
import enEN from "@/locales/en-EN";
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { IntlProvider as Provider } from "react-intl";

export default function IntlProvider({ children }: PropsWithChildren<any>) {
  const [{ locale }] = useLayout();
  const [message, setMessage] = useState(enEN);

  useEffect(() => {
    import(`../locales/${locale}.ts`).then((module) => {
      setMessage(module.default);
    });
  }, [locale]);

  return (
    <Provider messages={message} defaultLocale="en-EN" locale="en-EN">
      {children}
    </Provider>
  );
}
