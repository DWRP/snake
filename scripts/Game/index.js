function run(snake,fruit) {
    
    snake.show()
    snake.move()
    fruit.show()
    snake.addPart(fruit.colision(snake.positions,rPositions))
    snake.colision()
}