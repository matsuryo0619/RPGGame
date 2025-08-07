import { ctx, canvas, State } from './imports.js'; // canvasもexportしておこう！

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
  if (typeof Staffroll.scrollY === 'undefined') {
    Staffroll.scrollY = canvas.height;
  }

  ctx.fillTextOptions(Text, canvas.width / 2, Staffroll.scrollY, 'black', '25px', 'sans-serif', 'center', 'top');

  Staffroll.scrollY -= 1;

  if (Staffroll.scrollY < -800) {
    State.currentScreen = 'title';
  }
}
