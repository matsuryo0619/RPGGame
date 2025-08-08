CanvasRenderingContext2D.prototype.fillRectColor = function(x, y, w, h, c) {
  const ctx = this;
  ctx.fillStyle = c;
  ctx.fillRect(x - w / 2, y - h / 2, w, h);
};

CanvasRenderingContext2D.prototype.fillTextOptions = function(
  text, x, y,
  color = '#000',
  size = '16px',
  font = 'sans-serif',
  align = 'left',
  baseline = 'alphabetic',
  lineHeight = null
) {
  // sizeが数値ならpx付ける
  const fontSize = typeof size === 'number' ? `${size}px` : size;

  this.font = `${fontSize} ${font}`;
  this.fillStyle = color;
  this.textAlign = align;
  this.textBaseline = baseline;

  const lh = lineHeight || parseInt(fontSize) * 1.2;

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    this.fillText(lines[i], x, y + i * lh);
  }
};

CanvasRenderingContext2D.prototype.fillRoundedRect = function(centerX, centerY, w, h, r, color) {
  const ctx = this;
  const x = centerX - w / 2;
  const y = centerY - h / 2;
  
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
};

export const canvas = document.getElementById('gameWindow');
const size = window.innerHeight * 0.7; // 70vhくらい
canvas.width = size;
canvas.height = size;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

export const ctx = canvas.getContext('2d');

export const Width = canvas.width;
export const Height = canvas.height;

export const State = {
  currentScreen: 'StaffRoll',
  nextScreen: null,
  Name: null,
  Gold: 0,
  

  ChangeScreen(next) {
    this.nextScreen = next;
    this.currentScreen = 'transition';
  }
};

export const keys = {};

window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

let waitEndTime = 0;

export function WaitStart(sec) {
  waitEndTime = performance.now() / 1000 + sec;
}

export function WaitRunning() {
  return performance.now() / 1000 < waitEndTime;
}
