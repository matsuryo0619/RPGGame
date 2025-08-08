import { canvas, ctx, Width, Height, State, keys } from './imports.js';

export function setting() {
  // 初期化
  if (typeof setting.Screen === 'undefined') {
    setting.Screen = 'Name';
  }

  if (setting.Screen === 'Name') {
    // 背景
    ctx.fillRoundedRect(Width / 2, Height / 2, 500, 500, 15, '#444');

    // ひらがな一覧（あ〜ん）
    const chars = [
      'あ','い','う','え','お',
      'か','き','く','け','こ',
      'さ','し','す','せ','そ',
      'た','ち','つ','て','と',
      'な','に','ぬ','ね','の',
      'は','ひ','ふ','へ','ほ',
      'ま','み','む','め','も',
      'や','ゆ','よ',
      'ら','り','る','れ','ろ',
      'わ','を','ん'
    ];

    const btnWidth = 50;
    const btnHeight = 50;
    const padding = 10;
    const cols = 5;

    const startX = Width / 2 - (btnWidth + padding) * (cols / 2) + btnWidth / 2;
    const startY = Height / 2 - 200;

    chars.forEach((char, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = startX + col * (btnWidth + padding);
      const y = startY + row * (btnHeight + padding);

      ctx.fillRoundedRect(x, y, btnWidth, btnHeight, 8, '#666');
      ctx.fillTextOptions(char, x, y, 'white', 20, 'sans-serif', 'center', 'middle');
    });
  }
}
