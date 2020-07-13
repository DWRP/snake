class Fruit{
    constructor(posX,posY){
        this.pos = {
            x : posX,
            y : posY
        }
    }

    colision(player,randPos){
        let hit = collidePointRect(this.pos.x,this.pos.y,player[0].x,player[0].y,30,30);
        if(hit){
            this.pos.x = random(randPos[0])
            this.pos.y = random(randPos[1])
            return true
        }
        return false
    }

    show(){
        strokeWeight(30)
        stroke('white')
        point(this.pos.x,this.pos.y)
    }
}