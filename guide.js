const palette = [
  ['Action orange','orange','#B94716','Primary CTA'],['Light blue','blue','#83CBE6','Brand surface'],['Navy','navy','#18354A','Headings & structure'],['Warm white','warm','#FBF7F2','Human warmth'],['White','white','#FFFFFF','Breathing room'],
  ['Calm blue','blue-soft','#EAF6FB','Information surface'],['Body text','text','#263E4D','Long-form reading'],['Secondary text','muted','#536673','Helpful supporting copy'],['Link blue','blue-ink','#17648B','Readable interaction'],['Control border','control','#738694','Clear field boundaries']
];
const swatches = document.getElementById('swatches');
// Shareable review URLs keep the chosen page/width on a full reload.
const previewQuery = new URLSearchParams(location.search);
const previewSelect = document.getElementById('preview-page');
if (previewSelect && [...previewSelect.options].some(option => option.value === previewQuery.get('page'))) {
  previewSelect.value = previewQuery.get('page');
  document.getElementById('home-preview').src = previewSelect.value;
}
const previewWidthButton = document.querySelector(`[data-width="${Number(previewQuery.get('width'))}"]`);
if (previewWidthButton) {
  document.getElementById('home-preview').style.width = `${previewWidthButton.dataset.width}px`;
  document.querySelectorAll('[data-width]').forEach(button => button.setAttribute('aria-pressed', String(button === previewWidthButton)));
}
document.getElementById('preview-page')?.addEventListener('change', event => {
  document.getElementById('home-preview').src = event.target.value;
});
palette.forEach(([name,token,hex,role]) => {
  const card = document.createElement('div'); card.className='swatch';
  const color = document.createElement('div'); color.className='swatch-color'; color.style.background=`var(--oh-${token})`;
  const info = document.createElement('div'); info.className='swatch-info';
  const title=document.createElement('strong');title.textContent=name;
  info.append(title,document.createTextNode(`${hex} · ${role}`));card.append(color,info);swatches.append(card);
});
document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('button-feedback').textContent=`${button.getAttribute('aria-label') || button.textContent.trim()} — component activated. In the site, this action has a real destination.`;
}));
document.querySelectorAll('[data-width]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('home-preview').style.width=`${button.dataset.width}px`;
  document.querySelectorAll('[data-width]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
}));
const form=document.getElementById('demo-form');
let submitted=false;
const getMethod=()=>form.querySelector('input[name=method]:checked').value;
function issues(){
  const failures=[];
  const tests=[['name',document.getElementById('demo-name').value.trim().length>0],['phone',getMethod()!=='phone'||document.getElementById('demo-phone').value.replace(/\D/g,'').length>=7],['email',getMethod()!=='email'||(document.getElementById('demo-email').value.length>0&&document.getElementById('demo-email').validity.valid)]];
  tests.forEach(([key,valid])=>{
    const field=document.getElementById(`demo-${key}`),message=document.getElementById(`${key}-error`);
    field.setAttribute('aria-invalid',String(!valid));message.hidden=valid;
    if(!valid) failures.push([field.id,message.textContent]);
  });return failures;
}
function showSummary(failures){
  const summary=document.getElementById('form-errors'); summary.replaceChildren();summary.hidden=!failures.length;
  if(failures.length){const title=document.createElement('strong');title.textContent='Please check the following:';summary.append(title);const list=document.createElement('ul');failures.forEach(([id,message])=>{const li=document.createElement('li'),a=document.createElement('a');a.href=`#${id}`;a.textContent=message;a.addEventListener('click',event=>{event.preventDefault();document.getElementById(id).focus();});li.append(a);list.append(li);});summary.append(list);}
}
form.querySelectorAll('input[name=method]').forEach(radio=>radio.addEventListener('change',()=>{
  ['phone','email'].forEach(method=>{const active=getMethod()===method;document.getElementById(`${method}-field`).hidden=!active;document.getElementById(`demo-${method}`).disabled=!active;document.getElementById(`demo-${method}`).required=active;});
  document.getElementById('form-result').hidden=true;if(submitted)showSummary(issues());
}));
form.addEventListener('submit',event=>{
  event.preventDefault();submitted=true;const failures=issues();showSummary(failures);const result=document.getElementById('form-result');result.hidden=true;
  if(failures.length){document.getElementById('form-errors').focus();return;}
  result.textContent='Example fields checked successfully. Nothing was sent or stored. A production form would wait for confirmed receipt before showing success.';result.hidden=false;
});
form.addEventListener('input',()=>{document.getElementById('form-result').hidden=true;});
form.querySelectorAll('input').forEach(field=>field.addEventListener('blur',()=>{if(submitted)showSummary(issues());}));
