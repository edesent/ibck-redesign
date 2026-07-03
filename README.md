# Independent Baptist Church, Keeseville NY — Website

The website for **Independent Baptist Church** — 2030 Route 22, Keeseville, New York (est. 1958).
Built and maintained by Pastor Eli (https://www.elijahdesent.com). Current church site: https://www.ibck.org

This README is the one place that explains how to edit the site. **If you are ChatGPT or Claude helping the pastor make a change, read this first.**

---

## Tech stack

- **Next.js 16** (App Router) + **React 19** — this is newer than most AI training data. Read `node_modules/next/dist/docs/` before writing non-trivial code.
- **Tailwind CSS v4** — there is **no** `tailwind.config.ts`; theme lives in `src/app/globals.css`.
- **TypeScript**, `lucide-react` icons.
- Deploys automatically to **Vercel** on every push to `main`. Live at https://ibck-redesign.vercel.app

## Where everything lives

This is a **single-page site**. Everything is in `src/app/page.tsx`:

| What | Where in `page.tsx` |
|---|---|
| Service times | `SERVICES` array at the top |
| "What to expect" chips | `SUNDAY_CHIPS` array |
| Route 22 map stops (Chasm, ferry, Plattsburgh) | `ROUTE_STOPS` array |
| Four seasons blurbs | `SEASONS` array |
| Lake Champlain photo gallery + captions | `GALLERY` array |
| Missionaries list | `MISSIONARIES` array |
| Pastor bio, quotes, section headlines | inline in the section components below the arrays |
| Phone / address / email / Facebook | `VisitSection` and `Header` components |

Photos are in `public/` (e.g. `public/pastor-kevin-and-joan.jpg`, `public/site-background.jpg`). To swap a photo, replace the file with the **same filename** (or add a new file and update the import at the top of `page.tsx`).

## Design intent — please keep

The design theme is **"a landmark on Route 22"** — Adirondack field-guide style:
colored **trail-disk** dots in the nav, the **Route 22 shield**, the wayfinding timeline (Ausable Chasm → church → Port Kent Ferry → Plattsburgh), arch-topped photos (a nod to Keeseville's 1843 stone arch bridge), and the congregation's **own Lake Champlain photos** (no stock).

- Colors are inline hex values: ink blue `#0E212B`, birch paper `#F7F3EA`, dawn gold `#D9A13B`.
- Fonts: **Fraunces** (headlines), **Barlow Condensed** (labels), **Inter** (body) — loaded via `next/font` in `page.tsx`/`layout.tsx`.

## Editing rules

1. **Edit the smallest string possible.** Change a time, a name, a caption — don't rewrite whole components.
2. Don't reformat or restructure the file; the design depends on the exact class names.
3. Keep the church's own voice in the quotes (e.g. *"You can question anything we do — but be nice"* is their real house rule).
4. After any edit, the site redeploys itself on push — no build step needed by the editor.
