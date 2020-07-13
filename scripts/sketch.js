function listMat(w,h){
    let list = []
    let wid = []
    let hei = []
    for(let index = 30; index<w;index += 30){
        wid.push(index)
    }
    for(let index = 30; index<h;index += 30){
        hei.push(index)
    }

    list.push(wid,hei)
    return list
}

function startGame(){
    snake = new Snake(rPositions)
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
    backgroundMusic.volume(.2)
    backgroundMusic.loop()

    snakeEat = createAudio('../assets/audios/snake/eat.wav')

    snake = new Snake(rPositions)

}

function setup(){
    console.log('Setup Running')
    if(windowWidth>1024){
        frameRate(10)
        createCanvas(windowWidth, windowHeight)
    }else{
        frameRate(8)
        createCanvas(windowWidth, windowHeight-(windowHeight*0.3))
    }
    rPositions = listMat(width,height)
    snake.colide = true
    console.log('Setup Finish')
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