class Player
{
	
    constructor(x,y) {
		this.x = x;
		this.y= y;
		this.spt=createSprite(this.x, this.y, 50,50);
		this.spt.shapeColor="orange";
		this.spt.addAnimation("player",playerAnimation);
		this.spt.scale=0.05;
    }
move(x,y){
this.spt.x+=x*grid;
this.spt.y+=y*grid;
}
   

		
}