//PROJETO BOLINHA FINAL
//Movimentando a bolinha no eixo x e y

let xBolinha = 200;
let yBolinha = 200;

let xVelocidade = 10;
let yVelocidade = 11;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoX();
   verificaColisaoY();
}



//-----função mostra bolinha-----
function mostraBolinha(){
  circle(xBolinha, yBolinha, 15);
  xBolinha += xVelocidade;

}

//-------Função movimenta bolinha-------
function movimentaBolinha(){
//xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}  

//--------Verifica colisao no eixo x-------
function verificaColisaoX(){
if(xBolinha > width || xBolinha < 0) {
   xVelocidade *=-1

    }
  }
//--------Verifica colisao no eixo y-------
function verificaColisaoY(){
if(yBolinha > width || yBolinha < 0) {
   yVelocidade *=-1

    }
  }


//------Funçao clik---------
function mousePressed(){
  xVelocidade += -1;
  console .log('mudando e velocidade', xVelocidade);
}
