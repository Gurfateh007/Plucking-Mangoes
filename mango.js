
 class Mango{
     constructor(x,y,diametre){
         var options ={
             isStatic:  true,
             restitution:0.5,
             friction:1.0,
         }
         this.body=Bodies.circle(x,y,diametre,options);
         this.diametre=diametre;
         this.image=loadImage("mango.png");
         World.add(woerld,this.body);
     }
     display(){
      push ();
      traslate (this.body.position.position.x,this.body.position.y);
      imageMode (CENTER);
      image (this.image,0,0, this.diametre);
      pop ();
     }
 }