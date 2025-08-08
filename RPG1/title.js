import { ctx, canvas, Width, Height, State, keys } from './imports.js';

const titleImage = new Image();
titleImage.src = 'https://i.imgur.com/e0qKLwV.png';

const btns = [
  {
    text: "最初から",
    action: () => {
      State.ChangeScreen('Setting');
    }
  }
];

export function title() {
  if (!titleImage.complete) return;

  ctx.drawImage(titleImage, Width / 2 - titleImage.width / 2, 100);

  if (typeof title.BackHeight !== 'number') {
    title.BackHeight = 0;
  }

  ctx.globalAlpha = 0.5;
  ctx.fillRoundedRect(Width / 2, Height / 2 + 100, 200, title.BackHeight, 20, 'black');
  ctx.globalAlpha = 1;

  title.BackHeight += (175 - title.BackHeight) / 15;

  if (175 <= title.BackHeight) {
    title.BackHeight = 175;
    btns.forEach((btn, i) => {
      const btnX = Width / 2;
      const btnY = Height / 2 + 300 + i * 50; // 適当に間隔調整
      const btnW = 150;
      const btnH = 40;
      const radius = 10;

      // ボタン背景
      ctx.fillRoundedRect(btnX, btnY, btnW, btnH, radius, '#444');

      // ボタン文字（中央揃え）
      ctx.fillTextOptions(btn.text, btnX, btnY + btnH / 2, 'white', 20, 'sans-serif', 'center', 'middle');
    });
  }
}
