var tela =1; 
//   tela 1: menu;
//   tela 2: jogo
//   tela 3: instruções;
//   tela 4: créditos;

var x =100; 
var xreturn = 260;
var yreturn = 356;
var alt     = 31;
var larg    = 130;
var yr1     = 100;      
var yr2     = 200;   
var yr3     = 300;   
var altura  = 66;
var largura = 200;

var imageEducador;
var imageProgramador;

function telaMenu(){
   
  textSize(30);
  strokeWeight(05);
  textStyle(BOLDITALIC);
  text("VETORMATICANDO",66,60);
  stroke(20);
  fill(50);
    
    if(mouseX>x && mouseX< x+largura && mouseY>yr1 && mouseY<yr1+ altura){
          stroke(20);
          fill(245,228,26);
          rect(x,yr1,largura,altura,15);
          if(mouseIsPressed){
            tela=2;
          }
    }
          fill(244,243,242);
          textSize(20);
          text("JOGAR",156,139);

    if(mouseX>x && mouseX< x+largura && mouseY>yr2 && mouseY<yr2+ altura){
          stroke(20);
          fill(245,228,26);
          rect(x,yr2,largura,altura,15);
          if(mouseIsPressed){
             tela=3;
          }
    }
          fill(244,243,242);
          textSize(20);
          text("INSTRUÇÕES",130,239);
    
    if(mouseX>x && mouseX< x+largura && mouseY>yr3 && mouseY<yr3+ altura){ 
          stroke(20);
          fill(245,228,26);
          rect(x,yr3,largura,altura,15);
          if(mouseIsPressed){
             tela=4;
          }
      
    }
          fill(244,243,242);
          textSize(20);
          text("CRÉDITOS",140,339);
  }
 
function telaJogar(){
  background(23,216,196);
  textSize(26);
  textStyle(BOLDITALIC);
  fill(10);
  text("~fase 1~",100,60);
}

function telaInstrucoes(){
  background(23,216,196);
  textSize(26);
  textStyle(BOLDITALIC);
  text("~INSTRUÇÕES~",100,60); 
  textSize(20);
  text("Tente resolver cada fase do jogo acertando as operações aritméticas envolvendo noçoes básicas com vetores.",25,120,330); 
  textSize(20);
  text("OBS: Em cada questão clic em apenas 1 das 4 altenativas.",25,220,330);
  
    if(mouseX>xreturn && mouseX<xreturn+larg && mouseY>yreturn && mouseY<yreturn+alt){
          stroke(36);
          fill(245,228,26);
          rect(xreturn,yreturn,larg,alt,15);
          if(mouseIsPressed){
            tela=1;
          }
    }
          fill(244,243,242);
          textSize(18);
          text("volta ao menu",260,380);
  
} 

function preload(){
  imagemEducador = loadImage("foto_educ.PNG");
  imagemProgramador = loadImage("gostoso.PNG");
}
         
function telaCreditos(){
    
  background(23,216,196);
  textSize(26);
  textStyle(BOLDITALIC);
  text("~Créditos~",130,40); 
  textSize(19);
  text("Alison dos Anjos",150,90);
  textSize(16);
  text("função: Educador",150,109);
  textSize(12);
  text("Licenciando em Física pela Universidade Federal do Rio Grande do Norte(UFRN),   especialização em educação...",136,129,249);
  textSize(19);
  text("Thiago Barbosa",150,200);
  textSize(16);
  text("função: Programador",150,220);
  textSize(12);
  text("Estudante do curso Bacharelado de Ciências e Tecnologia pela Universidade Federal do Rio Grande do Norte(UFRN)",136,240,249);
  
  
    if(mouseX>xreturn && mouseX<xreturn+larg && mouseY>yreturn && mouseY<yreturn+alt){
          stroke(36);
          fill(245,228,26);
          rect(xreturn,yreturn,larg,alt,15);
          if(mouseIsPressed){
            tela=1;
          }
    }
          fill(244,243,242);
          textSize(18);
          text("volta ao menu",260,380);
   
   image(imagemEducador,23,70,100,100);
   image(imagemProgramador,23,177,100,100);
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(23,216,196);
       
  if(tela==1){
     telaMenu()
  }
  else if(tela==2){
    telaJogar()
  }
  else if(tela==3){
    telaInstrucoes();
  }
  else if(tela==4){
    telaCreditos();
  } 
}
