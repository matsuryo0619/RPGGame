import { ctx, canvas } from './imports.js'; // canvasもexportしておこう！

const Text = `
スタッフロール

制作スタッフ

ドット絵:
MatsuR

ストーリー制作: 
MatsuR
ScenarioSmith(ChatGPT)

プログラム:
MatsuR
ScenarioSmith(ChatGPT)
Claude

BGM / SE:
魔王魂 さま

特別協力:
ChatGPT
Claude

使用ツール:
GitHub
GitHub Pages
`;

export function Staffroll() {
  // 中央揃えならxを canvas.width / 2 にするべし！
  ctx.fillTextOptions(Text, canvas.width / 2, 40, 'black', '16px', 'sans-serif', 'center', 'top');
}
