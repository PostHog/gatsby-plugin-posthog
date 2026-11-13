> [!WARNING]
> This SDK is deprecated. Please use the [PostHog JavaScript SDK](https://posthog.com/docs/libraries/js) instead.

# gatsby-plugin-posthog

![npm](https://img.shields.io/npm/v/gatsby-plugin-posthog?style=plastic)

A simple gatsby plugin to add [posthog](https://posthog.com/) analytics to your site. Automatically tracks all the pageviews and clicks.

## Install

`yarn add gatsby-plugin-posthog`

or

`npm install --save gatsby-plugin-posthog`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        // Specify the API key for your Posthog Project (required)
        apiKey: "YOUR_POSTHOG_ANALYTICS_API_KEY",
        // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
        apiHost: "YOUR_POSTHOG_APP_HOST_URL",
        // Puts tracking script in the head instead of the body (optional, default: true)
        head: true,
        // Enable posthog analytics tracking during development (optional, default: false)
        isEnabledDevMode: true
        // Pass custom variables to posthog.init() (optional)
        initOptions: {
          // ...
        }
      },
    },
  ],
}
```

## Pageview tracking

The plugin defaults `capture_pageview` to `'history_change'`, so posthog-js captures a `$pageview` on the initial load and on every path change. Override it in `initOptions`:

| `capture_pageview` | Initial load | Client-side navigation |
|---|---|---|
| `'history_change'` (default) | posthog-js | posthog-js |
| `true` | posthog-js | plugin |
| `false` | plugin | plugin |

With `false`, also set `capture_pageleave: true` to keep `$pageleave` events.

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)
