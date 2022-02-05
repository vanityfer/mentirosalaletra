function preload() {
  inconsolata = loadFont('assets/Inconsolata.ttf');
}

var s1 = function( sketch ) {
  sketch.setup = function() {
    
   
    let canvas1 = sketch.createCanvas(sketch.windowWidth/3, sketch.windowHeight/3);
    canvas1.position(sketch.windowWidth/3,0);
    inconsolata = sketch.loadFont('assets/Inconsolata.ttf');
    sketch.textFont(inconsolata);
    sketch.textSize(sketch.width / 10);
   // sketch.textAlign(sketch.right, sketch.right);
      
   let stringDict = 	sketch.createStringDict({});
   stringDict.set('suerte', 'muerte');
   stringDict.set('falta', 'fatal');
   stringDict.set('rival', 'viral');
   stringDict.set('singulares', 'sin lugares');
   stringDict.set('sectores', 'secretos');
   stringDict.set('rutina', 'ru ina');
   stringDict.set('rostro', 'o tro');
   stringDict.set('desanuda', 'des nuda');
   stringDict.set('miente', 'm ente');
   stringDict.set('infierno', 'infier o');
   stringDict.set('desierto', 'des e  o');
   
   

  
   let palabras = ["suerte", "falta", "rival", "singulares", "sectores", "rutina", "rostro", "desanuda", "miente", "infierno", "desierto"];
   palabra = sketch.random(palabras);
   mentirosa = stringDict.get(palabra)
  
  }
  
  sketch.draw = function() {
    //for canvas 1
    
    sketch.fill(0,0,0,0);
   sketch.background(0,0,0,0);  
   
   sketch.rectMode(sketch.CENTER);
   sketch.translate(sketch.width/8, 100);
   sketch.translate(p5.Vector.fromAngle(sketch.millis() / 1000, 40));
    
    if (sketch.mouseY > sketch.windowHeight/2){
        sketch.text(mentirosa, 50,50);
        
    } else {
        sketch.text(palabra, 50,50);
    }

      
  }
  sketch.mouseClicked = function () {
    new p5(s1);
    
    }
   
  
};


// create a new instance of p5 and pass in the function for sketch 1
new p5(s1);

var s2 = function( sketch2 ) {
  
   sketch2.setup = function() {
    let canvas2 = sketch2.createCanvas(sketch2.windowWidth/3, sketch2.windowHeight/3, sketch2.WEBGL);
    canvas2.position(-50,25);
    src = 'assets/images/' + Math.floor( Math.random() * 20 ) + ".png";
    img = sketch2.loadImage(src);
    theta = 0;
  }
  sketch2.draw = function() {
    //for canvas 2
    
    
    sketch2.translate(0, 0, 0);
    sketch2.push();
    sketch2.rotateZ(theta * 0.1);
    sketch2.rotateX(theta * 0.1);
    sketch2.rotateY(theta * 0.1);
    
    sketch2.texture(img);
    sketch2.box(100, 100, 100);
    sketch2.pop();
    theta += 0.05;
  
  }
  sketch2.mouseClicked = function () {
    new p5(s2);
    
    }
  
  
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s2);

var s3 = function( sketch ) {
  sketch.setup = function() {
    let canvas3 = sketch.createCanvas(sketch.windowWidth/3, sketch.windowHeight/3);
    canvas3.position(sketch.windowWidth/3,sketch.windowHeight/3);
    inconsolata = sketch.loadFont('assets/Inconsolata.ttf');
    sketch.textFont(inconsolata);
    sketch.textSize(sketch.width /10);
    sketch.textAlign(sketch.right, sketch.right);
      
   let stringDict = 	sketch.createStringDict({});
   stringDict.set('suerte', 'muerte');
   stringDict.set('falta', 'fatal');
   stringDict.set('rival', 'viral');
   stringDict.set('singulares', 'sin lugares');
   stringDict.set('sectores', 'secretos');
   stringDict.set('rutina', 'ru ina');
   stringDict.set('rostro', ' o tro');
   stringDict.set('desanuda', 'des nuda');
   stringDict.set('miente', 'm ente');
   stringDict.set('infierno', 'infier o');
   stringDict.set('desierto', 'des e  o');

   
   let palabras = ["suerte", "falta", "rival", "singulares", "sectores", "rutina", "rostro", "desanuda", "miente", "infierno", "desierto"];
  
   palabra = sketch.random(palabras);
   mentirosa = stringDict.get(palabra)
  
  }
  
  sketch.draw = function() {
    //for canvas 1
    sketch.background(0,0,0);
    sketch.fill('white');
    
   
   
   sketch.rectMode(sketch.CENTER);
   sketch.translate(sketch.width / 6, 75);
   sketch.translate(p5.Vector.fromAngle(sketch.millis() / 1000, 40));
    
   if (window.mouseY > window.windowHeight/2){
        sketch.text(mentirosa, 50,50);
        
    } else {
        sketch.text(palabra, 50,50);
    }

    

      
  }
  sketch.mouseClicked = function () {
    new p5(s3);
    
    }
  
};


