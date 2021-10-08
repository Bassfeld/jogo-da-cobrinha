/*puxa o canvas para o arquivo .js pela ID*/
let canvas = document.getElementById("snake");
/*define a renderização que vai ocorrer no canvas em 2D*/
let context = canvas.getContext("2d");
/*variável padrão para tamanho da caixa*/
let box = 32;
/*define variável snake como array*/
let snake = [];
/*define posição e tamanho (px) da array snake*/
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

/*define variável array para função de desenhar comida drawFood*/
let food = {
    /*Math.floor: retira parte flutuante. Math.random: número aleatório*/
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

/*variável que define o sentido padrão de movimento da cobra*/
let direction = "right";


/*função que define o canvas (background)*/
function criarBG() {
    /*define cor*/
    context.fillStyle = "lightgreen";
    /*desenha o retângulo do jogo; parâmetros (posição (x, y), altura, largura)*/
    context.fillRect(0, 0, 16 * box, 16 * box);
}

/*função que cria a cobra através de uma array*/
function criarCobrinha(){
    /*define loop: percorre a extensão da array e adiciona 1 enquanto condição i < largura da cobra for true*/
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        /*preenche o retângulo com o tamanho da cobra: x e y de cada index e tamanho do quadradinho (box)*/
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box)
}

/*capta o toque da tecla (evento de clique) e transmite o respectivo código para a função "update" */
document.addEventListener("keydown", update);

/*37 - esquerda, 38 - cima, 39 - direita, 40- baixo*/
/*função que atualiza o sentido do movimento; código da tecla não deve ser correspondente ao sentido oposto*/
function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    /*define condicional para cobrinha voltar ao início do eixo ao ultrapassar limite do canvas*/
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    /*define condicional para fim de jogo */
    for(i = 1; i < snake.length; i++){
        if(snake[0].x ==  snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over :( recarregue a página para reiniciar o jogo");
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    /*define variáveis ponto de partida da cobrinha*/
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    /*define condicionais do movimento da cobrinha; adiciona ou subtrai o valor de 1 "box" ao eixo da cobra, de acordo com o sentido do seu movimento*/
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    /*define condicionais para aumento da cobrinha e nova comida*/
    if(snakeX != food.x || snakeY != food.y){
        /*retira último index do array "snake"*/
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    } 
    
    /*adiciona uma nova cabeça da cobra*/    
    let newHead = {
        x: snakeX,
        y: snakeY,
    }
    
    snake.unshift(newHead)
}

/*função que atualiza função iniciarJogo a cada 100 ms, dando continuidade ao jogo*/
let jogo = setInterval(iniciarJogo, 100)

