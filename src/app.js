import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() 

   {
  let GeneradorExcusa = () => 
    {
       let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
       let who2 = who [Math.floor(Math.random()*(who.length))];

       let action = ['ate', 'peed', 'crushed', 'broke'];
       let action2 = action[Math.floor(Math.random()*(action.length))];

       let what = ['my homework', 'my phone', 'the car'];
       let what2 = what [Math.floor(Math.random()*(what.length))];

       let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
       let when2 = when [Math.floor(Math.random()*(when.length))];

       let GeneradorExcusa = `${who2} ${action2} ${what2} ${when2}`;
       return GeneradorExcusa

  }

document.getElementById("excuse").innerHTML = GeneradorExcusa()
}

   
 