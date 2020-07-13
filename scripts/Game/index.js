function run(snake,fruit,audio) {
    
    snake.show()
    snake.move()
    fruit.show()
    snake.addPart(fruit.colision(snake.positions,rPositions),audio)
    snake.colision()
}