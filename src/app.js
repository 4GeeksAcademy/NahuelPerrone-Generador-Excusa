import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {


  let generadorExcusa = () => {

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let whoRandom = who[random(who)];

    let action = ['ate', 'peed', 'crushed', 'broke'];
    let actionRandom = action[random(action)];

    let what = ['my homework', 'my phone', 'the car'];
    let whatRandom = what[random(what)];

    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let whenRandom = when[random(when)];

    let generadorExcusa = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;

    return generadorExcusa;
  }

  function random(options) {
    return [Math.floor(Math.random() * options.length)];
  }

  document.getElementById("excuse").innerHTML = generadorExcusa()
}


