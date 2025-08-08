import { canvas, ctx, Width, Height, State, keys } from './imports.js';

export function setting() {
  // 初期化
  if (typeof setting.Screen === 'undefined') {
    setting.Screen = 'Name';
    setting.SelectedX = 0;
    setting.SelectedY = 0;
    setting.InputName = '';
    setting.prevKeys = {};
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
      ['わ','', 'を', '', 'ん'],
      ['☒','','','','','']
    ];

    const btnWidth = 30;
    const btnHeight = 30;
    const padding = 10;
    const fontSize = btnHeight * 0.7;

    const totalWidth = (btnWidth + padding) * columns.length - padding;
    const totalHeight = (btnHeight + padding) * 5 - padding;

    const startX = Width / 2 - totalWidth / 2 + btnWidth / 2;
    const startY = Height / 2 - totalHeight / 2 + btnHeight / 2;

    // --- 入力処理 ---
    if (keys['ArrowRight'] && !setting.prevKeys['ArrowRight']) {
      do {
        setting.SelectedX = (setting.SelectedX + 1) % columns.length;
      } while (!columns[setting.SelectedX][setting.SelectedY]);
    }
    if (keys['ArrowLeft'] && !setting.prevKeys['ArrowLeft']) {
      do {
        setting.SelectedX = (setting.SelectedX - 1 + columns.length) % columns.length;
      } while (!columns[setting.SelectedX][setting.SelectedY]);
    }
    if (keys['ArrowDown'] && !setting.prevKeys['ArrowDown']) {
      do {
        setting.SelectedY = (setting.SelectedY + 1) % columns[setting.SelectedX].length;
      } while (!columns[setting.SelectedX][setting.SelectedY]);
    }
    if (keys['ArrowUp'] && !setting.prevKeys['ArrowUp']) {
      do {
        setting.SelectedY = (setting.SelectedY - 1 + columns[setting.SelectedX].length) % columns[setting.SelectedX].length;
      } while (!columns[setting.SelectedX][setting.SelectedY]);
    }

    if (keys['Space'] && !setting.prevKeys['Space']) {
      const char = columns[setting.SelectedX][setting.SelectedY];
      if (char) setting.InputName += char;
    }

    setting.prevKeys = { ...keys };

    // --- ボタン描画 ---
    columns.forEach((colArr, colIndex) => {
      colArr.forEach((char, rowIndex) => {
        if (!char) return;
        const x = startX + colIndex * (btnWidth + padding);
        const y = startY + rowIndex * (btnHeight + padding);

        const isSelected = (colIndex === setting.SelectedX && rowIndex === setting.SelectedY);
        ctx.fillRoundedRect(x, y, btnWidth, btnHeight, 8, isSelected ? '#cccccc' : '#666');
        ctx.fillTextOptions(char, x, y, 'white', fontSize, 'sans-serif', 'center', 'middle');
      });
    });

    // 入力中の名前表示
    ctx.fillTextOptions(setting.InputName, Width / 2, Height / 2 - 175, 'white', 30, 'sans-serif', 'center', 'middle');
  }
}
