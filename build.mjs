// Build the static reading editions and WordPress starting tokens from the handoff sources.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function inline(s){return escape(s).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,text,url)=>`<a href="${url==='REFERENCE-AUDIT.md'?'research.html':url}">${text}</a>`);}
// The source documents intentionally use only headings, paragraphs, tables, and simple lists.
function renderMarkdown(text){
 const lines=text.split('\n'),out=[];let i=0;
 while(i<lines.length){const line=lines[i];if(!line.trim()){i++;continue;}
  if(/^#{1,6} /.test(line)){const [,hash,label]=line.match(/^(#+) (.*)$/);out.push(`<h${hash.length}>${inline(label)}</h${hash.length}>`);i++;continue;}
  if(line.startsWith('|')){const rows=[];while(i<lines.length&&lines[i].startsWith('|'))rows.push(lines[i++]);const cells=r=>r.slice(1,-1).split('|').map(s=>s.trim());out.push('<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable specification table"><table><thead><tr>'+cells(rows[0]).map(v=>`<th scope="col">${inline(v)}</th>`).join('')+'</tr></thead><tbody>'+rows.slice(2).map(r=>'<tr>'+cells(r).map(v=>`<td>${inline(v)}</td>`).join('')+'</tr>').join('')+'</tbody></table></div>');continue;}
  if(line.startsWith('- ')){const rows=[];while(i<lines.length&&lines[i].startsWith('- '))rows.push(lines[i++].slice(2));out.push('<ul>'+rows.map(v=>`<li>${inline(v)}</li>`).join('')+'</ul>');continue;}
  const paragraph=[];while(i<lines.length&&lines[i].trim()&&!/^(#|\||- )/.test(lines[i]))paragraph.push(lines[i++]);out.push('<p>'+inline(paragraph.join(' '))+'</p>');
 }return out.join('\n');
}
for(const [source,target,title]of [['REFERENCE-AUDIT.md','research.html','Reference UX audit'],['DESIGN-SYSTEM.md','specification.html','Complete design specification']]){
 const body=renderMarkdown(fs.readFileSync(path.join(root,source),'utf8'));
 fs.writeFileSync(path.join(root,target),`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Orange — ${title}</title><link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="components.css"><link rel="stylesheet" href="guide.css"></head><body><a class="oh-skip" href="#main">Skip to content</a><header class="guide-header"><a class="oh-brand" href="design-system.html">Orange<small>DESIGN HANDOFF</small></a><a href="design-system.html">Return to visual guide</a></header><nav class="guide-nav" aria-label="Handoff documents"><a href="research.html">Research</a><a href="specification.html">Specification</a><a href="homepage.html">Homepage concept</a><a href="${source}">Markdown source</a></nav><main class="doc" id="main">${body}</main></body></html>`);
}
fs.mkdirSync(path.join(root,'assets'),{recursive:true});
for(const file of ['manrope-latin.woff2','OFL.txt'])fs.copyFileSync(path.join(root,'../fonts',file),path.join(root,'assets',file));
const css=fs.readFileSync(path.join(root,'tokens.css'),'utf8');
const palette=[...css.matchAll(/--oh-([a-z-]+): (#[0-9A-F]{6});/g)].map(([,slug,color])=>({slug,name:slug.split('-').map(v=>v[0].toUpperCase()+v.slice(1)).join(' '),color}));
const sizes=[['display',64],['h1',56],['h2',40],['h3',28],['h4',22],['body-large',20],['body',18],['small',16],['caption',14],['button',17]];
const theme={version:3,settings:{appearanceTools:true,color:{custom:false,defaultPalette:false,palette},layout:{contentSize:'720px',wideSize:'1200px'},spacing:{units:['px','rem','%','vw'],spacingSizes:[4,8,12,16,24,32,48,64,80,120].map(n=>({slug:String(n),name:`${n}px`,size:`${n/16}rem`}))},typography:{customFontSize:false,fontFamilies:[{slug:'manrope',name:'Manrope',fontFamily:'Manrope, Arial, sans-serif',fontFace:[{fontFamily:'Manrope',fontStyle:'normal',fontWeight:'400 700',src:['file:./assets/manrope-latin.woff2']}]},{slug:'editorial',name:'Georgia editorial accent',fontFamily:'Georgia, serif'}],fontSizes:sizes.map(([slug,n])=>({slug,name:slug,size:`${n/16}rem`}))}},styles:{color:{background:'var:preset|color|white',text:'var:preset|color|text'},typography:{fontFamily:'var:preset|font-family|manrope',fontSize:'var:preset|font-size|body',lineHeight:'1.6112'},elements:{heading:{color:{text:'var:preset|color|navy'},typography:{fontWeight:'600',lineHeight:'1.2'}},link:{color:{text:'var:preset|color|blue-ink'}},button:{color:{background:'var:preset|color|orange',text:'var:preset|color|white'},border:{radius:'8px'},typography:{fontWeight:'700',fontSize:'var:preset|font-size|button'}}}}};
fs.writeFileSync(path.join(root,'theme.json'),JSON.stringify(theme,null,2)+'\n');
console.log('Built research.html, specification.html, theme.json, and local font assets.');
