/* ================================================
   APEX COATING (EA) LTD — script.js
   All shades extracted from the Premier Coat
   colour card images
   ================================================ */

// ── ALL APEX COATING SHADES ───────────────────
// Organised into colour families for tab browsing
// Hex values matched visually from the colour card

const FAMILIES = {

  greys: {
    label: 'Greys & Whites',
    base: '#9a9a9a',
    textDark: '#2a2a2a',
    shades: [
      { name: 'Pebble',       code: '00 A 01', hex: '#d4d2cc' },
      { name: 'Soft White',   code: '10 B 15', hex: '#f2f0e8' },
      { name: 'Gull',         code: '10 A 03', hex: '#c8c6be' },
      { name: 'Corvette',     code: '00 A 05', hex: '#b8b6ae' },
      { name: 'Steel',        code: '10 A 07', hex: '#a2a4a8' },
      { name: 'Pigeon',       code: '18 B 21', hex: '#8a8e94' },
      { name: 'Granite',      code: '00 A 09', hex: '#7a7a7a' },
      { name: 'Slate Grey',   code: '18 B 25', hex: '#5e6268' },
      { name: 'Seal Grey',    code: '10 A 11', hex: '#4e5056' },
      { name: 'Mouse Grey',   code: '08 B 21', hex: '#9a9892' },
      { name: 'Velvet Grey',  code: '00 A 13', hex: '#3a3c40' },
      { name: 'Gun Metal',    code: '18 B 29', hex: '#2e3036' },
      { name: 'Ash',          code: '22 B 15', hex: '#c0c2c6' },
      { name: 'Ice',          code: '18 B 17', hex: '#dce8f0' },
      { name: 'Full Moon',    code: '',         hex: '#eeeae0' },
      { name: 'Candyfloss',   code: '04 B 15', hex: '#e8ddd8' },
    ]
  },

  whites_creams: {
    label: 'Creams & Neutrals',
    base: '#e8dfc8',
    textDark: '#3a2e18',
    shades: [
      { name: 'Magnolia',       code: '08 B 15', hex: '#f5edd8' },
      { name: 'Buttermilk',     code: '08 C 31', hex: '#f2e8c0' },
      { name: 'Vellum',         code: '08 B 17', hex: '#ede4c8' },
      { name: 'Ivory',          code: '10 C 31', hex: '#f0e8cc' },
      { name: 'Vanilla',        code: '',         hex: '#f5ecd0' },
      { name: 'Rosemary',       code: '04 B 17', hex: '#d8d0be' },
      { name: 'Oyster',         code: '22 B 17', hex: '#d4cec0' },
      { name: 'Peanut Butter',  code: '06 C 33', hex: '#d4b888' },
      { name: 'Golden Cream',   code: '',         hex: '#e8d4a0' },
      { name: 'Porcelain Bowl', code: '',         hex: '#ece8d8' },
      { name: 'Utopia',         code: '',         hex: '#e8e0cc' },
      { name: 'Summer Hue',     code: '',         hex: '#ede8d0' },
      { name: 'Antique Cream',  code: '',         hex: '#f0e8c8' },
      { name: 'Cream Brulee',   code: '',         hex: '#f0ddb8' },
      { name: 'Laughter',       code: '',         hex: '#f2e8c4' },
      { name: 'Ivory Cream',    code: '',         hex: '#f4ecd4' },
      { name: 'Cream Silk',     code: '',         hex: '#f0e8d8' },
      { name: 'Egyptian Sand',  code: '',         hex: '#e0d4a8' },
      { name: 'Waffle',         code: '',         hex: '#e4d8b8' },
      { name: 'Smock',          code: '',         hex: '#e8dcc8' },
    ]
  },

  reds: {
    label: 'Reds & Pinks',
    base: '#c03030',
    textDark: '#fff',
    shades: [
      { name: 'Dawn Pink',      code: '04 C 33', hex: '#e8b8a0' },
      { name: 'Colorado',       code: '04 E 51', hex: '#d06858' },
      { name: 'Geranium',       code: '04 E 53', hex: '#cc3a2e' },
      { name: 'Rusty Red',      code: '04 D 44', hex: '#b84040' },
      { name: 'Brick Dust',     code: '04 C 37', hex: '#c47060' },
      { name: 'Powder Pink',    code: '02 C 33', hex: '#f0c8c0' },
      { name: 'Coral Pink',     code: '04 E 49', hex: '#e88878' },
      { name: 'Deco Red',       code: '04 D 45', hex: '#a82828' },
      { name: 'Horse Chestnut', code: '04 C 39', hex: '#8a3830' },
      { name: 'Misty Rose',     code: '',         hex: '#f0c8c8' },
      { name: 'Sentry Red',     code: '',         hex: '#b82828' },
      { name: 'Riva Red',       code: '',         hex: '#cc3030' },
      { name: 'Orchestral Red', code: '',         hex: '#b83030' },
      { name: 'Amber Glow',     code: '',         hex: '#e05030' },
      { name: 'Ginger Snap',    code: '',         hex: '#c87858' },
      { name: 'Warm Peach',     code: '',         hex: '#f0c0a0' },
      { name: 'Terracotta Sand',code: '',         hex: '#d4a888' },
      { name: 'Warm Apricot',   code: '',         hex: '#f0b888' },
    ]
  },

  oranges_yellows: {
    label: 'Oranges & Yellows',
    base: '#e88020',
    textDark: '#3a2000',
    shades: [
      { name: 'Peach Melba',   code: '06 E 50', hex: '#f0a870' },
      { name: 'Tango',         code: '06 E 51', hex: '#e87040' },
      { name: 'Bokhara',       code: '06 D 43', hex: '#d06030' },
      { name: 'Orange Tan',    code: '06 E 56', hex: '#d07040' },
      { name: 'Caramel',       code: '06 C 37', hex: '#c88850' },
      { name: 'Ginger Brown',  code: '06 D 45', hex: '#a86030' },
      { name: 'Tango 06E51',   code: '06 E 51', hex: '#e06030' },
      { name: 'Aztec',         code: '10 D 43', hex: '#b89030' },
      { name: 'Mustard',       code: '10 C 35', hex: '#c8a820' },
      { name: 'Just Yellow',   code: '10 E 50', hex: '#f0d000' },
      { name: 'Yellow Canary', code: '10 E 53', hex: '#f0e000' },
      { name: 'Tivoli Gold',   code: '08 E 51', hex: '#d4a020' },
      { name: 'Cinnamon',      code: '08 C 35', hex: '#c07830' },
      { name: 'African Gold',  code: '10 D 45', hex: '#c09818' },
      { name: 'Golden Sun',    code: '',         hex: '#f0c800' },
      { name: 'Soleil',        code: '',         hex: '#f0d840' },
      { name: 'Gentle Yellow', code: '',         hex: '#f4e880' },
      { name: 'California Rays',code: '',        hex: '#f0d860' },
      { name: 'Souffle',       code: '',         hex: '#f0d858' },
      { name: 'Mustard Spice', code: '',         hex: '#c8a030' },
      { name: 'Morrocan Sun',  code: '',         hex: '#f0b840' },
      { name: 'Sundown',       code: '',         hex: '#e8c880' },
      { name: 'Summer Hip Hooray', code: '',     hex: '#f0e890' },
    ]
  },

  browns: {
    label: 'Browns & Tans',
    base: '#7a4820',
    textDark: '#fff',
    shades: [
      { name: 'Toadstool',      code: '04 B 21', hex: '#a88878' },
      { name: 'Catalan',        code: '06 C 39', hex: '#8a5838' },
      { name: 'Antique Bronze', code: '08 C 39', hex: '#7a5030' },
      { name: 'Peat',           code: '08 B 25', hex: '#5a4030' },
      { name: 'Rawhide',        code: '08 C 37', hex: '#c09060' },
      { name: 'Panatella',      code: '10 C 39', hex: '#5a4028' },
      { name: 'Lava',           code: '10 B 21', hex: '#989080' },
      { name: 'Peridot',        code: '12 B 21', hex: '#909878' },
      { name: 'Camouflage',     code: '10 B 25', hex: '#686850' },
      { name: 'Woodpecker',     code: '12 B 25', hex: '#484030' },
      { name: 'Maple Syrup',    code: '',         hex: '#c89060' },
      { name: 'Sun Stone',      code: '',         hex: '#d4b890' },
      { name: 'Liqueur',        code: '',         hex: '#8a6848' },
    ]
  },

  greens: {
    label: 'Greens',
    base: '#2a8a40',
    textDark: '#fff',
    shades: [
      { name: 'Sage',           code: '12 B 17', hex: '#a8b898' },
      { name: 'Emerald',        code: '14 E 53', hex: '#008848' },
      { name: 'Willow',         code: '12 C 33', hex: '#90a878' },
      { name: 'Lollipop',       code: '12 E 51', hex: '#a8d040' },
      { name: 'Caterpillar',    code: '12 E 53', hex: '#88c820' },
      { name: 'Greengage',      code: '12 D 43', hex: '#68a028' },
      { name: 'Laurel',         code: '12 D 45', hex: '#507840' },
      { name: 'Beetle Green',   code: '14 C 39', hex: '#306038' },
      { name: 'Holly',          code: '12 B 29', hex: '#204828' },
      { name: 'Forest Green',   code: '12 C 39', hex: '#285030' },
      { name: 'Kendal Green',   code: '14 C 40', hex: '#204030' },
      { name: 'Safaricom Green',code: '',         hex: '#107830' },
      { name: 'Kenya Green',    code: '',         hex: '#008030' },
      { name: 'Venetian Green', code: '14 E 51', hex: '#00a048' },
      { name: 'Mistletoe',      code: '10 B 17', hex: '#a0a878' },
      { name: 'Sherbet',        code: '12 B 15', hex: '#c8d8a0' },
      { name: 'Apple Grove',    code: '',         hex: '#a8d890' },
      { name: 'Apple Tree',     code: '',         hex: '#80c068' },
      { name: 'Soft Lime',      code: '',         hex: '#c8e0a0' },
      { name: 'Watermelon',     code: '',         hex: '#68c080' },
      { name: 'Topiary',        code: '',         hex: '#40a870' },
      { name: 'Mellow Sage',    code: '',         hex: '#90b898' },
      { name: 'Apple Mint',     code: '',         hex: '#b8e0c0' },
      { name: 'Fresh Star',     code: '',         hex: '#c8e8c8' },
      { name: 'Rain Bird Green',code: '',         hex: '#90cc78' },
    ]
  },

  blues: {
    label: 'Blues',
    base: '#1a50c0',
    textDark: '#fff',
    shades: [
      { name: 'Summer Blue',    code: '20 C 33', hex: '#90b8d8' },
      { name: 'Zircon',        code: '16 C 33', hex: '#a8c8e0' },
      { name: 'Moonlight',     code: '18 C 31', hex: '#c0d4e8' },
      { name: 'Astra',         code: '20 C 37', hex: '#7898c8' },
      { name: 'Crystal',       code: '18 E 49', hex: '#d0e0f0' },
      { name: 'Cote D\'Azur',  code: '18 D 43', hex: '#3878c0' },
      { name: 'Dewdrop',       code: '14 C 31', hex: '#b8d8e8' },
      { name: 'Bluebird',      code: '20 D 45', hex: '#2060b8' },
      { name: 'Polar Blue',    code: '18 E 50', hex: '#d8eaf8' },
      { name: 'Cosmos',        code: '18 C 39', hex: '#1840a0' },
      { name: 'Tropez Blue',   code: '18 E 51', hex: '#2870c8' },
      { name: 'Midnight Blue', code: '20 C 40', hex: '#101840' },
      { name: 'Cornflower',    code: '18 E 53', hex: '#4878d0' },
      { name: 'True Blue',     code: '20 E 51', hex: '#1858b8' },
      { name: 'Malindi Blue',  code: '',         hex: '#7098c0' },
      { name: 'Channel Blue',  code: '16 D 45', hex: '#0050a0' },
      { name: 'Capri',         code: '16 C 37', hex: '#2888b8' },
      { name: 'Grotto',        code: '16 E 53', hex: '#007890' },
      { name: 'Northern Sky',  code: '18 C 35', hex: '#a8c8e0' },
      { name: 'Ash',           code: '22 B 15', hex: '#c0c2c6' },
      { name: 'Powder Blue',   code: '',         hex: '#a0b8d8' },
      { name: 'Cool Aqua',     code: '',         hex: '#70c0c8' },
      { name: 'Dewberry Frost',code: '',         hex: '#8090c0' },
      { name: 'Powder Blue 2', code: '',         hex: '#a0b0d0' },
    ]
  },

  purples_violets: {
    label: 'Purples & Violets',
    base: '#6030a0',
    textDark: '#fff',
    shades: [
      { name: 'Billberry',      code: '22 C 37', hex: '#5050a8' },
      { name: 'Spanish Violet', code: '22 D 45', hex: '#6030a0' },
      { name: 'Emperor',        code: '24 C 39', hex: '#503888' },
      { name: 'Victoria Plum',  code: '02 C 40', hex: '#603070' },
      { name: 'Clover',         code: '02 C 37', hex: '#985090' },
      { name: 'Mulberry',       code: '02 C 39', hex: '#780050' },
      { name: 'Wild Lacac',     code: '24 C 33', hex: '#c0a8d0' },
      { name: 'Lavender',       code: '',         hex: '#9898cc' },
      { name: 'Lilac',          code: '',         hex: '#c0a8d8' },
      { name: 'Soap Stream',    code: '',         hex: '#b0a8cc' },
      { name: 'Rodeo Drive',    code: '',         hex: '#a898b8' },
      { name: 'Lilac Haze',     code: '',         hex: '#c8b8d4' },
      { name: 'Light Lilac',    code: '',         hex: '#d0c0e0' },
      { name: 'Hip Hip Hooray', code: '',         hex: '#c0b8d8' },
      { name: 'Angel',          code: '',         hex: '#e0c8d8' },
    ]
  },

  blacks: {
    label: 'Dark & Black',
    base: '#1a1a1a',
    textDark: '#fff',
    shades: [
      { name: 'Black',          code: '',         hex: '#1a1a1a' },
      { name: 'Scorched Earth', code: '08 B 29', hex: '#201818' },
      { name: 'Lizard',         code: '10 B 29', hex: '#282820' },
      { name: 'Holly Dark',     code: '12 B 29', hex: '#182418' },
    ]
  },

};

