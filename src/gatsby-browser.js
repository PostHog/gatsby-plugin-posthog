export const onRouteUpdate = () => {
    if (window.posthog) {
        window.posthog.capture('$pageview')
    }
}
