# tritonneurotech.com

The Triton NeuroTech website, built with [Astro](https://astro.build). Pushing to `main` publishes the site automatically through GitHub Pages.

## Everyday edits (no coding needed)

You can make all of these on github.com: open the file, click the pencil icon, edit, then **Commit changes**. The site updates about a minute later.

| To change… | Edit |
|---|---|
| Discord, Instagram, email, workday time/place | `src/site.config.ts` |
| Officers | `src/content/officers.yaml` (photos go in `public/officers/`) |
| Add a news post | Copy any file in `src/content/news/`, rename it, and edit it |
| Add or update a project | Copy any file in `src/content/projects/` |
| Events | **Don't edit the site.** Add them to the club Google Calendar. |

### Projects

Set `status: active` for this year's teams. When the year ends, change it to `status: complete` and the project moves to **Past projects**, grouped by `year`. `tracks` can be any of `EEG`, `EMG`, `ML`, `Hardware`. For a cover image, put it next to the file and add `image: ./photo.jpg`.

### News

The file name becomes the URL: `src/content/news/fall-showcase.md` → `/news/fall-showcase/`.

## Events and the Google Calendar

The Calendar page and the home page's event list read the club's public Google Calendar, so officers only ever update Google Calendar.

One-time setup:

1. Sign in to the club Google account and create a calendar called "Triton NeuroTech Events". Share it with the other officers ("Make changes to events").
2. In the calendar's settings, turn on **Make available to public**. Copy the **Calendar ID** from "Integrate calendar".
3. In [Google Cloud Console](https://console.cloud.google.com/), create a project, enable the **Google Calendar API** and create an **API key**. Restrict it to the Calendar API and to the websites `tritonneurotech.com/*` and `localhost:4321/*`.
4. In this GitHub repo, go to **Settings → Secrets and variables → Actions → Variables** and add `PUBLIC_GOOGLE_CALENDAR_ID` and `PUBLIC_GOOGLE_API_KEY`. Re-run the deploy.

Until this is set up, the site shows the events in `src/data/fallback-events.json`.

To load those events into the Google Calendar in one go, run `node scripts/make-ics.mjs`, then in Google Calendar go to **Settings → Import & export → Import** and pick `calendar-import/tnt-fall-2026.ics`, choosing the club calendar. Events with a week but no exact date are imported as week-long entries. Edit them in Google Calendar once dates are set.

## Contact form

Create a free form at [formspree.io](https://formspree.io) that sends to the club email, then add its ID as the `PUBLIC_FORMSPREE_ID` variable. Without it, the form opens the visitor's email app instead.

## Domain

`public/CNAME` holds `tritonneurotech.com`. In GitHub **Settings → Pages**, set the source to **GitHub Actions** and the custom domain to `tritonneurotech.com`, and tick **Enforce HTTPS**. At the domain registrar, add these DNS records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<github-org>.github.io` |

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321. Copy `.env.example` to `.env` to test the calendar and form locally.
