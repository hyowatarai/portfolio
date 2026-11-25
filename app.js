const projects=[
{name:'on 絹～silk～',url:'onsilk1113.com',cat:'care',type:'BEAUTY / SALON',image:'silk',desc:'白とベージュの柔らかな色調に、施術写真と余白を組み合わせたWebサイト。',word:'めぐる、整う、満たされる。'},
{name:'長谷川製陶',url:'hasegawaseito1212.com',cat:'life',type:'CRAFT / POTTERY',image:'pottery',desc:'器の個性を主役に、和の質感と縦書きの文字を組み合わせたWebサイト。',word:''},
{name:'ブラッシュアップ',url:'brush-uptosou.com',cat:'business',type:'BUSINESS / PAINTING',image:'paint',desc:'塗料を連想するカラフルな形とイラストで、塗装事業を表現したWebサイト。',word:'仕上げたその先も守る。'},
{name:'株式会社H＆Hサービス',url:'h-hservice1125.com',cat:'business',type:'BUSINESS / AUTOMOTIVE',image:'car',desc:'濃色の背景と車の大きなビジュアルを組み合わせた中古車販売・買取のWebサイト。',word:''},
{name:'株式会社Team of Teams',url:'teamofteams-hp.com',cat:'business',type:'RECRUITMENT / DELIVERY',image:'team',desc:'明るい青とドライバーの人物写真を使用した、軽配送会社のWebサイト。',word:''},
{name:'整体院アルビネス',url:'alviness335.com',cat:'care',type:'HEALTH / BODY CARE'},
{name:'大阪進学塾',url:'osaka-shingakujuku.com',cat:'education',type:'EDUCATION / SCHOOL'},
{name:'株式会社宗舜工業',url:'soshunkogyo.com',cat:'business',type:'BUSINESS / CONSTRUCTION'},
{name:'yucca',url:'yucca-coach.com',cat:'education',type:'EDUCATION / COACHING',image:'yucca',desc:'淡いピンクと親子の写真、手描き風のあしらいを組み合わせたコーチングサービスのWebサイト。'},
{name:'SALON ユルリアン',url:'yururiann.com',cat:'care',type:'BEAUTY / RELAXATION',image:'yururian',desc:'ベージュの色調と曲線、施術と店内の写真を組み合わせたリラクゼーションサロンのWebサイト。'},
{name:'防災デジタルクリエイター',url:'digital-makibon7.com',cat:'care',type:'LIFESTYLE / COUNSELING',image:'digital',desc:'淡いグリーンとオレンジ、やわらかな文字や糸のモチーフを組み合わせたカウンセリングサービスのWebサイト。'}];
function devicePreview(p){return `<div class="device-preview"><div class="desktop-device"><div class="browser-chrome"><span>● ● ●</span><span>${p.url}</span></div><img src="${p.image}-desktop.jpg" alt="${p.name}のPC版トップページ" loading="lazy" width="1280" height="720"></div><div class="mobile-device"><div class="phone-speaker"></div><img src="${p.image}-mobile.jpg" alt="${p.name}のスマホ版トップページ" loading="lazy" width="390" height="844"></div><span class="device-caption">DESKTOP + MOBILE</span></div>`;}
const selectedUrls=['yucca-coach.com','hasegawaseito1212.com','h-hservice1125.com','onsilk1113.com','teamofteams-hp.com','digital-makibon7.com'];
const selectedProjects=selectedUrls.map(url=>projects.find(p=>p.url===url));
const grid=document.querySelector('#project-grid');selectedProjects.forEach((p,i)=>{const article=document.createElement('article');article.className='project';article.innerHTML=`<button aria-label="${p.name}の制作詳細を見る">${devicePreview(p)}<div class="project-meta"><span>0${i+1} / ${p.type}</span><span>WEB DESIGN</span></div><h3>${p.name}</h3><p class="work-role">デザイン：主にTOPページ<br>コーディング：主にTOPページ<br>下層ページ：主にCMSで構築</p><p class="work-desc">${p.desc}</p><span class="detail-link">担当範囲と作品詳細を見る ↗</span></button>`;article.querySelector('button').addEventListener('click',()=>openProject(p,i));grid.append(article)});
const list=document.querySelector('#all-projects');function render(filter='all'){list.innerHTML='';projects.forEach((p,i)=>{if(filter!=='all'&&p.cat!==filter)return;const a=document.createElement('a');a.className='project-row';a.href=`https://${p.url}/`;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',`${p.name}の公開サイトを新しいタブで開く`);a.innerHTML=`<span class="row-no">${String(i+1).padStart(2,'0')}</span><span class="row-name">${p.name}</span><span class="row-type">${p.type}</span><span class="row-arrow">↗</span>`;list.append(a)});document.querySelector('#filter-status').textContent=`${list.children.length}件の作品を表示中`;}render();document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render(b.dataset.filter)}));
const dialog=document.querySelector('dialog');function openProject(p,i){document.querySelector('#dialog-content').innerHTML=`<p>WORK / 0${i+1} — ${p.type}</p><h2>${p.name}</h2>${devicePreview(p)}<dl class="project-facts"><div><dt>制作担当</dt><dd>HYO</dd></div><div><dt>デザイン</dt><dd>主にTOPページ</dd></div><div><dt>コーディング</dt><dd>主にTOPページ</dd></div><div><dt>下層ページ</dt><dd>主にCMSで構築</dd></div><div><dt>業種</dt><dd>${p.type}</dd></div></dl><h3>デザインの特徴</h3><p>${p.desc}</p><p style="font-size:11px;color:#666">PC版・スマホ版の公開サイト画面です。ページ全体は公開サイトでご覧いただけます。</p><a href="https://${p.url}/" target="_blank" rel="noopener noreferrer">公開サイトを見る ↗</a>`;dialog.showModal();document.body.style.overflow='hidden';}function closeProject(){dialog.close();document.body.style.overflow='';}document.querySelector('.close').addEventListener('click',closeProject);dialog.addEventListener('close',()=>document.body.style.overflow='');dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject();}});

// Animate only enhancements; the content remains available without JavaScript.
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:.08});
 document.querySelectorAll('.project,.about-grid,.profile-details,.archive .heading-row,.archive h2').forEach(el=>{if(el.getBoundingClientRect().top>window.innerHeight){el.classList.add('reveal-ready');revealObserver.observe(el);}});
}

// Opening typography uses a visual overlay; the original text keeps its layout.
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.querySelectorAll('.hero .title-word').forEach((word,lineIndex)=>{
  word.style.animation='none';
  const text=word.textContent;const node=word.firstChild;const rect=word.getBoundingClientRect();
  const positions=[...text].map((letter,index)=>{const range=document.createRange();range.setStart(node,index);range.setEnd(node,index+1);return {letter,left:(range.getBoundingClientRect().left-rect.left)/rect.width*100};});
  word.setAttribute('aria-label',text);word.classList.add('fv-letter-motion');
  const original=document.createElement('span');original.className='fv-original';original.textContent=text;original.setAttribute('aria-hidden','true');word.replaceChildren(original);
  positions.forEach(({letter,left},index)=>{const char=document.createElement('span');char.className='fv-char';char.textContent=letter;char.setAttribute('aria-hidden','true');char.style.left=left+'%';char.style.setProperty('--char-delay',(lineIndex*.2+index*.037)+'s');word.append(char);});
 });
}
