import type Properties from "posthog-js";
import posthog from "posthog-js";


export const sendEvents = (eventName: string, properties?: Properties) => {
  if (process.env.NODE_ENV !== "development") {
    posthog.capture(eventName, properties);
  }
}
