# Orange Home Health — developer handoff / Version 1

**Open `index.html` for the complete, connected eight-page website design.** The pages are Home, About, Our Services, Skilled Nursing, Home Health Aide, Resources, Careers and Contact. Each has its own content and responsive layout, connected by shared navigation and footer. No server, framework, package installation or build is required to view it. Start with `START-HERE.txt` and `DEVELOPER-HANDOFF.md` for the bilingual delivery notes.

The homepage includes a cinematic hero, photographic services, editorial about section, aligned care steps, redesigned language support and FAQ. `homepage.html` remains an identical alias for earlier preview links. See `SITE-MAP.md` for the original-site sources, page mapping and content decisions.

The Version 1 interaction layer adds lightweight, dependency-free motion inspired by modern component patterns: service and editorial imagery reveal as it enters the viewport, service navigation opens smoothly, and FAQ answers expand with a gentle transition. Reduced-motion preferences are respected.

The hero automatically crossfades between three illustrative photos every 2.5 seconds, with a small “Final video will appear here” label and a text-only pause/resume control. There is no circular play button. “Preview our introduction” opens a nine-second HTML motion concept with three stills, pause/replay, and manual scene selection. **These are video placeholders, not encoded or filmed videos.** To use approved final MP4 files, set `HERO_VIDEO` and `INTRO_VIDEO` at the top of `homepage.js`. The native video players and poster/error fallbacks are provided. Add captions and a transcript if the approved introduction includes speech.

For future Figma work, use `FIGMA-HANDOFF.md`, `figma-tokens.json`, and the importable vector board `figma-foundations.svg`. These provide transferable foundations and a component map; no native Figma file was created.

Open `design-system.html` for the foundation guide, `specification.html` for the complete system, and `research.html` for the eight-site audit. The guide now lets you select any of the eight website pages and inspect it at 1440, 1200, 1024, 768, 390 or 375px. Page-specific refinements and the multi-page component map are documented in the Figma handoff.

The static files work offline; external resources, maps and contact destinations require the appropriate connection or app. JavaScript handles menus, the introductory preview and local form demonstrations. Careers and Contact include visible form layouts with native field validation and an explicit local-only result. Nothing is sent or stored; there is no intake or recruitment backend. Use example details only.

Required fields use an asterisk with a short explanatory legend. Name, email and the primary phone number are required; Careers also requires the position of interest. Address, messages and the alternative phone remain optional without repeated optional labels.

## Files

- `DESIGN-SYSTEM.md`: source specification covering all requested foundations, components, UX, and WordPress recommendations.
- `REFERENCE-AUDIT.md`: review of all six references plus the original website and current draft, with source links and evidence scope.
- `tokens.css`: namespaced foundations and responsive typography tokens.
- `components.css`: shared accessible component styles, responsive behavior, and local font declaration.
- `theme.json`: mergeable WordPress starting configuration; not an installable theme. Copy the font and its license too. The production theme must map heading styles to the responsive tokens and implement the documented states; `theme.json` alone does not implement them.
- `index.html`, `homepage.html`, `homepage.css`, `homepage.js`: home design and home-only motion.
- `about/`, `services/`, `skilled-nursing/`, `home-health-aide/`, `resources/`, `careers/`, `contact/`: seven complete interior pages.
- `site.css`, `site.js`: shared navigation, interior layouts and local-only forms.
- `SITE-MAP.md`: original-to-new page mapping, source links and scope boundaries.
- `assets/`: Manrope font and OFL license; draft-sourced illustrative photography; the supplied logo reference; a temporary transparent PNG; and draft SVG reconstructions for the designer. Sources and approval boundaries are documented in `FIGMA-HANDOFF.md`.
- `figma-foundations.svg`, `figma-tokens.json`, `FIGMA-HANDOFF.md`: reusable design foundations and recreation notes.
- `verify.mjs`: small local integrity check. Run `node verify.mjs` inside this folder.
- `build.mjs`: rebuilds HTML reading editions and WordPress settings from sources. Run `node build.mjs` inside this folder after editing the Markdown or color tokens.
- `build-site.mjs`: rebuilds the seven interior pages and shared navigation, then synchronizes `index.html` with `homepage.html`. Edit interior content in this generator, not its generated HTML. Run `node build-site.mjs`, then `node verify.mjs`.
- `QA.md`: checks completed and remaining production validation.

## Scope

No live website changed. No made-up staff, reviews, locations, insurers, statistics, or accreditation claims. Placeholder examples remain labeled in the foundation guide; evidence-dependent modules are omitted from the homepage. The photography is illustrative, not verified Orange staff/patients. The header and footer temporarily use the supplied logo as a transparent PNG; the designer can replace it with the approved SVG later.

The existing Eco Happy project is separate and unchanged. The earlier detailed SVG reconstruction remains in the parent folder and is copied into this package for handoff; it is not an approved identity or an exact trace of the raster image.
