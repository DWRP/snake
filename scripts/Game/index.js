export default class Game{
    constructor(context,char,screen){
        this.screen = screen
        this._context = context
        this._snake = char
    }

    setup(){
        this._snake.draw(this._context)
        addEventListener('keydown',(event)=>{this._snake.move(event)})
        console.log('Setup Finish')
    }
    
    update(){
        this._context.clearRect(0,0,window.innerWidth,window.innerHeight)
        this._snake.animation()
        this._snake.checkBorder(this.screen)
        this._snake.draw(this._context)
    }
}