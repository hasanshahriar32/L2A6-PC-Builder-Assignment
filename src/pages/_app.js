import { BuildProvider } from "@/context/BuildContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <BuildProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </BuildProvider>
  );
}
