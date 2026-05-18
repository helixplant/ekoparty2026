# Code Security in the AI Era — Ekoparty Miami 2026

Slide deck for the talk **"Code Security in the AI Era"** at [Ekoparty Miami 2026](https://www.ekoparty.org/) on May 21, 2026.

**Live deck:** https://githubevents.github.io/ekoparty2026/

## Speakers

- **Serena Conticello** — Security Researcher, GitHub Advisory Database
- **Rodolfo Sarmiento** — Senior Customer Success Architect, GitHub

## About the talk

A walkthrough of the modern code-security threat landscape — supply chain attacks (tj-actions, Axios, Mini Shai-Hulud / TanStack), the rise of vibe coding, and what GitHub is shipping to push security into the moment of writing: Dependabot, CodeQL, secret scanning + push protection, the MCP server, Copilot Autofix, and code-to-cloud risk visibility with Defender for Cloud.

## Running the deck

The deck is a single-page HTML presentation rendered at a fixed 1920×1080 stage by `deck-stage.js`. It scales to fit any viewport.

Open it locally with any static file server, e.g.:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

> The deck loads local fonts and background images, so opening `index.html` directly via `file://` may not render everything correctly. Use a static server.

### Navigation

- `←` / `→` — previous / next slide
- `Home` / `End` — first / last slide
- `Esc` — open the tweaks panel (live design overrides)

## Exporting to PDF

The final slide includes a **Download deck as PDF** button. It triggers `window.print()` with print styles tuned to a 1920×1080 page, so each slide becomes one landscape page. From the browser print dialog, choose **Save as PDF** as the destination.

Tested in Chrome and Edge. For best results, set margins to **None** and enable **Background graphics** in the print dialog (this is on by default in most Chromium browsers).

## Project structure

```
.
├── index.html              # The deck (entry point for GitHub Pages)
├── deck.html               # Identical copy of the deck for direct linking
├── colors_and_type.css     # Design tokens, typography, GitHub brand palette
├── deck-stage.js           # <deck-stage> custom element: stage scaling + nav
├── tweaks.jsx              # Live tweaks bootstrap
├── tweaks-panel.jsx        # In-app design tweaks panel (Esc to open)
├── assets/
│   └── backgrounds/        # Grain backgrounds
└── fonts/                  # Mona Sans family (Display, Expanded, Mono)
```

## Hosting

Served via GitHub Pages from the `main` branch root. Any push to `main` triggers a rebuild.

## License

The slide content is © 2026 the speakers and GitHub. Mona Sans is licensed under the [SIL Open Font License 1.1](https://github.com/github/mona-sans/blob/main/LICENSE.md).
