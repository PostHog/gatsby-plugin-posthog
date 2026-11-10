export const onRouteUpdate = ({ prevLocation }, pluginOptions) => {
    const mode = (pluginOptions.initOptions || {}).capture_pageview
    if (!window.posthog) return

    // The default 'history_change' needs no help; `true` only covers the initial load.
    if (mode === false || (mode === true && prevLocation)) {
        window.posthog.capture('$pageview')
    }
}