// Flatten all shades — used by gallery, suggestions & mixer
const ALL_SHADES = Object.entries(FAMILIES).flatMap(([key, fam]) =>
  fam.shades.map(s => ({ ...s, family: key }))
);

// Quick lookup shade hex by name
const HEX_BY_NAME = Object.fromEntries(ALL_SHADES.map(s => [s.name, s.hex]));

// ── STATE ─────────────────────────────────────
let mixSelected    = [];
let galleryFilter  = 'all';
let selectedRating = 0;
let fbMode         = 'email';

// ── COLOUR HELPERS ────────────────────────────
function hexToRgb(h) {
  return [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
}
function rgbToHex(r,g,b) {
  return '#' + [r,g,b].map(v => Math.round(Math.min(255,Math.max(0,v))).toString(16).padStart(2,'0')).join('');
}
function blendHexes(hexes) {
  if (!hexes.length) return null;
  const s = hexes.map(hexToRgb).reduce((a,c)=>[a[0]+c[0],a[1]+c[1],a[2]+c[2]],[0,0,0]);
  return rgbToHex(...s.map(v=>Math.round(v/hexes.length)));
}
function colorLabel(hex) {
  const [r,g,b] = hexToRgb(hex);
  const l = r*0.299 + g*0.587 + b*0.114;
  const max = Math.max(r,g,b), d = max - Math.min(r,g,b);
  if (d < 25) return l > 200 ? 'Soft white' : l > 130 ? 'Warm grey' : 'Deep charcoal';
  if (r===max) return g>b ? (b<60?'Deep orange':'Warm terracotta') : 'Vivid red';
  if (g===max) return r>b ? 'Olive green' : 'Fresh green';
  if (b===max) return r>g ? 'Soft violet' : 'Cool blue';
  return 'Mixed hue';
}
function contrastColor(hex) {
  const [r,g,b] = hexToRgb(hex);
  return (r*0.299 + g*0.587 + b*0.114) > 150 ? '#1a1a1a' : '#ffffff';
}

// ── HERO STRIPS ───────────────────────────────
function buildHeroStrips() {
  const wrap = document.getElementById('hero-strips');
  const picks = [
    { hex: '#c03030', label: 'Reds' },
    { hex: '#e88020', label: 'Oranges' },
    { hex: '#c8a820', label: 'Yellows' },
    { hex: '#2a8a40', label: 'Greens' },
    { hex: '#1a50c0', label: 'Blues' },
    { hex: '#6030a0', label: 'Purples' },
    { hex: '#9a9a9a', label: 'Greys' },
    { hex: '#c09060', label: 'Browns' },
  ];
  picks.forEach(p => {
    const el = document.createElement('div');
    el.className = 'strip';
    el.style.background = p.hex;
    el.style.color = contrastColor(p.hex);
    el.textContent = p.label;
    wrap.appendChild(el);
  });
}

// ── FAMILY TABS & PANELS ──────────────────────
function buildFamilyTabs() {
  const tabsEl   = document.getElementById('family-tabs');
  const panelsEl = document.getElementById('family-panels');

  Object.entries(FAMILIES).forEach(([key, fam], i) => {
    // Tab
    const btn = document.createElement('button');
    btn.className   = 'ftab' + (i === 0 ? ' active' : '');
    btn.textContent = fam.label;
    btn.dataset.key = key;
    if (i === 0) applyTabActive(btn, fam);
    btn.onclick = () => switchFamily(key);
    tabsEl.appendChild(btn);

    // Panel
    const panel = document.createElement('div');
    panel.className = 'family-panel' + (i === 0 ? ' active' : '');
    panel.id = 'panel-' + key;
    panel.innerHTML = `
      <div class="panel-header" style="background:${fam.base}">
        <span class="panel-header-name" style="color:${fam.textDark}">${fam.label}</span>
      </div>
      <div class="shades-grid" id="grid-${key}"></div>`;
    panelsEl.appendChild(panel);

    // Cards
    const grid = panel.querySelector('.shades-grid');
    fam.shades.forEach(shade => {
      grid.appendChild(makeShadeCard(shade, key));
    });
  });
}

function applyTabActive(btn, fam) {
  btn.style.background  = fam.base;
  btn.style.borderColor = fam.base;
  btn.style.color       = fam.textDark;
}

function switchFamily(key) {
  const fam = FAMILIES[key];
  // Reset all tabs
  document.querySelectorAll('.ftab').forEach(b => {
    b.classList.remove('active');
    b.style.background = b.style.borderColor = b.style.color = '';
  });
  // Reset all panels
  document.querySelectorAll('.family-panel').forEach(p => p.classList.remove('active'));
  // Activate chosen
  const btn = document.querySelector(`.ftab[data-key="${key}"]`);
  btn.classList.add('active');
  applyTabActive(btn, fam);
  document.getElementById('panel-' + key).classList.add('active');
}

function makeShadeCard(shade, familyKey) {
  const card = document.createElement('div');
  card.className = 'shade-card';
  card.innerHTML = `
    <div class="swatch" style="background:${shade.hex}">
      <div class="drip" style="background:${shade.hex}"></div>
    </div>
    <div class="shade-meta">
      <div class="shade-meta-left">
        <div class="shade-nm">${shade.name}</div>
        <div class="shade-cd">${shade.code || shade.hex}</div>
      </div>
      <button class="add-btn" title="Add to mixer">+</button>
    </div>`;
  card.querySelector('.add-btn').onclick = e => {
    e.stopPropagation();
    addToMixer({ ...shade, family: familyKey });
  };
  return card;
}

// ── GALLERY ───────────────────────────────────
function buildGallery() {
  const filtersEl = document.getElementById('gallery-filters');
  const gridEl    = document.getElementById('gallery-grid');

  // All button
  const allBtn = document.createElement('button');
  allBtn.className   = 'gfilter active';
  allBtn.textContent = 'All';
  allBtn.onclick     = () => filterGallery('all');
  filtersEl.appendChild(allBtn);

  // Per-family buttons
  Object.entries(FAMILIES).forEach(([key, fam]) => {
    const btn = document.createElement('button');
    btn.className   = 'gfilter';
    btn.textContent = fam.label;
    btn.dataset.key = key;
    btn.onclick     = () => filterGallery(key);
    filtersEl.appendChild(btn);
  });

  renderGallery();
}

function filterGallery(key) {
  galleryFilter = key;
  document.querySelectorAll('.gfilter').forEach(b => {
    b.classList.toggle('active',
      b.dataset.key === key || (key === 'all' && b.textContent === 'All')
    );
  });
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  const shades = galleryFilter === 'all'
    ? ALL_SHADES
    : ALL_SHADES.filter(s => s.family === galleryFilter);
  shades.forEach(s => {
    const c = document.createElement('div');
    c.className = 'g-card';
    c.innerHTML = `
      <div class="g-swatch" style="background:${s.hex}"></div>
      <div class="g-info">
        <div class="g-name">${s.name}</div>
        <div class="g-code">${s.code || s.hex}</div>
      </div>`;
    c.onclick = () => addToMixer(s);
    grid.appendChild(c);
  });
}

// ── MIXER ─────────────────────────────────────
function addToMixer(shade) {
  if (mixSelected.length >= 6) return; // max 6
  if (mixSelected.find(s => s.hex === shade.hex)) return;
  mixSelected.push(shade);
  updateMixer(shade.hex);
}

function removeFromMixer(i) {
  mixSelected.splice(i, 1);
  updateMixer(null);
}

function updateMixer(lastHex) {
  const chips   = document.getElementById('chips-wrap');
  const list    = document.getElementById('mixer-list');
  const preview = document.getElementById('mix-preview');
  const hexEl   = document.getElementById('mix-hex');
  const nameEl  = document.getElementById('mix-name');
  const sugg    = document.getElementById('sugg-grid');

  chips.innerHTML = list.innerHTML = sugg.innerHTML = '';

  if (!mixSelected.length) {
    chips.innerHTML = '<span class="hint-text">No colours added — click + on any shade above</span>';
    preview.style.background = '#141414';
    hexEl.textContent  = '—';
    nameEl.textContent = 'Add colours to blend';
    return;
  }

  mixSelected.forEach((s, i) => {
    // Chip
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `
      <span class="chip-dot" style="background:${s.hex}"></span>
      ${s.name}
      <button class="chip-x" onclick="removeFromMixer(${i})">&#x2715;</button>`;
    chips.appendChild(chip);

    // List row with pour animation
    const item = document.createElement('div');
    item.className = 'mix-item' + (s.hex === lastHex ? ' just-added' : '');
    item.innerHTML = `
      <div class="mix-dot" style="background:${s.hex}">
        <div class="pour-drop" style="background:${s.hex}"></div>
      </div>
      <div class="mix-item-name">${s.name}</div>
      <div class="mix-item-hex">${s.hex}</div>`;
    list.appendChild(item);
    if (s.hex === lastHex) setTimeout(() => item.classList.remove('just-added'), 700);
  });

  // Blend
  const blended = blendHexes(mixSelected.map(s => s.hex));
  const stream  = document.getElementById('pour-stream');
  stream.style.background = lastHex || blended;
  stream.style.top = '-100%';
  preview.classList.remove('pouring');
  void preview.offsetWidth; // force reflow
  if (lastHex) {
    preview.classList.add('pouring');
    setTimeout(() => preview.classList.remove('pouring'), 800);
  }
  preview.style.background = blended;
  hexEl.textContent  = blended;
  nameEl.textContent = colorLabel(blended);

  // Suggestions (4 unused shades)
  const usedHexes = new Set(mixSelected.map(s => s.hex));
  ALL_SHADES.filter(s => !usedHexes.has(s.hex)).slice(0, 4).forEach(s => {
    const c = document.createElement('div');
    c.className = 'sugg-card';
    c.innerHTML = `
      <div class="sugg-swatch" style="background:${s.hex}"></div>
      <div class="sugg-info"><div class="sugg-name">${s.name}</div></div>`;
    c.onclick = () => addToMixer(s);
    sugg.appendChild(c);
  });
}

// ── FEEDBACK ──────────────────────────────────
function setFbMode(mode) {
  fbMode = mode;
  document.getElementById('opt-email').classList.toggle('active', mode === 'email');
  document.getElementById('opt-google').classList.toggle('active', mode === 'google');
  document.getElementById('fb-email-form').style.display  = mode === 'email'  ? 'block' : 'none';
  document.getElementById('fb-google-panel').style.display = mode === 'google' ? 'block' : 'none';
}

// Star picker
function buildStars() {
  const row = document.getElementById('star-row');
  row.querySelectorAll('.star').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRating = Number(btn.dataset.v);
      document.getElementById('fb-rating').value = selectedRating;
      row.querySelectorAll('.star').forEach(b =>
        b.classList.toggle('on', Number(b.dataset.v) <= selectedRating)
      );
    });
    btn.addEventListener('mouseenter', () => {
      const v = Number(btn.dataset.v);
      row.querySelectorAll('.star').forEach(b => {
        b.style.color = Number(b.dataset.v) <= v ? '#f5a623' : '';
      });
    });
  });
  row.addEventListener('mouseleave', () => {
    row.querySelectorAll('.star').forEach(b => {
      b.style.color = '';
      b.classList.toggle('on', Number(b.dataset.v) <= selectedRating);
    });
  });
}

