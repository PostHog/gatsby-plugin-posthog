// gatsby-ssr.js defaults capture_pageview to 'history_change', where posthog-js
// captures every pageview itself. Only an explicit true/false needs help here.
export const onRouteUpdate = ({ prevLocation }, pluginOptions) => {
    const initOptions = pluginOptions.initOptions || {}
    const mode = initOptions.capture_pageview
    if (!window.posthog) return

    // false: posthog-js captures nothing, so capture every route.
    // true: posthog-js already captured the initial load, so capture navigations only.
    if (mode === false || (mode === true && prevLocation)) {
        window.posthog.capture('$pageview')
    }
}
