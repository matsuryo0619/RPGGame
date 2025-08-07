CanvasRenderingContext2D.prototype.fillRectColor = function(x, y, w, h, c) {
  const ctx = this;
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
};

CanvasRenderingContext2D.prototype.fillTextOptions = function(
  text, x, y,
  color = '#000', size = '16px', font = 'sans-serif',
  align = 'left', baseline = 'alphabetic',
  lineHeight = null
) {
  this.font = `${size} ${font}`;
  this.fillStyle = color;
  this.textAlign = align;
  this.textBaseline = baseline;

  const lh = lineHeight || parseInt(size) * 1.4;

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    this.fillText(lines[i], x, y + i * lh);
  }
};

const canvas = document.getElementById('gameWindow');
export const ctx = canvas.getContext('2d');
