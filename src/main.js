import './style.css';
import { apps } from './apps.js';

const grid = document.getElementById('grid');
document.getElementById('count').textContent = `${apps.length} apps`;

for (const app of apps) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = app.url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.style.setProperty('--accent', app.color);

  const host = new URL(app.url).host;
  a.innerHTML = `
    <span class="piece" aria-hidden="true">${app.piece}</span>
    <h2>${app.name}</h2>
    <p class="tag">${app.tagline}</p>
    <p class="desc">${app.description}</p>
    <span class="open">${host}<span class="arrow" aria-hidden="true">↗</span></span>
  `;
  grid.appendChild(a);
}
