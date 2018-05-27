var numSquares = 6
var colors = generateRandomColors(numSquares)
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor
var msgDisplay = document.getElementById("msg")
var h1 = document.querySelector("h1")
var newColor = document.getElementById("newColor")
var easy = document.getElementById("easy")
var hard = document.getElementById("hard")
var mode = document.querySelectorAll(".mode")

for(var i =0; i<mode.length; i++){
    mode[i].addEventListener("click", function(){
    mode[0].classList.remove("selected")
    mode[1].classList.remove("selected")
    this.classList.add("selected")
    this.textContent === "Easy" ? easyPlay() : hardPlay()
})
}


newColor.addEventListener("click",function(){
    restart()
})


function easyPlay(){
    numSquares = 3
    restart()
    for(var i = 0; i< squares.length; i++){
      if(colors[i]){
        squares[i].style.background = colors[i]
      }
         else {
            squares[i].style.display = "none"
         }     
        }
        play()
}


function hardPlay(){
    numSquares = 6
    restart()
    for(var i = 0; i< squares.length; i++){
      
            squares[i].style.background = colors[i]
            squares[i].style.display = "block"
        }
    play()
}

    
function changeColors(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}


function pickColor(){
 var random =  Math.floor(Math.random() * colors.length)
 return colors[random];
}


function generateRandomColors(num){
var arr = []
for(var i = 0; i< num; i++){
    arr.push(randomColor())

}
return arr
}


function randomColor(){
 var r = Math.floor(Math.random() * 256)
 var g = Math.floor(Math.random() * 256)
 var b = Math.floor(Math.random() * 256)
 return "rgb(" + r + ", " + g + ", "+ b + ")"
}
function play(){
    h1.style.backgroundColor = "steelblue"
    newColor.textContent = "New Color"
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor 
            if(clickedColor === pickedColor){
               msgDisplay.textContent = "correct" 
               changeColors(clickedColor)
               h1.style.backgroundColor = clickedColor
               newColor.textContent = "Play Again"
            }  
            else{
               this.style.backgroundColor = "#232323";
               msgDisplay.textContent = "Try Again"
            }
           })
       }}
       
      
       function restart(){
        colors = generateRandomColors(numSquares)
        pickedColor = pickColor();
       colorDisplay.textContent = pickedColor
       for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
        h1.style.backgroundColor = "steelblue"
       msgDisplay.textContent = ""
       newColor.textContent = "New colors ?"
       }
      


