# mayankjain.dev

Personal site for **Mayank Jain** — engineering manager, Bengaluru.

Static, dependency-free: one `index.html` (inline CSS + JS) plus `assets/`.
No build step — Netlify serves the repo root as-is.

## Structure

```
index.html   the whole site: type system, sections, animations, console
assets/      product screenshots (Halisi itinerary CMS, booking platform)
```

## Sections

01 Impact · 02 Experience · 03 Case study (Platform V2) · 04 Products (Halisi)
· 05 About · 06 Console · 07 Contact

The console is an interactive shell — `help`, `whoami`, `work`, `impact`,
`case`, `halisi`, `cms`, `booking`, `skills`, `contact`, `resume`, `ls`.

## Local

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
