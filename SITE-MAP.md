# Orange Home Health / complete website design

Eight primary pages, matching the business navigation of the original website. Reviewed 21 September 2026. No live website was modified.

| Original page / content source | New local page | Design treatment |
| --- | --- | --- |
| https://orangehomehealthinc.com/ | `index.html` | Cinematic hero, services, person-centered care, steps, languages, FAQs and contact |
| https://orangehomehealthinc.com/about/ | `about/index.html` | Photo hero, purpose, values, multilingual support |
| https://orangehomehealthinc.com/services/ | `services/index.html` | Full six-service catalog, individual planning, area/payment questions |
| https://orangehomehealthinc.com/skilled-nursing/ | `skilled-nursing/index.html` | Service hero, sibling navigation, nursing scope, questions, related service |
| https://orangehomehealthinc.com/home-health-aide/ | `home-health-aide/index.html` | Service hero, everyday support, planning questions, related service |
| https://orangehomehealthinc.com/resources/ | `resources/index.html` | Five original external resources, practical conversation prompts |
| https://orangehomehealthinc.com/careers/ | `careers/index.html` | Careers hero and application layout with local-only validation |
| https://orangehomehealthinc.com/contact/ | `contact/index.html` | Phone, fax, email, office/directions and enquiry form layout |

`homepage.html` is retained as a matching home alias so earlier preview links continue to work. The foundation guide moved from `index.html` to `design-system.html`; the site now opens on the real homepage at its root. Other handoff documents remain separate from patient-facing pages.

## Content decisions

- Preserve all eight primary business destinations. The old WordPress sidebar’s 2017 Latin demo posts, archives, login and feed links are theme boilerplate, not business-page content; they are not reproduced.
- Physical therapy, occupational therapy, speech therapy and medical social work are sections in the service catalog, as on the original. The source only provided dedicated service-detail pages for nursing and home health aide. Do not invent specific clinical programs or new claims to fill unsupported detail pages.
- The nursing list groups the original clinical categories into readable rows. It is service information, not medical instructions. Suitability and availability must be discussed with the team.
- The older aide page advertises 24/7 availability. That operational promise was not independently confirmed, so the new copy asks visitors to confirm scheduling instead.
- About retains individualized care, diverse language support, equipment coordination and the family-centered purpose. Unverified superlatives, guarantees, staff identities and credentials are not added.
- Careers preserves first/last name, email, phone, optional alternative/cell number, position and message. Name, email, primary phone and position are required. No specific vacancy, salary or employment benefit was invented.
- Contact preserves name, email, address/city, phone and message. Name, email and phone are required in the preview, marked with an asterisk and one explanatory legend. Optional address/message labels have no suffix. Privacy-sensitive documents and medical details are explicitly discouraged.
- Forms validate only in the browser. Buttons are disabled without JavaScript, preventing accidental fallback submissions. There is no backend, email delivery, file upload, analytics or storage. A successful preview says **nothing was sent**. Use example details when testing.

## Resources

The original resource list is retained: American Nurses Association, Caregiving.com, WebMD, Mayo Clinic and Home Care Association of America. Mayo’s old `.com` destination redirects to its current `.org` site. The linked organizations do not imply a partnership or endorsement. WebMD could not be retrieved by the browsing tool; its link is retained from the original list, not represented as newly verified medical content.

## Editing / rebuilding

- Edit `homepage.html` for the home layout. `build-site.mjs` synchronizes its shared header/footer, local navigation and `index.html` alias.
- Edit `build-site.mjs` for interior page content and shared navigation/footer. Run `node build-site.mjs` to rebuild its seven static pages. This overwrites generated interior HTML, so keep later content changes in the generator.
- Shared styles: `tokens.css`, `components.css`, `homepage.css`, `site.css`. Shared interactions: `site.js`. Home-only motion: `homepage.js`.
- Run `node verify.mjs` to check all nine HTML entries (eight pages plus home alias), internal assets/links/anchors, headings, field labels and token consistency.
- All generated HTML can be opened directly. For matching original clean URLs, serve this folder with any static server; `/skilled-nursing/` resolves to its `index.html`.

## Figma extension

In addition to the homepage components, recreate `Navigation / Service dropdown`, `Navigation / Breadcrumbs`, `Hero / Service split`, `Hero / Editorial`, `Service / Sibling navigation`, `Service / Clinical list`, `Resource / External link row`, `Form / Two-column fields`, and `Contact / Office card`. The same color and typography variables apply. Mobile stacks the split layouts and reduces the service sidebar to an in-flow navigation block.

This is a full multi-page **design prototype**, not a deployed CMS or finished intake system. Final legal/privacy copy, forms delivery, credentials, operational availability, image rights and introductory video still require approval and production implementation.
