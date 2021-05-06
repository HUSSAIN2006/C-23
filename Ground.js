class Ground{
    constructor(x,y,w,h){
        var ground_options ={
            isStatic: true
        }
    
       this.body= Bodies.rectangle(x,y,w,h,ground_options);
       this.wt = w ;
       this.ht = h ;

        World.add(world,this.body);
    }
   display(){
    rectMode(CENTER);
    fill("magenta")
    rect(this.body.position.x,this.body.position.y,this.wt,this.ht);
   }
}