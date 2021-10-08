/*puxa o canvas para o arquivo .js pela ID*/
let canvas = document.getElementById("snake");
/*define a renderização que vai ocorrer no canvas em 2D*/
let context = canvas.getContext("2d");
let box = 32;

/*função que define o canvas (background)*/
function criarBG() {
    /*define cor*/
    context.fillStyle = "lightgreen";
    /*desenha o retângulo do jogo; parâmetros(x, y, altura e largura)*/
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();