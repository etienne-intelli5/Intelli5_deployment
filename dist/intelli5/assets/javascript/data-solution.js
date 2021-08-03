$(function(){
  setInterval(function(){ FlashingLights(); ChangeNumber(); }, 1500);
});

function FlashingLights(){

  const green1 = document.getElementById("green1");
  const green2 = document.getElementById("green2");
  const green3 = document.getElementById("green3");
  const red1 = document.getElementById("red1");
  const red2 = document.getElementById("red2");
  const red3 = document.getElementById("red3");

  const greenColors = ["rgb(57, 233, 57)", "black", "rgb(57, 233, 57)"];
  const redColors = ["red", "black", "black", "black", "red", "black"];

  let greenMax = 4;
  let redMax = 7;
  let g1;
  let g2;
  let g3;
  let r1;
  let r2;
  let r3;

    g1 = Math.floor(Math.random() * greenMax);
    g2 = Math.floor(Math.random() * greenMax);
    g3 = Math.floor(Math.random() * greenMax);
    r1 = Math.floor(Math.random() * redMax);
    r2 = Math.floor(Math.random() * redMax);
    r3 = Math.floor(Math.random() * redMax);

    green1.style.backgroundColor = greenColors[g1];
    red1.style.backgroundColor = redColors[r1];
    green2.style.backgroundColor = greenColors[g2];
    red2.style.backgroundColor = redColors[r2];
    green3.style.backgroundColor = greenColors[g3];
    red3.style.backgroundColor = redColors[r3];
}

function ChangeNumber(){
  const chgNum = document.getElementById("number");

  let nMax = 2;
  let n1;
  let n2;
  let n3;
  let n4;

  n1 = Math.floor(Math.random() * nMax);
  n2 = Math.floor(Math.random() * nMax);
  n3 = Math.floor(Math.random() * nMax);
  n4 = Math.floor(Math.random() * nMax);

  chgNum.innerHTML = n1 + "" + n2 + "" + n3 + "" + n4;
}