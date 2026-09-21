# Orange / Website Version 1 — Figma handoff

## What is ready

`index.html` opens the 13-page working website. `homepage.html` remains the home-layout source and matching alias. `homepage.css` contains the home layouts; `site.css` adds interior layouts and shared navigation; `tokens.css` and `components.css` provide the shared foundation. All photography and the vector web mark are local in `assets/`. `SITE-MAP.md` maps the original content to the redesign and its added service-detail pages.

`figma-foundations.svg` can be imported into Figma as vector artwork. It contains palette swatches, text examples, spacing and a button example. Text remains text; install Manrope before matching the browser typography. Georgia is the editorial italic accent. This SVG is a style board, not a complete editable website.

`figma-tokens.json` is a plain structured reference to the homepage values. It is not a native `.fig` file, nor a promise of automatic plugin import. Map these values to Figma variables and text styles using the naming below.

## Canvas and layout

| Frame | Width | Content | Outer gutter | Section padding |
| --- | --- | --- | --- | --- |
| Desktop | 1440 | 1320 | 60 | 104 |
| Compact desktop | 1024 | 960 | 32 | 104 |
| Tablet | 768 | 704 | 32 | 76 |
| Mobile | 390 | 350 | 20 | 60 |
| Small mobile | 375 | 335 | 20 | 60 |

Desktop has a 12-column reference grid, 24px gap; mobile has four columns, 16px gap. The actual layouts use two columns for editorial sections, three for care steps, and four/two/one for therapy links. Use Auto Layout, not absolute positioning, for content and controls.

The website content maximum is now 1320px (the original foundation guide retains its 1200px reference). The footer has one navigation column with 30px link rows on desktop and 36px on mobile. Desktop footer padding is 48px above the content, 32px below it, and 16px around the bottom legal row. On tablet, brand and contact share the left column alongside the single navigation list; mobile stacks all three blocks.

Full-width hero and contact panels sit outside the reading container, with 20px outer margins on desktop, 12px on tablet, and 8px on mobile. Hero min-height: 680px desktop, 660px tablet, 740px mobile. Height can grow with text. At 1440px the 82px headline and content determine the final height.

## Layers / component map

```text
Orange / Homepage
  Header / Utility
  Header / Desktop | Compact
  Hero / Cinematic
    Media / Poster or muted video
    Overlay / Readability gradient
    Copy / Eyebrow + Heading + Description
    Actions / Primary + Phone
    Intro trigger / Rest | Hover | Focus
    Approved background video + still-image fallback
    Text motion control / Pause preview | Resume preview
  Care promises / Three items
  Services / Featured photo card × 2
  Services / Therapy link × 4
  About / Photo + Note + Copy + Checklist
  Getting started / Step × 3
  Languages / Copy + Non-interactive greeting grid
  FAQs / Disclosure / Closed | Open
  Contact / Dark CTA panel
  Footer / Brand + Single navigation column + Contact
  Introduction / Modal / Concept | Final video | Error
```

Color variables: `Brand/Orange`, `Brand/Blue`, `Ink/Navy`, `Ink/Body`, `Ink/Muted`, `Surface/White`, `Surface/Warm`, `Surface/Blue`, `Border/Default`, `State/Focus`. Preserve the exact hex values from the token files.

Text styles: `Hero/Desktop` (82/85.28, Manrope 500), `Hero/Tablet` (66/68.64), `Hero/Mobile` (54/56.7), `Heading/Desktop` (up to 52/59.8), `Heading/Mobile` (35/40.95), `Body` (18/29.7), `Body/Small` (16/27.2), `Action` (15/21.2, 700), `Eyebrow` (12/18, 700, 12% tracking). The headline uses Georgia italic only for the phrase “at home.” and section accent words.

Component states use existing foundation colors: default orange #B94716; hover #A03A10; pressed #842F0E; keyboard focus #155CBE with a white separator. Primary controls are 56px tall; hero action is 58px; mobile hero action is 54px. Native focus indicators and 44px playback/menu controls are intentional.

## Responsive behavior

- At 959px and below, navigation switches to a menu disclosure.
- Below 640px, feature cards and editorial sections stack; care steps become a vertical sequence.
- Care steps use equal-width columns with centered numbers, headings and balanced paragraphs on desktop/tablet. Connectors have equal clearance from each circle; mobile retains a left-aligned vertical timeline. The call button and phone number stack on the section centerline.
- The language section combines heading, explanation and CTA in the left column. A soft-blue panel on the right presents six native-language greetings with English language labels and an availability note. The static list is three columns on desktop and two on tablet/mobile; these are not buttons or language-switch controls.
- The mobile hero uses a 460px-high image at the top and a dark lower surface, keeping both faces in the crop while preserving text contrast.
- Service images crop with `cover`. About photo focuses at 75% horizontal position. Do not stretch images.
- The introductory preview is 16:9 on desktop and 3:4 on mobile. A supplied final video uses its native dimensions; it is not cropped by the demo layout.

