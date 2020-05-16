class bullet
{
    constructor(x,y,weight,speed,color)
    {
     this.bullet=createSprite(x,y,50,50);
     this.bullet.shapeColor=color;
     this.bullet.width=50;
     this.bullet.height=50;
     this.bullet.velocityX=10;
    }
   
    bounceoff(wall,bullet)
    {
        console.log(wall.x);
        console.log(this.bullet.x)
        //var wall;
        var d=((0.5*this.bullet.weight*this.bullet.speed*this.bullet.speed)/(Math.pow(wall.thickness,3)));
        if(wall.x-this.bullet.x<this.bullet.width/2+wall.width/2 
            && this.bullet.x-wall.x<this.bullet.width/2+wall.width/2 )
            {
               this.bullet.velocityX=0;
               if(d<10)
               {
                   wall.shapeColor="green";
               }
               else
               {
                   wall.shapeColor="red";
               }
            }
    }

}