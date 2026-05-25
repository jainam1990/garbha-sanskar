# ગર્ભ સંસ્કાર — Garbha Sanskar

A devotional storytelling website for expectant mothers, featuring sacred stories from **Jainism** and **Hinduism** in Gujarati and Hindi.

## About

**Garbha Sanskar** (ગર્ભ સંસ્કાર) is the ancient Indian practice of imparting positive impressions to an unborn child through stories, music, and spiritual teachings. From the 5th month of pregnancy, the baby can hear and respond — this site provides carefully selected devotional kathāvāchak stories and bhajans to accompany that journey.

### Stories included

**Hindu tradition**
- Krishna Janma — The Birth of Lord Krishna
- Kalia Naag Daman — Krishna Tames the Serpent
- Govardhan Parvat — Krishna Lifts the Mountain
- Hanuman Janma — The Birth of Lord Hanuman
- Sunderkand — Hanuman's Journey to Lanka
- Shiv-Parvati Vivah — The Divine Wedding
- Ganga Avaran — Descent of the Ganga

**Jain tradition**
- Trishala Mata ke 14 Swapna — The 14 Dreams
- Mahavir Janma — Birth of Lord Mahavir
- Mahavir Keval Gyan — The Enlightenment
- Gautam Swami — Life & Meeting with Mahavir
- Gautam Swami Keval Gyan — Diwali Enlightenment

## Tech Stack

- **Single HTML file** — no build step, no framework, no dependencies
- **YouTube IFrame API** — embedded devotional videos with graceful error fallback
- **Pure CSS + vanilla JS** — fast, accessible, works offline after first load
- **Cloudflare Workers** — deployed as a static asset

## Local Development

Just open `garbha-sanskar.html` in your browser — no server needed.

```bash
open garbha-sanskar.html
```

## Deployment to Cloudflare Workers

This site uses [Cloudflare Workers Sites](https://developers.cloudflare.com/workers/platform/sites/) to serve the static HTML.

### Prerequisites

```bash
npm install -g wrangler
wrangler login          # opens browser to authenticate — your token stays local, never committed
```

### Deploy

```bash
wrangler deploy
```

The site will be live at `https://sanskar.jainamshah.workers.dev` (or the route configured in `wrangler.toml`).

> **Note:** Your Cloudflare Account ID and API tokens are **never stored in this repository**. Wrangler reads them from your local environment or `~/.wrangler/config.toml` after `wrangler login`.

## Security

- No API keys, tokens, or credentials are committed to this repository
- All video content is sourced from public YouTube embeds
- No user data is collected; no analytics; no cookies

## License

Content is sourced from public domain religious traditions and linked to Wikipedia for attribution. Code is MIT licensed.
