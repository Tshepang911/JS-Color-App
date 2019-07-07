// variables needed to target the button and the body
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
// An array of background colors to be used
const colors = ['yellow', 'red', 'green', 'blue', 'black'];
// Add event usinf=g the variables above
colorBtn.addEventListener('click',changeColor);
// make a function that will change the colors
function changeColor(){
    // how we are going to change the colors
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor= colors[random];
    // bodyBcg.style.backgroundColor = colors[0];
}
                // Programming process 
// steps to follow to design a program that changes the background's color 
// variables needed to target the button and the body
// An array of background colors to be used
// listen or Add event listener using the variables above
// make a function that will change the colors
 // how we are going to change the colors
//  we used the CSS style property on the variable
 // bodyBcg.style.backgroundColor = colors[0];