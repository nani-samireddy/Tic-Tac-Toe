
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

let finished=false;

let count = 0;

let winDisplay = document.getElementById('winDisplay');
function change(element){
  if (!finished) {
    if (!element.innerText) {
      if(count%2==0){
       element.innerText = 'X';
       
      }
      else{
       element.innerText = 'O';
      }
      count++;
      check();
   }
  }
}


function check(){
 if(!finished){
  if (((one.innerText == 'X')&&(two.innerText=='X')&&(three.innerText=='X'))||((four.innerText=='X')&&(five.innerText=='X')&&(six.innerText=='X'))||((seven.innerText=='X')&&(eight.innerText=='X')&&(nine.innerText=='X'))||((one.innerText=='X')&&(five.innerText=='X')&&(nine.innerText=='X'))||((three.innerText=='X')&&(five.innerText=='X')&&(seven.innerText=='X'))||((one.innerText=='X')&&(four.innerText=='X')&&(seven.innerText=='X'))||((two.innerText=='X')&&(five.innerText=='X')&&(eight.innerText=='X'))||((three.innerText=='X')&&(six.innerText=='X')&&(nine.innerText=='X'))) {
    winDisplay.innerText = 'X won the match';
    finished = true;
  }
  if (((one.innerText == 'O')&&(two.innerText=='O')&&(three.innerText=='O'))||((four.innerText=='O')&&(five.innerText=='O')&&(six.innerText=='O'))||((seven.innerText=='O')&&(eight.innerText=='O')&&(nine.innerText=='O'))||((one.innerText=='O')&&(five.innerText=='O')&&(nine.innerText=='O'))||((three.innerText=='O')&&(five.innerText=='O')&&(seven.innerText=='O'))||((one.innerText=='O')&&(four.innerText=='O')&&(seven.innerText=='O'))||((two.innerText=='O')&&(five.innerText=='O')&&(eight.innerText=='O'))||((three.innerText=='O')&&(six.innerText=='O')&&(nine.innerText=='O'))) {
    finished = true;
    winDisplay.innerText = 'O won the match';
  }else if (count==9) {
    finished = true;
    winDisplay.innerText = 'Draw';
  }
 }
}