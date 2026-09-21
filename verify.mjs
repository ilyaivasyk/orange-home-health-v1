import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = dirname(fileURLToPath(import.meta.url));
const pageFiles = ['index.html', 'homepage.html', ...['about', 'services', 'skilled-nursing', 'home-health-aide', 'resources', 'careers', 'contact'].map(slug => `${slug}/index.html`)];
const getIds = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
for (const file of pageFiles) {
  const pagePath = resolve(root, file);
  const html = readFileSync(pagePath, 'utf8');
  const ids = getIds(html);
  assert.equal(ids.length, new Set(ids).size, `${file}: duplicate IDs`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${file}: exactly one h1`);
  const footer = html.match(/<footer class="site-footer">[\s\S]*?<\/footer>/)?.[0];
  assert.ok(footer, `${file}: missing shared footer`);
  assert.equal((footer.match(/<nav\b/g) || []).length, 1, `${file}: footer must have one navigation column`);
  assert.equal((footer.match(/<nav\b[\s\S]*?<\/nav>/)[0].match(/<a\b/g) || []).length, 10, `${file}: retain all ten footer destinations`);
  for (const [, ref] of html.matchAll(/(?:src|href|poster)="([^"]+)"/g)) {
    if (/^(https?:|tel:|mailto:)/.test(ref)) continue;
    const [urlPath, fragment] = ref.split('#');
    const path = urlPath.split('?')[0];
    const target = path ? resolve(dirname(pagePath), path) : pagePath;
    assert.ok(existsSync(target), `${file}: missing local target ${ref}`);
    if (fragment) assert.ok(getIds(readFileSync(target, 'utf8')).includes(fragment), `${file}: missing anchor ${ref}`);
  }
  for (const [image] of html.matchAll(/<img\b[^>]*>/g)) assert.match(image, /\balt="[^"]*"/, `${file}: image needs alt text`);
  assert.match(html, /name="robots" content="noindex"/, `${file}: noindex required`);
  assert.match(html, /src="(?:\.\.\/)?site.js(?:\?v=1)?"/, `${file}: shared interaction script missing`);
  assert.match(html, /(?:site\.css|homepage\.css)\?v=1/, `${file}: versioned local styles are required`);
  assert.match(html, /site\.js\?v=1/, `${file}: versioned shared script is required`);
  assert.match(html, /FAX 818-584-8822/, `${file}: utility fax number missing`);
  assert.match(html, /13735 Victory Blvd, Suite 18, Van Nuys, CA 91401/, `${file}: utility address missing`);
  assert.ok(!html.includes('href="https://orangehomehealthinc.com/'), `${file}: internal links must stay in the new design`);
  for (const [, id] of html.matchAll(/<(?:input|textarea)\b[^>]*\bid="([^"]+)"/g)) assert.ok(html.includes(`for="${id}"`), `${file}: missing field label ${id}`);
  if (['contact/index.html', 'careers/index.html'].includes(file)) {
    for (const type of ['email', 'tel']) assert.match(html, new RegExp(`<input[^>]*type="${type}"[^>]* required`), `${file}: email and primary phone must be required`);
    assert.match(html, /Fields marked[\s\S]*?are required\. All others are optional\./, `${file}: required-field legend missing`);
    assert.ok(!/<label[^>]*>[^<]*\((?:optional|required)\)/.test(html), `${file}: use compact required markers`);
  }
}
const html = readFileSync(resolve(root, 'homepage.html'), 'utf8');
assert.equal(html, readFileSync(resolve(root, 'index.html'), 'utf8'), 'Home alias must match the website entry point');
assert.match(html, /<dialog\b[^>]*aria-labelledby="intro-title"/, 'Introduction must have a named native dialog');
assert.equal((html.match(/class="hero-image\b/g) || []).length, 3, 'Hero preview needs three frames');
assert.ok(!html.includes('play-circle'), 'Remove the circular play control');
assert.match(html, /Final video will appear here/, 'Hero must identify the future video');
assert.match(html, /HOME HEALTH CARE IN SOUTHERN CALIFORNIA/, 'Homepage service area label must name Southern California');
const siteJs = readFileSync(resolve(root, 'site.js'), 'utf8');
const siteCss = readFileSync(resolve(root, 'site.css'), 'utf8');
const homepageCss = readFileSync(resolve(root, 'homepage.css'), 'utf8');
assert.match(siteJs, /IntersectionObserver/, 'Shared scroll reveal behavior is missing');
assert.match(siteCss, /\.reveal-on-scroll/, 'Shared scroll reveal styles are missing');
assert.match(siteCss, /@starting-style/, 'Navigation opening transition is missing');
assert.match(homepageCss, /\.oh-faq::details-content/, 'FAQ opening transition is missing');
const tokens = JSON.parse(readFileSync(resolve(root, 'figma-tokens.json'), 'utf8'));
const css = readFileSync(resolve(root, 'tokens.css'), 'utf8');
for (const key of ['Brand/Orange', 'Brand/Blue', 'Ink/Navy', 'Ink/Body', 'Ink/Muted', 'State/Focus']) assert.ok(css.includes(tokens.color[key]), `${key} differs from the foundation`);
assert.equal(tokens.motion.IntroSceneSeconds * 3, tokens.motion.IntroTotalSeconds);
for (const file of ['START-HERE.txt', 'DEVELOPER-HANDOFF.md', 'FIGMA-HANDOFF.md', 'figma-foundations.svg', 'assets/logo-client-reference.png', 'assets/logo-transparent.png', 'assets/logo-full.svg', 'assets/logo-reconstruction.svg', 'assets/OFL.txt']) assert.ok(existsSync(resolve(root, file)), `Missing handoff file: ${file}`);
for (const file of pageFiles) assert.match(readFileSync(resolve(root, file), 'utf8'), /assets\/logo-transparent\.png/, `${file}: transparent PNG logo missing`);
console.log('PASS: offline-ready 8-page website + home alias; local links, assets, forms, animations, tokens and developer handoff files.');
