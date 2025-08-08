const titleImage = new Image();
titleImage.src = 'https://i.imgur.com/e0qKLwV.png';

export function title() {
  if (!titleImage.complete) return;

  ctx.drawImage(titleImage, Width / 2 - titleImage.width / 2, 50);

  if (typeof title.BackHeight !== 'number') {
    title.BackHeight = 0;
  }

  ctx.globalAlpha = 0.5;
  ctx.fillRoundedRect(Width / 2, Height / 2 + 100, 200, title.BackHeight, 20, 'black');
  ctx.globalAlpha = 1;

  title.BackHeight += (175 - title.BackHeight) / 15;

  if (175 <= title.BackHeight) {
    title.BackHeight = 175;
  }
}
