class Snake{
    constructor(pos){
        this.rPos = pos
        this.score = 0
        this.colide = false
        this.direction = ""
        this.positions = [
            {
                color:{
                    R:255,
                    G:154,
                    B:0
                },
                x:60,
                y:30,
                size:{
                    w:30,
                    h:30
                },
                border:{
                    topL:5,
                    topR:5,
                    bottomR:5,
                    bottomL:5
                }
            },
            {
                color:{
                    R:255,
                    G:255,
                    B:0
                },
                x:30,
                y:30,
                size:{
                    w:30,
                    h:30
                },
                border:{
                    topL:5,
                    topR:5,
                    bottomR:5,
                    bottomL:5
                }
            },
            {
                color:{
                    R:255,
                    G:255,
                    B:0
                },
                x:0,
                y:30,
                size:{
                    w:30,
                    h:30
                },
                border:{
                    topL:5,
                    topR:5,
                    bottomR:5,
                    bottomL:5
                }
            }
        ]
    }

    show(){
        this.positions.forEach((item)=>{
            stroke('black')
            strokeWeight(0)
            fill(item.color.R,item.color.G,item.color.B)
            rect(
                item.x, 
                item.y, 
                item.size.w, 
                item.size.h, 
                item.border.topL, 
                item.border.topR, 
                item.border.bottomR, 
                item.border.bottomL)
        })
    }
    addPart(check,audio){
        if(check){
            this.score++
            audio.play()
            setTimeout(()=>{audio.stop()},300)
            this.positions.push({
                color:{
                    R:255,
                    G:255,
                    B:0
                },
                x:this.positions[this.positions.length-1].x,
                y:this.positions[this.positions.length-1].y,
                size:{
                    w:30,
                    h:30
                },
                border:{
                    topL:5,
                    topR:5,
                    bottomR:5,
                    bottomL:5
                }
            })
        }
    }

    checkW(value){
        if (value > width-1){
            return 0
        }
        if (value < 0){
            return this.rPos[0][this.rPos[0].length-1]
        }
    }
    checkH(value){
        if (value > height-1){
            return 0
        }
        if (value < 0){
            return this.rPos[1][this.rPos[1].length-1]
        }
    }

    resizeSnake(){
        let newPos = []
        let count = 0
        for(let item of this.positions){
            if(count<3){
                newPos.push(item)
            }
            count++
        }
        this.colide = true
        this.positions = newPos
    }

    colision(){

        this.positions.filter((item,index)=>{
            if(index>0){
                if(this.positions[0].x === item.x && this.positions[0].y === item.y){
                    document.querySelector('.score').innerHTML = `Melhor pontuação: ${this.score}`
                    this.resizeSnake()
                    document.querySelector('.menu').classList.toggle('hidden')
                    if(width < 1024){
                        document.querySelector('.mobile').classList.toggle('hidden')
                    }
                }
            }
            
        })
    }
    changeDirection(direction){

        let checked = ((direction === "UP" && this.direction !== "DOWN") || 
                       (direction === "DOWN" && this.direction !== "UP") ||
                       (direction === "RIGHT" && this.direction !== "LEFT") ||
                       (direction === "LEFT" && this.direction !== "RIGHT"))
        
        if(checked){
            this.direction = direction
        }
        
        
    }
    move(){
        let limit
        for (let pos = this.positions.length-1; pos > 0; pos--){
            
            this.positions[pos].x = this.positions[pos-1].x
            this.positions[pos].y = this.positions[pos-1].y
        }
        
        if (this.direction === "RIGHT" || this.direction === "LEFT" || this.direction === ""){
            this.positions[0].x = this.direction=== "LEFT"?this.positions[0].x - this.positions[0].size.w: this.positions[0].x + this.positions[0].size.w
            limit = this.checkW(this.positions[0].x)
            this.positions[0].x = limit >= 0?limit:this.positions[0].x
            
        }
        
        if (this.direction === "UP" || this.direction === "DOWN"){
            this.positions[0].y = this.direction=== "UP"?this.positions[0].y - this.positions[0].size.w: this.positions[0].y + this.positions[0].size.w
            limit = this.checkH(this.positions[0].y)
            this.positions[0].y = limit >= 0 ?limit:this.positions[0].y
        }
    }
}