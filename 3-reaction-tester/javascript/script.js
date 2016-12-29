//for initial
var start = new Date().getTime();

function getColor(){
    
    //hex values for colors
    var letters = '0123456789ABCDEF';
    var color = '#';
    
    //color is just # + 6 letters
    for (var i = 0; i < 6; i++ ) {
        
        //appends random letter to #
        //16 possible hex values
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    document.getElementById("shape").style.backgroundColor = color;
}

function getShape(){
    
    var containerWidth = document.getElementById("shape-container").offsetWidth;
    var shapeWidth = containerWidth/5;
    var x = (Math.floor(Math.random() * 2) == 0);
    var shape = document.getElementById("shape");
    
    //minimum size 100px then adds between 0px and 1/5th containerSize px
    shapeWidth = Math.floor(Math.random() * shapeWidth) + 100;
    shape.style.width = shapeWidth;
    shape.style.height = shapeWidth;    
    
    //Circle or Square
    if(x){
        shape.style.borderRadius = "50%";
    }else{
        shape.style.borderRadius = "0%";
    }
    
}

function getPosition(){
    
    var shape = document.getElementById("shape");
    var container = document.getElementById("shape-container");
    var top = 0;
    var left = 0;
    
    //calculate offset values
    left = Math.floor(Math.random() * (container.offsetWidth - shape.offsetWidth));
    top = Math.floor(Math.random() * (container.offsetHeight - shape.offsetHeight));

    //give shape offset
    shape.style.top = top + "px";
    shape.style.left = left + "px";
}

function displayShape(){

    //give shape random color
    getColor();
    
    //give shape random size/shape
    getShape();
    
    //position the shape
    getPosition();
    
}



//for initial
displayShape();

document.getElementById("shape").onclick = function(){
    
    var end = new Date().getTime();
    var time = (end - start) / 1000;
    
    document.getElementById("timeTaken").innerHTML = time;
    
    //for all but initial
    start = new Date().getTime();
    displayShape();
    
}