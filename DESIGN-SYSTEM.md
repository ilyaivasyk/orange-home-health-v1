# Orange Home Health Inc. — design system and UX direction

Version 1.0 · 20 September 2026 · WordPress implementation handoff

## 1. Direction and scope

**Professional care. A familiar place.** Retain the draft’s warmth and give visitors clearer answers. The visual signature combines readable navy type, calm blue information surfaces, warm white space, a single orange action, and photography of respectful human interaction. Use a small optional serif emphasis in the main headline; keep the rest of the interface in one highly readable sans serif. The system should resemble a well-run local healthcare organization.

This package includes a reference audit, visual component guide, responsive homepage concept, CSS tokens, and a `theme.json` starting point. It is a design handoff, not an installed WordPress theme or connected care-intake system. All six reference sites were reviewed; scope and evidence limitations are documented in [REFERENCE-AUDIT.md](REFERENCE-AUDIT.md).

Primary visitors are patients and family caregivers. Referring professionals and prospective employees have separate, readily accessible routes. The primary question sequence is: “What care is this?” → “Can you help with my needs?” → “Do you serve my area?” → “How do payment and next steps work?” → “How do I reach you?”

## 2. Evidence and publishing rules

Orange’s [Services](https://orangehomehealthinc.com/services/), [About](https://orangehomehealthinc.com/about/), [Skilled Nursing](https://orangehomehealthinc.com/skilled-nursing/), and [Contact](https://orangehomehealthinc.com/contact/) pages are the business sources. The audit contains the factual inventory. Public-site statements are source-supported, not independently certified.

Use three editorial statuses: **sourced** (matches existing business content), **needs confirmation** (dated, incomplete, or credential-dependent), and **proposal** (new wording or functionality). An editor-facing placeholder must be explicit: `[Approved staff name]`, `[Verified coverage list]`, `[Current accreditation evidence]`, `[Approved payment guidance]`, `[Permissioned review with source]`. Never publish the brackets. If the material is unavailable at launch, omit the whole optional section, heading, and space.

Do not publish invented experience counts, ratings, office hours, response times, insurer participation, medical outcomes, or guaranteed admission. Separate accreditation from licensing, insurance participation, reviews, and clinical quality measures. Each means something different. Team fluency does not imply website translation or staff availability at all times.

## 3. Color system

All CSS properties use `--oh-`. Light blue is a surface/accent color; readable blue is a separate darker token. Bright brand orange can remain in approved artwork, while the darker action orange supports white text. Suggested composition: approximately 70% white/off-white, 20% soft blue, 8% navy/type, and 2% orange accents. This is a direction, not a rigid pixel quota.

| Token | HEX | Role |
| --- | --- | --- |
| orange | #B94716 | Primary actions; restrained brand emphasis |
| orange-hover | #A03A10 | Primary hover |
| orange-active | #842F0E | Primary pressed |
| orange-bright | #FF9C4A | Decorative illustration detail only; no white text |
| orange-soft | #FFF0E6 | Small warm highlights with navy text |
| blue | #83CBE6 | Primary light-blue identity surface; navy text |
| blue-soft | #EAF6FB | Care information panels and quiet section backgrounds |
| blue-mid | #C7E7F3 | Selected backgrounds and supporting illustration |
| blue-ink | #17648B | Inline links, icons, outlined controls |
| blue-hover | #124F70 | Link hover |
| navy | #18354A | Headings, dark button, footer |
| navy-hover | #102A3D | Dark button hover |
| navy-active | #0A1D2B | Dark button pressed |
| white | #FFFFFF | Main content and input surfaces |
| canvas | #F8FAFA | Light neutral background |
| warm | #FBF7F2 | Occasional warm editorial surface |
| text | #263E4D | Body text |
| muted | #536673 | Supporting text; still readable |
| line | #D7E0E5 | Decorative dividers; not sole control boundary |
| control | #738694 | Visible input boundary on white |
| disabled-bg | #E4E9ED | Inactive controls |
| disabled-text | #536673 | Inactive label, no reduced opacity |
| success / success-bg | #24724D / #EAF5EE | Confirmed successful action |
| warning / warning-bg | #83520B / #FFF4D6 | Useful caution, never urgency marketing |
| error / error-bg | #B42318 / #FFF0EE | Error text and summary |
| focus | #155CBE | Focus ring, separated by white halo |

Measured using WCAG relative luminance: white/orange **5.28:1**; white/orange hover **6.76:1**; white/orange active **8.77:1**; navy/white **12.75:1**; body/white **11.18:1**; muted/canvas **5.70:1**; blue-ink/white **6.50:1**; navy/light-blue **7.07:1**; control-border/white **3.77:1**. White/light-blue is **1.80:1** and must not be used for readable labels. Success, warning, and error text on their own tinted surfaces measure **5.24**, **6.03**, and **5.93:1** respectively. These ratios apply to opaque flat colors, not photographs or overlays.

## 4. Typography

Primary family: **Manrope**, weights 400, 600, and 700, with `Arial, sans-serif` fallback. The supplied local variable font and OFL license make the preview independent of a font CDN. Self-host only necessary subsets in production; use `font-display: swap`. Optional editorial accent: **Georgia italic**, 400, one short phrase within a display heading. Never use the italic accent for instructions, navigation, numbers, or clinical information.

The desktop column applies at 1200px and above; the mobile column applies below 768px. Between them use H1 48/56, H2 36/44, H3 28/36; keep body/action sizes unchanged. Values below are size/line-height in pixels, implemented as rem. Do not force manual line breaks on narrow screens.

| Style | Family | Desktop | Mobile | Weight | Letter spacing |
| --- | --- | --- | --- | --- | --- |
| Display | Manrope; optional Georgia accent | 64/72 | 40/48 | 600; accent 400 | −0.035em; accent −0.025em |
| H1 | Manrope | 56/64 | 36/44 | 600 | −0.03em |
| H2 | Manrope | 40/48 | 30/38 | 600 | −0.025em |
| H3 | Manrope | 28/36 | 24/32 | 600 | −0.015em |
| H4 | Manrope | 22/30 | 21/29 | 700 | −0.01em |
| Body Large | Manrope | 20/32 | 20/32 | 400 | 0 |
| Body | Manrope | 18/29 | 18/29 | 400 | 0 |
| Small | Manrope | 16/25 | 16/25 | 400 | 0 |
| Caption | Manrope | 14/22 | 14/22 | 400 | 0 |
| Button | Manrope | 17/24 | 17/24 | 700 | 0 |
| Navigation | Manrope | 17/26 | 18/28 | 600 | 0 |

Use at most 65 characters per paragraph line; 45–65 is the target. Keep headings to approximately 22 characters per line. Body text is left-aligned, never justified. Captions are for nonessential metadata only. Essential labels, availability statements, privacy guidance, and form instructions use at least 16px. Use sentence case; reserve short uppercase labels for nonessential design-guide metadata. No fixed text heights or truncation for care information.

## 5. Spacing, grid, containers

Scale: **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 120px**. At a 16px root these become .25/.5/.75/1/1.5/2/3/4/5/7.5rem. Use 1–2px borders and 3px focus rings as functional exceptions.

| Relationship | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Standard section padding, top/bottom | 80 | 64 | 48 |
| Major editorial section | 120 | 80 | 64 |
| Compact information strip | 32 | 24 | 24 |
| Heading to introductory paragraph | 16 | 16 | 16 |
| Section introduction to content | 32 | 32 | 24 |
| Grid gap | 24 | 24 | 16 |
| Card padding | 32 | 24 | 24 |
| Form field group gap | 24 | 24 | 24 |
| Label to input / input to hint | 8 / 8 | 8 / 8 | 8 / 8 |
| Buttons in a group | 16 | 16 | 12 |

Containers: **1200px** wide, **720px** reading, **640px** form. Use `width: min(1200px, calc(100% - 2 * gutter))`. Full-bleed background bands contain aligned inner content. Never stretch body paragraphs across the 1200px container.

| Viewport | Content width / side padding | Grid | Layout decision |
| --- | --- | --- | --- |
| 1440 | 1200 / 120 each | 12 columns, 24 gap | Full navigation; 6+6 hero; 3 service columns |
| 1200 | 1104 / 48 | 12 columns, 24 gap | Full navigation; 6+6 hero; 3 service columns |
| 1024 | 960 / 32 | 8 columns, 24 gap | Compact navigation; split hero; 2 service columns |
| 768 | 704 / 32 | 8 columns, 24 gap | Compact navigation; hero text above image; 2 service columns |
| 390 | 350 / 20 | 4 columns, 16 gap | Single column; full-width main CTA |
| 375 | 335 / 20 | 4 columns, 16 gap | Same as 390; allow natural text wrapping |

Breakpoints: mobile <768; tablet 768–1199; desktop ≥1200. Hero splits at ≥960. At 320px use 16px side padding and preserve reflow. Editorial sidebars collapse above the article body; form fields remain one column at all sizes. The maximum width remains 1200 even on ultrawide screens.

## 6. Shape, borders, shadows

| Element | Radius / rule |
| --- | --- |
| Buttons and fields | 8px |
| Service and location cards | 12px |
| Photography | 12px; hero may use 16px |
| Resource and team layouts | 0px outer wrapper; image 12px |
| Informational badge | 4px; never looks like a button |
| Modal | 16px |
| FAQ | Flat rows with separators |

Use a 1px decorative border on passive cards and a 2px control boundary on fields. Focus never changes layout. Card shadow: `0 2px 8px rgb(24 53 74 / .05)`; dropdown: `0 8px 24px rgb(24 53 74 / .12)`; sticky header: `0 2px 8px rgb(24 53 74 / .08)`; modal: `0 24px 64px rgb(24 53 74 / .20)`. Focus: 2px white halo plus 3px focus-blue outline offset by 3px. Static cards generally use borders without shadows. No shadow on every page section.

## 7. Button system

Minimum standard height **52px**, padding 12px 24px, 17/24 bold label, 8px radius, 12px icon gap. Compact icon target **48×48px** with a 24px icon. Labels wrap if needed; no clipping at text zoom. One primary action per decision group; repeat the same action only at meaningful points in the page.

| Variant | Default | Hover | Active |
| --- | --- | --- | --- |
| Primary | White on orange | White on orange-hover | White on orange-active |
| Secondary | Blue-ink on white, 2px blue-ink border | Navy on blue-soft | Navy on blue-mid |
| Text | Underlined blue-ink, transparent | Blue-hover, thicker underline | Navy, thicker underline |
| Dark | White on navy | White on navy-hover | White on navy-active |
| Light | Navy on white; for dark backgrounds | Navy on blue-soft | Navy on blue-mid |
| Icon | Navy on white, control border | Navy on blue-soft | Navy on blue-mid |

**Focus:** shared double ring on every variant, including dark surfaces. **Disabled:** disabled-bg and disabled-text with control border, no hover/active change; native disabled for buttons, no unavailable navigation links styled as working controls. **Loading:** keep label width, display “Sending…”, set busy state, prevent repeats, and announce status. Never show success until the server confirms receipt. A navigation action is an anchor; a local state change or form action is a button. Icons accompany useful words unless the icon-only action has a clear accessible name.

Primary label: **Talk to our team**. Inside a contact form: **Request a call**. Secondary: **Explore services**. Phone: **Call 818-532-5353**. “Request care” must explain that a request does not confirm admission, coverage, or appointment time. Avoid “Book now” unless real appointment booking exists.

## 8. Forms and feedback

The first enquiry should request only enough information for a conversation: name; preferred contact method; phone or email required according to that choice; optional city/ZIP; optional service selection including “Not sure”; optional short message; contact permission wording approved by the business. Do not request diagnoses, full address, policy/member numbers, date of birth, medical records, or uploads in this public enquiry. Show “Please leave out medical details. Our team can explain how to share them securely.”

| Control | Structure and behavior |
| --- | --- |
| Text | Persistent 16/24 label; `autocomplete=name` for name; 18px input text |
| Phone | `type=tel`, `autocomplete=tel`, accept spaces/+()/dashes; avoid rigid input masks |
| Email | `type=email`, `autocomplete=email`, no autocapitalization |
| Textarea | 5 rows minimum; resize vertically; optional, 1000-character limit with helpful count |
| Select | Native select, labeled placeholder, 52px minimum height; “Not sure” where appropriate |
| Checkbox | Native square control at least 24px, within a 48px clickable label area; unchecked by default |
| Radio | Native radio group with fieldset/legend; 48px label rows; full label activates control |
| Default | White background, text color, 2px control border |
| Hover | Border blue-ink; background remains white |
| Focus | Double ring; label and hint remain visible |
| Filled | Normal border; values are not mistaken for placeholder text |
| Disabled / readonly | Disabled-bg plus explanation; readonly values remain selectable |
| Error | Error border plus written correction, `aria-invalid`, associated description |
| Success | Form-level confirmation after actual receipt; do not reward each valid keystroke |

Validate on submit, and revalidate corrected fields on blur after the first failed attempt. Provide a summary linked to each invalid field, move focus to the summary, and retain entries. An empty required phone error reads “Enter a phone number so our team can call you.” Network failure reads “Your request was not sent. Please try again or call 818-532-5353.” After confirmed receipt: “Your request has been received. This is not an appointment confirmation.” Add only an operationally verified response window.

The local specimen demonstrates field validation only, sends no information, and labels that boundary visibly. Production needs a separately approved form endpoint and privacy wording. Do not send messages/field values to analytics or record them in session replay. Use technical controls appropriate to the information collected; do not badge the design itself as “HIPAA compliant.”

## 9. Component library

| Component | Appearance / content | States and rules |
| --- | --- | --- |
| Service card | Open or thin-bordered surface, line icon, service-name H3, ≤35-word description, one descriptive link | Default/hover/focus; link underlines. No entire-card nested interactive elements. Two primary services can be larger; other disciplines remain equally findable. |
| Team card | Portrait 4:5, approved name, role, short bio; no outer raised box | Optional verified tenure; no stock image next to a fabricated identity. Missing staff data removes the module. |
| Location card | Text-first office/coverage distinction, address, local contact, directions | Manual area list first; checker only with maintained data. No map-only information. |
| Testimonial | Editorial quotation, attribution, date and source; optional source rating clearly labeled | Static by default; permission and provenance recorded. No invented quotes or automatic carousel. |
| Resource card | 3:2 photo or document icon, title, plain summary, review/update date | Show file type/size for downloads; link focus, hover; no empty blog grid. |
| Insurance card | Insurer name as text, exact confirmed plan scope, “last checked,” contact route | Available only after confirmation; no universal coverage ticks. |
| Trust/accreditation | Compact evidence strip with approved mark, exact claim, evidence link/date | Pending evidence is an editorial state; hide on public site. Never recolor an accreditation seal. |
| FAQ | Full-width native disclosure rows, 20px question, 24px indicator | Open/closed/focus; independent expansion; no motion requirement; answers present in DOM. |
| Process | Three numbered steps on an open background | Contact → discuss assessment → individual plan. Avoid making the sequence a promise of automatic eligibility. |
| Contact panel | Light-blue surface, phone, short form or contact link, office detail | Persistent labels, status/error messages; no guaranteed response speed. |
| Breadcrumbs | Small text navigation above inner page title | Wrap; final item marked current; omit on home. |
| Modal, when needed | Native dialog, clear title/close, restrained shadow | Focus moves in, remains within, Escape closes, focus returns. Prefer an ordinary page for contact. |

Use cards for meaningful groups, not as decoration around every sentence. Team, reviews, and FAQ have deliberately different structures. Service descriptions are new editorial summaries subject to clinical review; their wording must not broaden the existing service inventory.

## 10. Navigation and information architecture

Desktop main navigation: **Services · How care works · Service area · About · Resources** plus **Talk to our team**. Utility row: telephone, FAQs, Careers, Contact. This keeps all requested routes within one action without cramming seven equal-priority items into the main row. Footer repeats all routes and approved policy links.

At <1200px: logo/name, Call, and labeled **Menu** button. Expand a normal navigation panel below the header, not a full-screen animated overlay. Button exposes expanded state and controls association; Escape closes and restores trigger focus. Never depend on hover. Services dropdown uses a disclosure button beside the Services link, containing the six service links plus “All services.” Keep the header approximately 88px desktop / 72px compact, but allow growth for text zoom. Sticky behavior must not obscure focused content; unstick when viewport height is constrained.

| Route | Page purpose and structure |
| --- | --- |
| `/` | Orientation, services, geographic fit, payment questions, care process, trust, contact |
| `/services/` | All six categories; short definitions; choice assistance; individual detail links |
| Existing `/skilled-nursing/`, `/home-health-aide/` | Preserve established URLs; care scope, what to expect, coordination, relevant FAQ, contact |
| Proposed `/physical-therapy/`, `/occupational-therapy/`, `/speech-therapy/`, `/medical-social-work/` | Shared service template; publish only after unique content is approved |
| Proposed `/how-care-works/` | First conversation, assessment/coordination, individualized plan; payment questions |
| Proposed `/service-area/` | Approved service coverage separately from the Van Nuys office; contact fallback |
| `/about/` | Mission, approach, staff languages, optional real team and evidence |
| `/resources/` | Curated patient/family resources; downloadable policies when supplied |
| Proposed `/faqs/` | Services, start of care, coverage area, payment, languages, contact |
| `/careers/` | Actual openings or accurate enquiry route; separate from patient intake |
| `/contact/` | Phone, office details, minimal enquiry; provider contact instructions after confirmation |
| Proposed policy routes | Approved privacy, patient privacy practices where applicable, accessibility/contact assistance, nondiscrimination information |

Do not generate multiple near-identical city pages. One office does not justify a multi-office locator. Start with “Ask about care in your area” and a clear contact route until the business supplies boundaries. When an approved ZIP list exists, a checker must distinguish supported, not listed, malformed input, and temporarily unavailable. A positive result means “We serve this area; contact us to discuss availability,” never “You qualify.” Let users enter location manually; do not require geolocation or an address.

For professionals, provide a clearly labeled contact option and confirmed referral instructions; do not turn the public enquiry form into a medical-record uploader. If volume warrants it later, add a dedicated provider page and approved secure workflow.

## 11. Recommended homepage sequence

| Order | Section | Content / decision | Why it helps |
| --- | --- | --- | --- |
| 1 | Header | Recognizable logo; useful navigation; telephone and one primary CTA | Gives an immediate escape route to human help. |
| 2 | Hero | Readable category, warm headline, one sentence, contact CTA, service link, supporting photograph | Explains both the care category and emotional benefit. |
| 3 | Evidence strip | Assessment-based plan, physician coordination; accreditation only after confirmation | Places substantiated reassurance beside the first decision. |
| 4 | Services | Two featured services and four clear supporting service links | Answers “Can you help?” before company storytelling. |
| 5 | Service area + payment questions | Office distinguished from coverage; ask about local availability; contact to discuss payment | Surfaces two practical barriers early. |
| 6 | How care works | Three simple steps, with assessment and plan grounded in the source | Reduces uncertainty about contacting the agency. |
| 7 | Why Orange | Brief approach, physician communication, language support, family involvement | Combines the draft’s overlapping welcome/approach content. |
| 8 | Real people / evidence | Team and/or one or two verified reviews; omit if unavailable | Adds accountable proof without fabricated social validation. |
| 9 | FAQs / helpful resources | Five or six practical questions; limited useful downloads if supplied | Resolves remaining questions without a large blog detour. |
| 10 | Contact | Phone, minimal request, clear next-step expectations | Supports both conversation and written contact. |
| 11 | Footer | Full navigation, office address, email, fax, approved policy links | Completes business identity and findability. |

Optional material changes length, not the core hierarchy. Do not force 13 visually similar sections onto the page. When verified payment information becomes available, expand the compact payment panel or dedicated guidance page; keep geographic/payment guidance above reviews.

### Proposed hero copy

Category: **Home health care in Los Angeles**

Headline: **Thoughtful care. The comfort of home.**

Supporting copy: **Explore care at home for you or someone you love, and talk with our team about your needs.**

Primary: **Talk to our team** · Secondary: **Explore services** · Visible phone: **818-532-5353**

This is proposed marketing copy. It retains the draft’s established tone without promising medical outcomes, timing, insurance coverage, or admission. The design-guide homepage uses a labeled photography slot instead of presenting generated people as Orange’s team.

## 12. Trust system

Trust has four layers: business identity (phone/address), care process (how it works), accountable people (approved staff), and independent evidence (credential/review source). Place the first two early. Add the latter two when evidence exists. A row of generic shield icons is not evidence.

Each claim record needs: exact approved text; evidence URL/document; evidence owner; checked date; expiry/review date; approval state; approved artwork if relevant. Omit expired/unapproved records. Reviews need original wording, publication permission where required, source, date, approved attribution, and a link. A logo alone does not justify a claim. Avoid star symbols unless an actual rating and its scale/source are specified. Experience must distinguish company age, individual career experience, and tenure at Orange.

## 13. Photography and icons

Photography: eye-level interaction in believable home environments, natural daylight, realistic care activity, respectful personal space, and age/cultural diversity that reflects the people served. Show listening, explaining, and supporting independence. Avoid medical procedures staged incorrectly, helplessness stereotypes, exaggerated smiles, visible records, and generic hospital corridors. Real staff and consenting participants are preferred. If licensed illustrative stock is necessary, label it appropriately and never assign it a real staff identity. Record permission/license and approved crop points in the media library.

Ratios: hero 4:3 desktop / 3:2 mobile, service 3:2, team 4:5. Preserve faces/hands and room context; don’t crop assistive devices misleadingly. Use meaningful alt text for informative photos; empty alt for pure decoration. Patient permission is not implied by possession of a photograph.

Icons: one outline family throughout, 24px viewBox, 1.75–2px rounded strokes. Sizes 16px in text, 20px in compact links, 24px in buttons, 32px in service headings. Use blue-ink/navy; orange only for action or rare emphasis. Optional 48px blue-soft background tile with 8px radius. Pair clinical concepts with a text label. Decorative SVGs are hidden from accessibility APIs. Do not use generic checkmarks to imply certification.

Logo: keep approved identity artwork recognizable. A small header needs a compact lockup and legible company name. The earlier embossed reconstruction loses fine detail at navigation size and depends on text fonts; do not treat it as final approved brand artwork. It may remain a concept asset until the business selects an identity master.

## 14. Motion and media

120ms for button color/border feedback; 180ms for menu opacity; up to 200ms for a small optional accordion transition. Use `cubic-bezier(.2,0,0,1)`. No page-intro sequence, typing headline, parallax, scroll hijack, sliding testimonial loop, or card bounce. Content is visible before JavaScript executes. Never use guessed fixed heights for localized accordion text.

Respect reduced motion: no reveals, auto video, animated scrolling, or transform transitions. Static imagery is the default hero. Optional production video: short 6–10s loop, muted, optimized, only after the page is usable; keep text on a solid neighboring surface, provide pause when appropriate, a poster fallback, and no autoplay under reduced motion. Meaningful spoken video requires captions and a transcript. Do not make downloading video a condition of reading the hero.

## 15. Accessibility and responsive behavior

Target WCAG 2.2 AA and verify the finished implementation. Text contrast: ≥4.5:1 normal and ≥3:1 large; relevant control boundaries ≥3:1. All functions work with a keyboard; focus remains visible and unobscured. Use labels, descriptive links, semantic landmarks/headings, text error explanations, useful alt text, and announced statuses. Reflow at 320 CSS pixels; allow 200% text resize without clipping. See [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) and [disclosure interaction guidance](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

Project comfort standards exceed minimums: 48px navigation targets, 52px forms/buttons, 18px body text, 8px or more between separate targets, and visible telephone help. WCAG 2.2 AA’s target-size minimum is generally 24×24 with exceptions; do not present the project’s 48px choice as that normative minimum. Test with keyboard and VoiceOver/NVDA, including disclosure menus and form errors; an automated score is insufficient.

At 1440 and 1200: split hero, three service columns, full navigation. At 1024: compact menu, split hero, two columns. At 768: compact menu, text-first hero with image below, two service columns. At 390 and 375: one column, full-width primary CTA, telephone nearby, vertical process. Resource and team grids collapse 3→2→1. Trust items wrap naturally. Hide no essential content solely for mobile. Avoid sticky bottom bars by default; if later testing justifies one, reserve space and disable it while forms/keyboard are active. Images have defined aspect ratios and focal points; no fixed full-screen hero height.

## 16. WordPress implementation

Use a small block theme or adapt the existing theme with the same tokens. `theme.json` provides palette, typography presets, spacing, and content widths; the accompanying CSS supplies states and responsive behavior. It is a mergeable foundation, not a complete theme. [WordPress global settings](https://developer.wordpress.org/themes/global-settings-and-styles/) and [patterns](https://developer.wordpress.org/themes/patterns/) support this approach.

For only six services, use ordinary Pages with one reusable service template; no custom post type is required. Use standard Posts for resources if editorial publishing is planned. Create reusable block patterns for hero, trust strip, services, process, service area/payment, team, reviews, FAQ, and contact. Lock structural layout where appropriate while leaving approved text and media editable. Maintain one shared header/footer and central contact settings. Add ACF only if the actual editing workflow needs structured fields unavailable in the chosen setup.

| Content group | Minimum fields | Public rendering rule |
| --- | --- | --- |
| Business | Name, logo, telephone, fax, email, office address, confirmed hours | Render approved values; omit unknown hours |
| Service | Native title/content/excerpt, image, approved scope, related FAQ | Publish only approved scope; retain existing URL |
| Coverage | Approved city/ZIP list, checked date, owner, contact fallback | No positive lookup without maintained coverage data |
| Evidence | Claim, evidence, approved status, check/expiry dates, mark | Unapproved/expired evidence never renders |
| Team | Name, role, portrait, permission, approved biography | Omit incomplete identities |
| Review | Quote, attribution, source URL/date, permission/approval | No placeholder review in production |
| Resource | Title, summary, content/file, author/reviewer, updated date | No empty carousel or unreviewed medical advice |

Deliver HTML server-side and enhance progressively. Load responsive images with dimensions; preload only essential hero media, lazy-load lower images, self-host fonts, and avoid slider libraries. Preserve established page URLs; map redirects for any changes and test contact links. Performance budgets for implementation: initial homepage transfer ≤1MB excluding user-played video, hero image target ≤200KB, minimal JavaScript. These are project budgets, not measured performance of the existing sites.

Contact form processing, security/privacy review, delivery handling, and data retention must be implemented and tested in the production environment. This static package does not submit data. Policy documents must be supplied or approved by the business, not manufactured by the design system.

## 17. Acceptance and measurement

Before release: approve missing claims and imagery; confirm all six service descriptions and contact destinations; review the six requested widths plus 320px reflow; test keyboard navigation and screen-reader form errors; verify color pairs in their actual contexts; check a slow/mobile connection and reduced motion; confirm server success/failure states and privacy handling. Placeholder strings must not reach production.

Measure patient tasks before visual preference: time to find a service, ability to explain the next step, ability to find the phone, and successful contact completion. Track anonymous CTA/form-completion counts only after analytics/privacy requirements are established. Do not record symptoms or messages. Establish baseline numbers before setting targets; the redesign does not claim a projected conversion lift.
