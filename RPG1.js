// 敵データ（画像付き）
const enemies = [
  { name: "スライム", hp: 10, attack: 3, exp: 5, drop: "スライムのゼリー", img: "img/enemies/slime.png" },
  { name: "ゴブリン", hp: 15, attack: 5, exp: 8, drop: "ゴブリンの牙", img: "img/enemies/goblin.png" },
  { name: "オオカミ", hp: 20, attack: 7, exp: 12, drop: "オオカミの毛皮", img: "img/enemies/wolf.png" }
];

let player = { hp: 30, level: 1, exp: 0, inventory: [] };
let currentEnemies = [];

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

// 戦闘開始
function startBattle() {
  document.getElementById("battleUI").style.display = "block";
  document.getElementById("battleScene").style.display = "block";
  document.getElementById("enemyContainer").innerHTML = "";
  currentEnemies = [];

  let enemyCount = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < enemyCount; i++) {
    let enemy = { ...enemies[Math.floor(Math.random() * enemies.length)] };
    enemy.hp = enemy.hp;
    currentEnemies.push(enemy);

    let enemyImg = document.createElement("img");
    enemyImg.src = enemy.img;
    enemyImg.classList.add("enemy");
    enemyImg.dataset.index = i;
    document.getElementById("enemyContainer").appendChild(enemyImg);
  }

  let enemyNames = currentEnemies.map(e => e.name).join(" と ");
  showMessages([`${enemyNames}があらわれた！`]);
}

// クリックで攻撃
document.getElementById("enemyContainer").addEventListener("click", function(event) {
  let index = event.target.dataset.index;
  if (index !== undefined) {
    playerAttack(parseInt(index));
  }
});

// 攻撃
function playerAttack(index) {
  let damage = Math.floor(Math.random() * 5) + 3;
  currentEnemies[index].hp -= damage;
  flashEnemy(index);

  showMessages([
    `主人公の攻撃！`,
    `${currentEnemies[index].name}に${damage}のダメージ！`
  ], function() {
    if (currentEnemies[index].hp <= 0) {
      showMessages([`${currentEnemies[index].name}を倒した！`], function() {
        currentEnemies.splice(index, 1);
        document.getElementById("enemyContainer").children[index].remove();
        if (currentEnemies.length === 0) {
          endBattle();
        } else {
          enemyTurn();
        }
      });
    } else {
      enemyTurn();
    }
  });
}

// 敵の攻撃
function enemyTurn() {
  let enemyIndex = Math.floor(Math.random() * currentEnemies.length);
  let enemy = currentEnemies[enemyIndex];
  let damage = Math.floor(Math.random() * enemy.attack) + 1;

  player.hp -= damage;
  
  showMessages([
    `${enemy.name}の攻撃！`,
    `主人公に${damage}のダメージ！`
  ], function() {
    if (player.hp <= 0) {
      showMessages(["主人公は倒れた..."], gameOver);
    } else {
      showMessage("どうする？");
    }
  });
}

// 戦闘終了
function endBattle() {
  document.getElementById("battleUI").style.display = "none";
  showMessages(["戦闘に勝利した！"]);
}

// 敵の攻撃エフェクト
function flashEnemy(index) {
  let enemyImg = document.querySelector(`#enemyContainer img:nth-child(${index + 1})`);
  enemyImg.style.opacity = "0.5";
  setTimeout(() => enemyImg.style.opacity = "1", 200);
}
