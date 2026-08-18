# Channabasava Utk — Portfolio

Run: `npm install` then `npm run dev`
Open: http://localhost:3000

## Structure
- `app/page.tsx` — homepage (hero, about, expertise, projects, achievements, blog teaser, contact)
- `app/blog/page.tsx` — blog index (empty, ready for your articles)
- `components/Header.tsx` — sticky nav
- `components/ContactForm.tsx` — contact form that opens the visitor's email app via `mailto:` with the message pre-filled (no backend needed)

## Before deploying
- In `components/ContactForm.tsx`, replace `your-email@example.com` with your real email.
- In `app/page.tsx`, replace the same placeholder email in the Contact section's "Email" link.
- Edit projects, achievements, and copy directly in `app/page.tsx`.

## Deploy
Push to GitHub, then import the repo into Vercel (or run `vercel` from this folder).
