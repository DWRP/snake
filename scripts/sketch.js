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
    if(screen.width < 1024){
        document.querySelector('.mobile').classList.toggle('hidden')
    }
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
    if(windowWidth>1024){
        createCanvas(windowWidth, windowHeight)
    }else{
        console.log(windowHeight-(windowHeight/2))
        createCanvas(windowWidth, windowHeight-(windowHeight/5))
    }
    rPositions = listMat(width,height)
    snake.colide = true
    
}

function keyPressed(){
    if(key.includes('Arrow')){
        snake.changeDirection(key.replace('Arrow','').toUpperCase())
    }
}

function arrowButtons(directionMove){
    snake.changeDirection(directionMove)
}

function draw(){
    clear()
    background(0,0,0)
    if(!snake.colide){
        run(snake,fruit,snakeEat)
    }
}