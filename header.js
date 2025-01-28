//headerタグを動的に作成
const header = document.createElement("header");
header.id = "header";

//headerの内容を動的に作成

//ヘッダーアイコン
const header_img = document.createElement("img");
header_img.src = "header_img.png";
header_img.id = "header_img";

//ヘッダーに要素を移動
header.appendChild(header_img);

//ヘッダーのスタイル(css)を読み込む
const header_style = document.createElement("link");
header_style.rel = "stylesheet";
header_style.href = "header.css";
document.head.appendChild(header_style);

//ヘッダーをページに追加
document.body.insertBefore(header, document.body.firstChild);
