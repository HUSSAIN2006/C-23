class Box{
    constructor(x,y,w,h){
        var ball_options = {
            restitution: 1
        }
       this.body = Bodies.rectangle(x,y,w,h,ball_options);
       this.wt = w;
       this.ht = h;
       this.x = x;
       this.y = y;
      World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("black")
        rect(0,0,this.wt,this.ht);
        pop();
    }
}