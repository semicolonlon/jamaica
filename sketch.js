function setup() {
    createCanvas(windowWidth, windowHeight);
    
}
  
function draw() {
  // ジャマイカ国旗の描画（キャンバスサイズ対応）

  // 緑の背景
  background(0, 153, 0);

  // 黄色のX字
  stroke(255, 204, 0);
  strokeWeight(min(width, height) * 0.15); // 自動で太さ調整
  line(0, 0, width, height);
  line(0, height, width, 0);

  // 黒の上下三角形
  noStroke();
  fill(0);
  
  // 上
  beginShape();
  vertex(0, 0);
  vertex(width / 2, height / 2);
  vertex(width, 0);
  endShape(CLOSE);
  
  // 下
  beginShape();
  vertex(0, height);
  vertex(width / 2, height / 2);
  vertex(width, height);
  endShape(CLOSE);
}