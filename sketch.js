//let tamanhoTela = [400, 400];
let tamanhoTela = [window.innerWidth, window.innerHeight];
let tamanhoCirculo = 300;
let tamanhoB = 20;
let position = [tamanhoTela[0]/2+100, tamanhoTela[1]/2];
let speedV = 7;
let direction = 0;

//posicao relativa
let positionR = [position[0]-tamanhoTela[0]/2, position[1]-tamanhoTela[1]/2];
let centerR = [tamanhoTela[0]/2-position[0], tamanhoTela[1]/2-position[1]];

function setup() {
  createCanvas(tamanhoTela[0], tamanhoTela[1]);
  direction = random(360);
  angleRadian = direction / 180 * PI;
}

function draw() {
  positionR = [position[0]-tamanhoTela[0]/2, position[1]-tamanhoTela[1]/2];
  centerR = [tamanhoTela[0]/2-position[0], tamanhoTela[1]/2-position[1]];
  background(0);
  circle(tamanhoTela[0]/2, tamanhoTela[1]/2, tamanhoCirculo);
  collision()
  bolinha()
  pode()
  //mudaVelocidade()
}
function pode(){
  //modulo que quer escolher:
  moduloFun = (tamanhoCirculo - 0.2)/2;
  //moduloFun = (tamanhoCirculo * 0.99)/2;
  
  let far = sqrt(positionR[0]*positionR[0] + positionR[1]*positionR[1])
  if(far+tamanhoB/2 >= moduloFun){
    return
  }
  else{
    //equivalente:
    tamanhoCirculo -= 0.2;
    //tamanhoCirculo = tamanhoCirculo * 0.99;
    //outros:
    //speedV = speedV*0.99;
  }
}
function bolinha(){
  circle(position[0], position[1], tamanhoB);
  
  angleRadian = direction / 180 * PI;
  position[0] += cos(angleRadian) * speedV;
  position[1] += sin(angleRadian) * speedV;
}
function collision(){
  if(distance()){
    angleCenter = atan2(centerR[0], centerR[1])
    angleCenter = angleCenter * 180 / PI;

    direction = (2*(-angleCenter-direction))+direction;
    
    while (direction >= 360){
      direction -= 360;
    }
    while (direction <= -360){
      direction += 360;
    }
    tamanhoCirculo += 2;
    //speedV += 1;
    mudaVelocidade()
  }
}
function distance(){
  let far = sqrt(positionR[0]*positionR[0] + positionR[1]*positionR[1])
  if(far+tamanhoB/2 >= tamanhoCirculo/2){
    return true
  }
  else{
    return false
  }
}
let onoff = true;
function mudaVelocidade(){
  if(onoff){
    if(speedV < 30){
      speedV += 0.1;
    }
    if(speedV >= 30){
      onoff = false
    }
  }
  else{
    if(speedV > 1){
      speedV -= 0.1;
    }
    if(speedV <= 1){
      onoff = true
    }
  }
  print(speedV, onoff)
}