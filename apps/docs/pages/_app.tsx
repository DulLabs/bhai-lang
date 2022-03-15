import { useEffect } from "react";

import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

import { pageView } from "../helpers";

import "../styles/global.css";


const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!ANALYTICS_ID) return;
    const handleRouteChange = (url: string) => pageView(url); 
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} strategy='afterInteractive'/>
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ANALYTICS_ID}');
        `}
      </Script>
      <Component {...pageProps} />
  </>
  )
}
