const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// マップデータ（0: 草原, 1: 壁）
const map = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,0,1,1,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,0,0,0,1,1,0,0,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,0,1,1,0,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];

const tileSize = 32; // 1マスのサイズ
const player = { x: 1, y: 1, color: "blue", speed: 1 };

// ゲーム開始処理
document.getElementById("startButton").addEventListener("click", function() {
  document.getElementById("titleScreen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("titleScreen").style.display = "none";
    canvas.style.display = "block"; // フィールド画面を表示
    draw();
  }, 1000);
});

// キー入力
document.addEventListener("keydown", (e) => {
  let newX = player.x;
  let newY = player.y;
  
  if (e.key === "ArrowUp") newY--;
  if (e.key === "ArrowDown") newY++;
  if (e.key === "ArrowLeft") newX--;
  if (e.key === "ArrowRight") newX++;

  // 壁でなければ移動
  if (map[newY][newX] === 0) {
    player.x = newX;
    player.y = newY;
  }

  draw();

  // 20%の確率でエンカウント（戦闘開始）
  if (Math.random() < 0.2) {
    startBattle();
  }
});

// マップ & プレイヤー描画
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      ctx.fillStyle = map[y][x] === 1 ? "gray" : "lightgreen";
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

// 戦闘開始
function startBattle() {
  canvas.style.display = "none"; // フィールドを隠す
  document.getElementById("battleScene").style.display = "block"; // 戦闘画面を表示
  showMessages(["敵が現れた！"]);
}

// メッセージを順番に表示
function showMessages(messages, callback) {
  let index = 0;
  let messageBox = document.getElementById("messageBox");
  let messageText = document.getElementById("messageText");

  messageBox.style.display = "block";
  messageText.textContent = "";

  function typeMessage() {
    if (index < messages.length) {
      messageText.textContent = messages[index];
      index++;
      setTimeout(typeMessage, 1000);
    } else {
      messageBox.style.display = "none";
      if (callback) callback();
    }
  }

  typeMessage();
}
