export const sendEvents = (eventName:string,config?: { [key: string]: string | boolean | number}) => {
  if (typeof window !== "undefined" && window.gtag && process.env.NODE_ENV !== "development" && process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    window.gtag("event", eventName, config)
  }
}

export const pageView = (url:string) => {
  if (typeof window !== "undefined" && window.gtag && process.env.NODE_ENV !== "development" && process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
      path_url: url,
    })
  }
}
