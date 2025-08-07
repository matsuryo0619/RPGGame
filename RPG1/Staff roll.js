import { ctx, canvas } from './imports.js'; // canvasもexportしておこう！

const Text = `
スタッフロール

制作スタッフ

ドット絵: MatsuR

ストーリー制作: MatsuR, ScenarioSmith(ChatGPT)

プログラム: MatsuR, ScenarioSmith(ChatGPT), Claude

BGM / SE: 魔王魂 さま

特別協力:

ChatGPT

Claude

使用ツール

GitHub

GitHub Pages
`;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillRectColor(0, 0, canvas.width, canvas.height, 'white');

// 中央揃えならxを canvas.width / 2 にするべし！
ctx.fillTextOptions(Text, canvas.width / 2, 40, 'black', '16px', 'sans-serif', 'center', 'top');
