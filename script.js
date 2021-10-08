/*puxa o canvas para o arquivo .js pela ID*/
let canvas = document.getElementById("snake");
/*define a renderização que vai ocorrer no canvas em 2D*/
let context = canvas.getContext("2d");
let box = 32;

/*define variável snake como array*/
let snake = [];
/*define posição e tamanho (px) da array snake*/
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

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

criarBG();
criarCobrinha();