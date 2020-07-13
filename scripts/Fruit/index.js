class Fruit{
    constructor(posX,posY){
        this.pos = {
            x : posX,
            y : posY
        }
    }

    colision(player,randPos){
        console.log(this.pos.x,this.pos.y)
        console.log(player[0].x,player[0].y)
        
        let hit = this.pos.x===player[0].x && this.pos.y === player[0].y?true:false
        if(hit){
            this.pos.x = random(randPos[0])
            this.pos.y = random(randPos[1])
            return true
        }
        return false
    }

    show(){
        strokeWeight(0)
        fill('white')
        rect(this.pos.x,this.pos.y,30,30,50,50,50,50)
    }
}