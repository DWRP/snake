function listMat(){
    let list = []
    for(let index = 0; index<600;index += 30){
        list.push(index)
    }
    return list
}

function startGame(){
    snake = new Snake()
    fruit = new Fruit(random(rPositions),random(rPositions))
    document.querySelector('.menu').classList.toggle('hidden')
}

let snake
let fruit
let menu
let button
const rPositions = listMat()

function preload(){
    snake = new Snake()
    fruit = new Fruit(random(rPositions),random(rPositions))
    frameRate(10)
}

function setup(){
    console.log('Setup Running')
    createCanvas(600, 600)
    snake.colide = true
}

function keyPressed(){
    if(key.includes('Arrow')){
        snake.changeDirection(key.replace('Arrow','').toUpperCase())
    }
}

function touchMoved() {
    let direction

    if(event.movementX>0){
        direction = "RIGHT"
    }
    else if(event.movementX<0){
        direction = "LEFT"
    }
    else if(event.movementY>0){
        direction = "DOWN"
    }
    else if(event.movementY<0){
        direction = "UP"
    }
    
    console.log(event.movementX)
    console.log(event.movementY)
    console.log(direction)
    snake.changeDirection(direction)
  }

function draw(){
    clear()
    background(0,0,0)
    if(!snake.colide){
        run(snake,fruit)
    }
}