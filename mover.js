class Mover{
  constructor(img){
    this.pos=createVector(30,300);
    this.vel=createVector(1,0);
    this.acc=createVector(0,0);
    this.pic=img;
    this.score=50;
    this.treasure= 0;
                         
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  show(){
    fill("green");
    // ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x,this.pos.y, 50,50);
    textSize(50)
    text("SCORE: "+ this.score, this.pos.x,100);
    textSize(30);
    text("Treasure collected: "+ this.treasure, this.pos.x,200);
  }
  
  applyForce(f){
    this.acc.add(f);
  }
  
  edges(){
    if(this.pos.y>350){
      this.vel.y*=-0.5;
      this.pos.y=350
    }
    if(this.pos.y<0){
      this.vel.y*=-0.5;
      this.pos.y=1
    }
  
  }
  
  hit(o) {
    
    if ((o.pos.x >= this.pos.x && o.pos.x <= (this.pos.x + 80)) &&
        (o.pos.y >= this.pos.y && o.pos.y <= (this.pos.y + 80))) {
        o.pos.y = -400;
        if(o.points === -1) {
          this.score--;
    }
    else if (o.points === 1) {
        this.treasure++;
    }
  }
  }
}
