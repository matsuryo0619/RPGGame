import { ctx, canvas, Width, Height, State, keys } from './imports.js';

const titleImage = new Image();
titleImage.src = 'https://i.imgur.com/e0qKLwV.png';

const btns = [
  {
    text: "最初から",
    action: () => {
      State.ChangeScreen('Setting');
    }
  },
  {
    text: "途中から",
    action: () => {
      State.ChangeScreen('FileLoad');
    }
  },
  {
    text: '設定',
    action: () => {
      State.ChangeScreen('OPSetting');
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

  if (174 <= title.BackHeight) {
    title.BackHeight = 175;
    btns.forEach((btn, i) => {
      const X = Width / 2;
      const Y = Height / 2 + 50 + i * 10;

      ctx.fillRoundedRect(X, Y, 150, 50, 10, '#444');

      ctx.fillTextOptions(btn.text, X, Y, 'white', 20, 'sans-serif', 'center', 'middle');
    });
  }
}
