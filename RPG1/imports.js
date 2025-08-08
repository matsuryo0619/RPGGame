CanvasRenderingContext2D.prototype.fillRectColor = function(x, y, w, h, c) {
  const ctx = this;
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
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

export const canvas = document.getElementById('gameWindow');
const size = window.innerHeight * 0.7; // 70vhくらい
canvas.width = size;
canvas.height = size;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

export const ctx = canvas.getContext('2d');

export const State = {
  currentScreen: 'StaffRoll',
  nextScreen: null,
  Gold: 0,
  

  ChangeScreen(next) {
    this.nextScreen = next;
    this.currentScreen = 'transition';
  }
};
