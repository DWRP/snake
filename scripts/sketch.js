function listMat(w,h){
    let list = []
    let wid = []
    let hei = []
    for(let index = 30; index<w-30;index += 30){
        wid.push(index)
    }
    for(let index = 30; index<h-30;index += 30){
        hei.push(index)
    }

    list.push(wid,hei)
    return list
}

function startGame(){
    snake = new Snake()
    fruit = new Fruit(random(rPositions[0]),random(rPositions[1]))
    document.querySelector('.menu').classList.toggle('hidden')
}

let snake
let fruit
let menu
let button
let backgroundMusic
let snakeEat
let rPositions

function preload(){
    
    backgroundMusic = createAudio('../assets/audios/background/back.wav')
    backgroundMusic.autoplay(true)
    backgroundMusic.volume(.2)
    backgroundMusic.loop()

    snakeEat = createAudio('../assets/audios/snake/eat.wav')

    snake = new Snake()

    frameRate(10)
}

function setup(){
    console.log('Setup Running')
    createCanvas(windowWidth, windowHeight)
    rPositions = listMat(width,height)
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
        run(snake,fruit,snakeEat)
    }
}