import Game from './Game/index.js'
import CharModel from './CharModel/index.js'

const char = new CharModel({pos:[{x:10,y:0},{x:5,y:0},{x:0,y:0}],w:5,h:5})

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const game = new Game(context,char,{w:canvas.width, h:canvas.height})

function main(){
    game.setup()
    
    setInterval(()=>{
        game.update()
    },60)
}

main()