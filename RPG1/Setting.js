import { canvas, ctx, Width, Height, State, keys } from './imports.js';

export function setting() {
  // 初期化
  if (typeof setting.Screen === 'undefined') {
    setting.Screen = 'Name';
  }

  if (setting.Screen === 'Name') {
    // 背景
    ctx.fillRoundedRect(Width / 2, Height / 2, 500, 500, 15, '#444');

    // 配置（列ごと）
    const columns = [
      ['あ','い','う','え','お'],
      ['か','き','く','け','こ'],
      ['さ','し','す','せ','そ'],
      ['た','ち','つ','て','と'],
      ['な','に','ぬ','ね','の'],
      ['は','ひ','ふ','へ','ほ'],
      ['ま','み','む','め','も'],
      ['や','', 'ゆ', '', 'よ'], // 空白は調整用
      ['ら','り','る','れ','ろ'],
      ['わ','', '', '', 'を'],
      ['ん','','','','']
    ];

    const btnWidth = 25;
    const btnHeight = 25;
    const padding = 10;

    const startX = Width / 2 - ((btnWidth + padding) * columns.length) / 2 + btnWidth / 2;
    const startY = Height / 2 - ((btnHeight + padding) * 5) / 2 + btnHeight / 2;

    columns.forEach((colArr, colIndex) => {
      colArr.forEach((char, rowIndex) => {
        if (!char) return; // 空白マスはスキップ
        const x = startX + colIndex * (btnWidth + padding);
        const y = startY + rowIndex * (btnHeight + padding);

        ctx.fillRoundedRect(x, y, btnWidth, btnHeight, 8, '#666');
        ctx.fillTextOptions(char, x, y, 'white', 20, 'sans-serif', 'center', 'middle');
      });
    });
  }
}
