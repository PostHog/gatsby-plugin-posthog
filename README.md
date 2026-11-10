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

The plugin sets `capture_pageview: 'history_change'` by default, so posthog-js captures one `$pageview` for the initial load and one for each client-side navigation. You don't need to capture pageviews yourself.

To control pageviews yourself, set `capture_pageview` in `initOptions`:

| `capture_pageview` | Initial load | Client-side navigation |
|---|---|---|
| not set (default) or `'history_change'` | posthog-js | posthog-js |
| `true` | posthog-js | plugin |
| `false` | plugin | plugin |

Each mode captures exactly one `$pageview` per page view. With `capture_pageview: false`, posthog-js also stops capturing `$pageleave`, which Web Analytics uses for bounce rate and time on page. Set `capture_pageleave: true` to keep it.

With `'history_change'`, a `$pageview` fires only when the path changes, so query-string-only or hash-only navigations aren't counted.

### Upgrading from 1.0.x

1.0.x captured a `$pageview` on every route update in addition to posthog-js's own capture, so the initial load was counted twice, and with `capture_pageview: 'history_change'` (or a `defaults` date from 2025-05-24) every pageview was counted twice. After upgrading, expect pageview counts to drop to the real number and bounce rate to rise.

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)
