# ScaleIQ website

A React single-page website built with Vite. The finished site is plain static files: no server code and no database.

## Run and build

Needs Node.js 20 or newer.

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # creates the "dist" folder, which is what gets hosted
```

## Hosting the build

1. **Serve it as a single-page app.** Any address that is not a real file must return `index.html`.
   Without this, pages such as `/about/who-we-are` give a 404 when refreshed or opened directly.
   - nginx: `location / { try_files $uri /index.html; }`
   - Apache: `RewriteEngine On`, `RewriteCond %{REQUEST_FILENAME} !-f`, `RewriteRule ^ /index.html [L]`
   - IIS: a URL Rewrite rule that sends non-file requests to `/index.html`
   - Vercel: already handled by `vercel.json`.
2. **Serve it from the root of its own domain or subdomain** (for example `scaleiq.<company-domain>`).
   To host it in a sub-folder (such as `/scaleiq/`), set a `base` path in `vite.config.js` and rebuild.
3. HTTPS is recommended.
4. Do not test by double-clicking `index.html`; it only works when served by a web server.

## Needs the internet

- Fonts load from Google Fonts (PT Serif, DM Sans, Orbitron).
- Six photos on the "Our Culture" page load from `images.unsplash.com`.

If the users' network blocks these, fonts fall back to defaults and those six photos do not show.

## Forms are not connected yet

The four forms (Contact Us, For Investors, For Partners, For Portfolio Companies) need somewhere to send
their submissions. In `src/config/formEndpoint.js` set:

```js
export const FORM_ENDPOINT = '';   // put a Formspree / Web3Forms URL or an internal endpoint here
```

While it is empty, the forms show an error and ask visitors to email contact@scaleiqglobal.com.

## Not built yet

- The investor-deck flow (the team reviews a request, then the deck is emailed on approval) needs backend work.
  Today the investor form only delivers the request to an inbox, once the endpoint above is set.
- The investor deck PDF itself has not been supplied.

## Project layout

- `src/pages` - one file per page; `src/content` - case studies, blogs, legal text, products, services
- `src/components` - shared pieces (menu, footer, breadcrumbs, Ask ScaleIQ box)
- `src/index.css` - all styles; `src/theme.config.js` - colors and fonts
- `public/images` - photographs used by the pages
