export default class Char{
    constructor(attributes){
        this._speed = 1
        this.fmove = false
        this._attributes = attributes
        this._direction = {
            x:0,
            y:0,
        }
    }
    draw(context){
        context.fillStyle = "orange"
        this._attributes.pos.forEach((item,index)=>{
            context.fillRect(
                item.x,
                item.y,
                this._attributes.w,
                this._attributes.h
            )
            
        })

    }

    addBody(){

    }

    checkBorder({w,h}){

        if (this._attributes.pos[0].x < 0){
            this._attributes.pos[0].x = w
        }

        if (this._attributes.pos[0].x > w){
            this._attributes.pos[0].x = 0
        }

        if (this._attributes.pos[0].y < 0){
            this._attributes.pos[0].y = h
        }

        if (this._attributes.pos[0].y > h){
            this._attributes.pos[0].y = 0
        }

        
    }

    animation(){

        if(this.fmove){

            if(this._attributes.pos[0].x > 0){
                if(this._attributes.pos[0].x % 5 == 0){
                    this._attributes.pos[1].x = this._attributes.pos[0].x
                }
            }
            if(this._attributes.pos[0].y > 0){
                if(this._attributes.pos[0].y % 5 == 0){
                    this._attributes.pos[1].y = this._attributes.pos[0].y
                }
            }

            this._attributes.pos[0].x += this._direction.x
            this._attributes.pos[0].y += this._direction.y
        }
        
        
    }
    resetDirections(){
        this._direction = {
            x:0,
            y:0,
        }
    }

    move(event){
        
        this.fmove = true
        switch (event.key) {
            case "ArrowUp":
                this.resetDirections()
                this._direction.y = -1
                break;
            case "ArrowDown":
                this.resetDirections()
                this._direction.y = 1
                break;

            case "ArrowRight":
                this.resetDirections()
                this._direction.x = 1
                break;

            case "ArrowLeft":
                this.resetDirections()
                this._direction.x = -1
                break;

            default:
                break;
        }
 
    }
}