// create a new instance of p5 and pass in the function for sketch 1
new p5(s3);

var s4 = function( sketch ) {

  sketch.setup = function() {
   let canvas4 = sketch.createCanvas(sketch.windowWidth/3, sketch.windowHeight/3, sketch.WEBGL);
   canvas4.position(sketch.windowWidth-sketch.windowWidth/3,sketch.windowHeight-sketch.windowWidth/3+50);
   numero = Math.floor( Math.random() * 20 )
   if (numero>20){
     numero = 0;
   } else {
     numero = numero+2
   }
   src1 = 'assets/images/' + numero + ".png";
   img1 = sketch.loadImage(src1);
   theta = 0;
 }
 sketch.draw = function() {
   //for canvas 2
   
   
   sketch.translate(0, 0, 0);
   sketch.push();
   sketch.rotateZ(theta * 0.1);
   sketch.rotateX(theta * 0.1);
   sketch.rotateY(theta * 0.1);
   
   sketch.texture(img1);
   sketch.box(100, 100, 100);
   sketch.pop();
   theta += 0.05;
 
 }

 
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s4);


var s5 = function( sketch ) {

  sketch.setup = function() {
   let canvas5 = sketch.createCanvas(sketch.windowWidth/3, sketch.windowHeight/3, sketch.WEBGL);
   canvas5.position(100,sketch.windowHeight-(sketch.windowHeight/3));
   numero = Math.floor( Math.random() * 20 )
   if (numero>20){
     numero = 0;
   } else {
     numero = numero+2
   }
   src2 = 'assets/images/' + numero + ".png";
   img2 = sketch.loadImage(src1);
   theta = 0;
 }
 sketch.draw = function() {
   //for canvas 2
   
   
   sketch.translate(0, 0, 0);
   sketch.push();
   sketch.rotateZ(theta * 0.1);
   sketch.rotateX(theta * 0.1);
   sketch.rotateY(theta * 0.1);
   
   sketch.texture(img2);
   sketch.box(70, 70, 70);
   sketch.pop();
   theta += 0.05;
 
 }

 
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s5);


// 
var s5 = function( sketch ) {

  sketch.setup = function() {
   let canvas5 = sketch.createCanvas(sketch.windowWidth/3, sketch.windowHeight/3, sketch.WEBGL);
   canvas5.position(100,sketch.windowHeight-(sketch.windowHeight/3));
   numero = Math.floor( Math.random() * 20 )
   if (numero>20){
     numero = 0;
   } else {
     numero = numero+2
   }
   src2 = 'assets/images/' + numero + ".png";
   img2 = sketch.loadImage(src1);
   theta = 0;
 }
 sketch.draw = function() {
   //for canvas 2
   
   
   sketch.translate(0, 0, 0);
   sketch.push();
   sketch.rotateZ(theta * 0.1);
   sketch.rotateX(theta * 0.1);
   sketch.rotateY(theta * 0.1);
   
   sketch.texture(img2);
   sketch.box(50, 50, 50);
   sketch.pop();
   theta += 0.05;
 
 }

 
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s5);




var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})





//



function setup() {

  let hc= loadImage('assets/images/daga.jpg');
  createCanvas(windowWidth, windowHeight);
  hc = select("#myCanvas")
  hc.hide()
  
  pg = createGraphics(100,100);
}

function draw() {
  let  hc= loadImage('assets/images/daga.jpg');
 
  if(frameCount%30==0)print(frameRate())
  pg.image(hc, 0, 0);
  pg.loadPixels()
  d = pg.pixelDensity()
  noStroke()
  for (let i = 0; i < 200; i++) {
    let x = int(random(width));
    let y = int(random(height));
    let id = 4 * d * (x + y * width * d)
    fill(pg.pixels[id+0],pg.pixels[id+1],pg.pixels[id+2])
    //fill(pg.get(x, y))
    ellipse(x, y, 5);
    if (frameCount == 1100){
      window.location.reload();
    }
  }
}


