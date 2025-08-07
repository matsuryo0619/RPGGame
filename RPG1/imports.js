CanvasRenderingContext2D.prototype.fillRectColor = function(x, y, w, h, c) {
  const ctx = this;
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
};

const canvas = document.getElementById('gameWindow');
export const ctx = canvas.getContext('2d');
