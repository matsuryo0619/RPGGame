import { ctx, canvas, State, keys } from './imports.js'; // canvasもexportしておこう！

const Text = `
スタッフロール

制作スタッフ

ドット絵:
MatsuR

ストーリー制作: 
MatsuR
MatsuR (兄)
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

追記:
ChatGPTのOpenAI社
ClaudeのAnthropic社は､関係ありません
MatsuRが使用しただけです｡
`;

export function Staffroll() {
  if (typeof Staffroll.scrollY === 'undefined') {
    Staffroll.scrollY = canvas.height;
  }

  ctx.fillTextOptions(Text, canvas.width / 2, Staffroll.scrollY, 'black', '25px', 'sans-serif', 'center', 'top');

  Staffroll.scrollY -= 1 + keys['Space']  * 4;

  if (Staffroll.scrollY < -1000) {
    State.ChangeScreen('title');
  }
}
