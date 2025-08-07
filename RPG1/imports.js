CanvasRenderingContext2D.prototype.fillRectColor = function(x, y, w, h, c) {
  const ctx = this;
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
};

CanvasRenderingContext2D.prototype.fillTextOptions = function(
  text, x, y,
  color = '#000', size = '16px', font = 'sans-serif',
  align = 'left', baseline = 'alphabetic'
) {
  this.font = `${size} ${font}`;
  this.fillStyle = color;
  this.textAlign = align;
  this.textBaseline = baseline;
  this.fillText(text, x, y);
};

const canvas = document.getElementById('gameWindow');
export const ctx = canvas.getContext('2d');