## Interior pages / component map

Create separate Desktop and Mobile frames for About, Our Services, Skilled Nursing, Home Health Aide, Resources, Careers and Contact. The guide at `design-system.html` has a page selector and width controls for comparison. Keep all frames on the same shared variables as Home.

- `Navigation / Services dropdown`: closed, open and current-page states; shared footer routes across all pages.
- `Navigation / Breadcrumbs`: home, optional service parent, current page.
- `Hero / Service split`: copy and edge-cropped photo; blue nursing and warm aide/about/careers variants. Stacks below 640px.
- `Hero / Editorial`: headline left, supporting copy right; used for Services, Resources and Contact.
- `Service / Sibling navigation`: 240px desktop column; in-flow block below 960px.
- `Service / Clinical list`: two columns with check icons and dividers; one column below 640px.
- `Service / Catalog card`: four therapy/social-work sections, alongside the two photo service cards.
- `Resource / External link row`: small monogram, title, description, destination and external indicator.
- `Form / Enquiry` and `Form / Application`: shared label, required/optional state, input, textarea, validation and local-preview result; two-column field rows collapse below 960px.
- Required fields use a red asterisk (#B42318) plus one form-level explanation; optional labels have no suffix. Email and primary phone are both required alongside name (and position for Careers). Optional address, message and alternative phone stay unmarked. Preserve native required semantics, not just the visible symbol.
- `Contact / Office card`: address and external map link; paired with phone/email methods.

Do not represent static language greetings as controls. Forms are design previews with no delivery backend. No vacancies, staff identities or clinical promises should be added without approved content.

## Introduction / motion direction

The hero uses the supplied MP4 as a muted background loop with a still-image fallback and a small text-only pause/resume control. The separate introduction remains a nine-second **HTML motion concept**: three illustrative stills at three seconds each, with pause, replay and manual scene controls. The modal supports Escape, native focus containment and return focus. Reduced-motion preference pauses the hero and starts the intro in manual mode. Off-tab motion pauses automatically and resumes on return unless the visitor explicitly paused it.

`homepage.js` points `HERO_VIDEO` to the supplied local background MP4. The second supplied MP4 appears in Our Services with native controls and a local poster. Still images remain visible if hero playback fails. The modal introduction can later use `INTRO_VIDEO` if the client supplies a separate approved version.

Production brief: film real, consented people in a home setting; use a warm caregiver/patient interaction, one detail of thoughtful support, then the brand/contact closing shot. Keep the background loop free of essential text or dialogue. For a narrated introduction, provide an approved script, captions and transcript before publishing. No soundtrack or narration was created for this prototype.

## Identity and image provenance

The header and footer temporarily use `assets/logo-transparent.png`, a transparent-background PNG derived from the client-supplied `assets/logo-client-reference.png`. The designer can replace it later with the approved vector logo. Draft SVG reconstructions remain available as `assets/logo-full.svg` and `assets/logo-reconstruction.svg`, but the website does not currently use them.

Images reused from the client-supplied Uncoder draft:

- `hero-poster.jpg` ← https://orangehomehealthinc.uncoder.co/assets/hero-generated.jpg
- `nursing.jpg` ← https://orangehomehealthinc.uncoder.co/assets/nursing.jpg
- `home-health-aide.jpg` ← https://orangehomehealthinc.uncoder.co/assets/home-health-aide.jpg
- `logo-original.png` ← https://orangehomehealthinc.uncoder.co/assets/logo.png (reference only, not used by the new homepage)

The hero is illustrative imagery from the draft. Nothing represents verified Orange employees or patients. Confirm image rights, real-person permissions and final brand artwork before launch. There are no fabricated reviews, staff names, insurer marks or performance statistics in the design.

## Delivery boundary

The 13-page HTML/CSS design works locally with no framework, build or service account. The Figma groundwork is provided, but no native Figma document has been created. A designer can recreate components with the above Auto Layout mapping and imported vectors. Final copy, privacy/policy links, imagery, video and any patient intake or recruitment workflow need business approval before deployment. Every website page is deliberately `noindex`; this is not a published replacement for the existing website.
