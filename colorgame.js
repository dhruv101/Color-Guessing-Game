var numSquares=6;
var colors=[];
var pickedcolor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colordisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
    // setup mode buttons listeners
    setupModeButtons();
    // setup squares listeners
    setupSquares();
    // setup game to be played
    reset();
}

//setup reset button listener  
resetButton.addEventListener("click",function(){
    reset();
 });

function setupModeButtons(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? numSquares=3 : numSquares=6;
            reset();
        })
    };
}

function setupSquares(){
    for(var i=0;i<squares.length;i++){
        // adding click listeners to squares
        squares[i].addEventListener("click",function(){
            // grab color of clicked square
            var clickedColor=this.style.backgroundColor;
            // comparing clicked color with picked color
            if(clickedColor===pickedcolor){
              message.textContent="Correct!";
              message.style.color="#41ff2b";
              changeColors(clickedColor);
              h1.style.backgroundColor=pickedcolor;
              resetButton.textContent="Play Again?"
            }
            else{
                this.style.backgroundColor="#232323"; 
                message.textContent="Try Again";
                message.style.color="red";
            }
        });
    }
}

function reset(){
    // generate new random colors
    colors=generateRandomColors(numSquares);
    // pick a new random color from array
    pickedcolor=pickColor();
    // change colorDisplay to match picked color  
    colorDisplay.textContent=pickedcolor;   
    // change colors of squares
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }  
    }
    //change background of h1 to orignal color
    h1.style.backgroundColor="steelblue";
    // change button text content
    resetButton.textContent="New Colors";
    message.textContent="";
}

function changeColors(color){
    // loop through all the squares
    for(var i=0;i<squares.length;i++){
        // change each color to match each color
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr=[];
    // add num random colors to array
    for(var i=0;i<num;i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}
