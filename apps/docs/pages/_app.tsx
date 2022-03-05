import { useEffect } from "react";

import { AppProps } from "next/app";
import { useRouter } from "next/router";
import posthog from "posthog-js";

import "../styles/global.css";


const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!ANALYTICS_ID) return;

      // Init PostHog
    posthog.init(ANALYTICS_ID, {
      api_host: 'https://app.posthog.com',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
      },
    });

    if (process.env.NODE_ENV === 'development') {
      posthog.opt_out_capturing();
    }

      // Track page views
      const handleRouteChange = () => posthog.capture('$pageview');
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Component {...pageProps} />;
}
