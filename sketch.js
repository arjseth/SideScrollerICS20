let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys = [];
let img;
let img3;
let money = [];

function setup() {
  createCanvas(400, 400);
  //laoding assets
  //soundFormats('mp3');
  mySound = loadSound("assets/energy.mp3");
  img = loadImage("mathman.jpeg");
  let img2 = loadImage("glitch.jpeg");
  img3 = loadImage("treasure.jpeg");

  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);

  for (let i = 0; i < 50; i++) {
    enemys.push(new Baddies(img2, -1));
  }
  for (let i = 0; i < 10; i++) {
    money.push(new Baddies(img3, 1));
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum % 3 === 0) {
    open();
  } else if (sNum % 3 === 1) {
    game();
  } else if (sNum % 3 === 2) {
    close();
  }
}

function open() {
  background(36, 3, 252);
  textSize(35);
  fill(252, 3, 32);
  text("Welcome to the Game!", 28, 200);
  //mySound.play();
}

function close() {
  background(66, 245, 147);
  textSize(35);
  fill(245, 230, 66);
  text("Thanks for playing!", 50, 200);
  textSize(20);
  fill(66, 135, 245);
  text(" You missed " + hero.score + " baddies ", 100, 100);
  fill(245, 66, 135);
  text(" You collected " + hero.treasure + " treasures ", 100, 300);
}

function game() {
  background(10, 30, 20);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();

  for (let i = 0; i < enemys.length; i++) {
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
  }
  for (let i = 0; i < money.length; i++) {
    money[i].show();
    money[i].update();
    hero.hit(money[i]);
  }

  fill("blue");
  rect(200, 300, 20, 20);
}