// Populate shade dropdown
function buildShadeSelect() {
  const sel = document.getElementById('fb-shade');
  Object.entries(FAMILIES).forEach(([, fam]) => {
    const grp = document.createElement('optgroup');
    grp.label = fam.label;
    fam.shades.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.name;
      opt.textContent = s.name;
      grp.appendChild(opt);
    });
    sel.appendChild(grp);
  });
}

async function submitFb() {
  const name    = document.getElementById('fb-name').value.trim();
  const email   = document.getElementById('fb-email').value.trim();
  const rating  = Number(document.getElementById('fb-rating').value);
  const shade   = document.getElementById('fb-shade').value;
  const message = document.getElementById('fb-msg').value.trim();
  const errEl   = document.getElementById('form-err');
  const btn     = document.getElementById('submit-btn');
  const lbl     = document.getElementById('submit-lbl');

  errEl.style.display = 'none';

  if (!name)    return showFbErr('Please enter your name.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                return showFbErr('Please enter a valid email address.');
  if (!rating)  return showFbErr('Please choose a star rating.');
  if (!message) return showFbErr('Please write a short message.');

  btn.disabled  = true;
  lbl.textContent = 'Sending…';

  try {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, rating, shade, message }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Something went wrong.');
    document.getElementById('fb-form-inner').style.display = 'none';
    document.getElementById('fb-success').style.display    = 'block';
  } catch (err) {
    showFbErr(err.message);
    btn.disabled    = false;
    lbl.textContent = 'Send feedback';
  }
}

function showFbErr(msg) {
  const el = document.getElementById('form-err');
  el.textContent   = msg;
  el.style.display = 'block';
}

function resetFb() {
  ['fb-name','fb-email','fb-msg'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('fb-shade').value  = '';
  document.getElementById('fb-rating').value = '0';
  selectedRating = 0;
  document.querySelectorAll('.star').forEach(b => b.classList.remove('on'));
  document.getElementById('fb-form-inner').style.display = 'block';
  document.getElementById('fb-success').style.display    = 'none';
  const btn = document.getElementById('submit-btn');
  btn.disabled = false;
  document.getElementById('submit-lbl').textContent = 'Send feedback';
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildHeroStrips();
  buildFamilyTabs();
  buildGallery();
  buildShadeSelect();
  buildStars();
});
