# iGaming Affiliate Manager Portfolio

Professional portfolio website for **Ikechukwu Assurance Ifeoma** — iGaming Affiliate Manager.

## Tech stack
- HTML5
- CSS3 (responsive, mobile-first)
- Vanilla JavaScript (no frameworks)

## Theme
Forest green, cream and subtle gold.

## Structure
```
igaming-portfolio/
├── index.html
├── styles.css
├── script.js
├── favicon.svg
├── README.md
└── images/
    └── profile.jpg   (add your own photo here)
```

## Sections
Home, About, Expertise, Experience, Achievements, Contact.

## Adding your photo
Place your photograph at `images/profile.jpg`. The site references this path with appropriate alt text.
Until the file exists, a graceful placeholder (initials "IA" on a forest-green panel) is shown automatically — no fake photo is shipped.

## Contact form
The contact form performs client-side validation (name, email, subject, message).
It does **not** send messages on its own. To actually deliver messages, connect it to a form service or backend, for example:

- Formspree: set `<form action="https://formspree.io/f/YOUR_ID" method="POST">` and remove `e.preventDefault()` in `script.js` (or submit via `fetch`).
- Netlify Forms: add `netlify` attribute to the form.
- Getform, Basin, or your own API endpoint.

See the note in `script.js` and the form note in `index.html`.

## Running locally
Open `index.html` in any modern browser. No build step or server is required (though a local server avoids any file-path quirks).

## Notes
- No brand, company, contact-detail, revenue or performance figures have been invented. Only the stated facts (3+ years experience, 5,000+ partners reached, four iGaming brands, listed duties) are used.
