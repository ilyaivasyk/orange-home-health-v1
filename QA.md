# Verification notes

## Version 1 developer package / 21 September 2026

- Added dependency-free service navigation, scroll-reveal imagery and FAQ transitions. All motion respects the reduced-motion preference and remains readable without animation.
- Browser inspection confirmed the Version 1 scripts, initial reveal state, visible state after scrolling, FAQ expansion and the four-link service menu's open state.
- Added a transparent-background PNG based on the supplied logo and used it in the header and footer. Browser inspection confirmed the transparent logo at its intended 88px desktop size; the original raster and draft SVGs remain available for the designer.
- Versioned the local CSS/JavaScript references to prevent stale browser previews while keeping them relative and offline-safe. `index.html` is the single starting point; no server, framework, package install or build step is required for review.
- Added bilingual `START-HERE.txt` and `DEVELOPER-HANDOFF.md` files explaining the design system, integration-ready front-end files, Figma-oriented handoff, and production boundaries.
- Rebuilt all 13 pages and the matching home alias. Automated integrity, JavaScript syntax and archive-content checks passed before packaging.

## Complete website review / 21 September 2026

- Hero preview refinement: removed circular play icons; three decorative photos crossfade on a 2.5-second interval with a future-video label. Browser inspection confirmed changing active frames, a stable frame while paused, text-only resume, and introduction open/Escape dismissal. The introduction now uses three-second scenes (nine seconds total). Actual video remains an approved-asset integration, not generated footage.
- Form refinement: required fields use red `*` markers (#B42318) and one explanatory legend; optional suffixes are removed. Contact name/email/phone are required; Careers also requires name, email, primary phone and position. Browser inspection confirmed the red computed color, missing-phone validation blocking the result, and a valid fictitious phone enabling the explicit local-only result. No real data was sent.
- Footer refinement: merged the care/company link groups into one “Explore Orange” navigation column on all pages, preserving all ten destinations. Desktop retains separate brand and contact columns; mobile stacks them. Visually checked desktop and measured mobile at 375px: no overflow, all ten navigation links share one left edge. The integrity check now enforces one footer navigation with ten links per page.
- Compact/wider refinement: increased the website container maximum from 1200px to 1320px; reduced footer padding and desktop link rows from 38px to 30px, with 36px rows on mobile. At the inspected 1280px desktop viewport, the updated footer measured 468px tall. Tablet puts brand/contact beside the spanning navigation column. Updated stylesheet URLs prevent the preview from retaining stale spacing; source integrity checks pass.
- Reviewed the original site's business pages and documented the new requested destinations. Source-to-page mapping and exclusions are in `SITE-MAP.md`.
- The shared responsive system was checked at desktop and mobile widths. The new service-detail page matched its 390px viewport without horizontal overflow. This is a layout check, not full accessibility certification.
- Visually inspected the nursing desktop and 375px mobile hero, plus the revised homepage care steps and language section. The three care steps now use centered, equal-width columns and balanced connectors; languages use a non-interactive greeting panel.
- Verified local navigation, the desktop service menu and all 13 destinations in the mobile menu.
- Contact's empty submission exposed two invalid required fields. Valid example name/email produced the explicit “nothing has been sent or stored” result. Careers' valid example required fields produced the same local-only result. No submission was transmitted to Orange.
- `verify.mjs` covers all 13 pages plus the matching homepage alias: asset and page links, fragment targets, field labels, required service forms, one h1, unique IDs, image alternatives, shared script, noindex, no stale links to the old site, token agreement and handoff files.
- Final `node build.mjs`, `node build-site.mjs` and `node verify.mjs` passed. Syntax checks passed for `build-site.mjs`, `site.js`, `homepage.js` and `guide.js`.

The new pages are complete static designs, not a CMS deployment. Live enquiry/recruitment delivery, privacy/legal copy, server errors, real assistive-technology testing and approved operational details remain production work. Foundation and homepage-v2 checks below are historical; the v3 entry describes the latest scope.

## Homepage v2 / 21 September 2026

- Visually inspected the photographic homepage at 1440px desktop and 390px mobile, including the header, hero and introduction modal. Adjusted the mobile crop to retain the caregiver/patient interaction.
- Measured the current homepage through the design guide’s iframe at 375, 390, 768, 1024, 1200 and 1440 CSS pixels. Document scroll width matched viewport width at every tested size.
- Opened the introduction modal; confirmed the first scene, manual switch to scene two, paused state, Escape dismissal, and focus returning to the trigger.
- Confirmed mobile menu open/Escape close and the background-motion pause state.
- No browser console errors were reported in the inspected homepage session.
- `node verify.mjs` passed: local assets, anchors, unique IDs, one h1, image alternatives, named native dialog, noindex, token agreement and handoff files. `node --check homepage.js` passed.
- Primary reading paragraphs use 18px text on desktop and mobile. Smaller labels, navigation and secondary details are intentionally separate styles.

The introduction is an HTML still-image motion concept, not a filmed/encoded video. No paid generation was submitted. The two optional MP4 paths are empty and must be populated with approved final assets; actual video codec compatibility, captions and audio remain production checks. Reduced-motion handling and no-JS static fallback are implemented but were not tested with a real assistive-technology/device preference session. The browser full-page screenshot stitch produced duplicated regions; individual viewport screenshots and DOM measurements were used instead.

The current responsive handoff is `FIGMA-HANDOFF.md`. The foundations SVG contains vectors/text, not a complete page capture or a native Figma file. Current brand and photography approval requirements are documented there.

## Foundation package / 20 September 2026

## Completed

- Reviewed all six supplied references, the original Orange website, and the Uncoder draft in a browser. Sources and observation scope are in the audit.
- Calculated the documented flat-color contrast ratios, including CTA default/hover/pressed, body, links, control boundaries, and semantic colors.
- Rendered and visually inspected the design guide and full specification in the browser.
- The generated specification includes all 17 numbered sections and 11 specification tables.
- Measured the embedded homepage at 1440, 1200, 1024, 768, 390, and 375 CSS pixels: document scroll width equaled viewport width at each size. No horizontal page overflow was detected.
- Visually inspected the 375px homepage and the desktop header. The compact menu opened; Escape closed it.
- Empty form submission produced a linked error summary and moved focus to it. Valid example phone details produced explicitly local-only confirmation. Switching to email required email instead of phone; a valid example email passed.
- Service selection exposes “Not sure” and all six named services after correcting malformed option markup during QA.
- JavaScript syntax checks passed. No guide console errors were reported during the inspected session.
- Static HTML asset/file links resolved locally. `theme.json` parsed successfully; local font and license are included.

## Boundaries and production follow-up

This is a design package, not a deployed WordPress theme. No real enquiry, medical details, or test form submissions were sent to Orange or a reference business. No live content was edited.

The remote browser viewport override did not change the reference-page viewport, so remote-site mobile conformance was not measured. The six local concept widths were tested reliably through the guide’s actual iframe sizes.

The no-overflow checks are not full accessibility certification. Still required in production: 320px reflow, text-only enlargement/200% zoom, a full keyboard pass, VoiceOver/NVDA testing, real content/crops, reduced-motion and device testing, server error/delivery states, approved privacy copy, current contact/coverage verification, and current credential evidence. Native disclosures and focus styling are provided, but real assistive-technology testing remains a separate release check.

The homepage deliberately omits unverified staff, reviews, insurer logos, and accreditation claims. The visual guide labels their component slots. Version 1 used a neutral photography placeholder; version 2 uses draft-sourced illustrative imagery with explicit provenance in the handoff. External source links are research/contact destinations, not proof of current licensing, insurance eligibility, or admission availability.
