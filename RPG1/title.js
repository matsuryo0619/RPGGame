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

let SelectedBtn = 0;

let prevKeys = {};

export function title() {
  if (!titleImage.complete) return;

  if (keys['ArrowDown'] && !prevKeys['ArrowDown']) {
    SelectedBtn++;
    if (SelectedBtn >= btns.length) SelectedBtn = 0; // 下に行きすぎたら一番上へ
  }
  if (keys['ArrowUp'] && !prevKeys['ArrowUp']) {
    SelectedBtn--;
    if (SelectedBtn < 0) SelectedBtn = btns.length - 1; // 上に行きすぎたら一番下へ
  }

  prevKeys = { ...keys };

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
      const Y = Height / 2 + 50 + i * 50;
      const isSelected = SelectedBtn === i;

      ctx.fillRoundedRect(X, Y, 150, isSelected ? 45 : 40, isSelected ? 15 : 10, isSelected ? '#cccccc' : '#444');
      ctx.fillTextOptions(btn.text, X, Y, 'white', 20, 'sans-serif', 'center', 'middle');
    });
  }
}
