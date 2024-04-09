var buttonList = document.getElementsByClassName('drum');

for (i=0; i < buttonList.length; i++) {
var currentButton = buttonList[i];
currentButton.addEventListener('click',clickHandled)    
} 

function clickHandled () {
    alert ("I got clicked!"); 
}