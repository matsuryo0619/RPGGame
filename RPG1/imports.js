const BASE_SIZE = 700;  // 基準のキャンバスサイズ（例）

CanvasRenderingContext2D.prototype.fillRectColor = function(x, y, w, h, c) {
  const ctx = this;
  const scaleX = ctx.canvas.width / BASE_SIZE;
  const scaleY = ctx.canvas.height / BASE_SIZE;

  ctx.fillStyle = c;
  ctx.fillRect(
    x * scaleX - (w * scaleX) / 2,
    y * scaleY - (h * scaleY) / 2,
    w * scaleX,
    h * scaleY
  );
};

CanvasRenderingContext2D.prototype.fillTextOptions = function(
  text, x, y,
  color = '#000',
  size = 16,          // 数値(px)で受け取る想定
  font = 'sans-serif',
  align = 'left',
  baseline = 'alphabetic',
  lineHeight = null
) {
  const ctx = this;
  const scaleY = ctx.canvas.height / BASE_SIZE;
  const fontSize = typeof size === 'number' ? size * scaleY : size;

  ctx.font = `${fontSize}px ${font}`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = baseline;

  const lh = lineHeight || fontSize * 1.2;

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x * (ctx.canvas.width / BASE_SIZE), y * (ctx.canvas.height / BASE_SIZE) + i * lh);
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

export const keys = {};

window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});
