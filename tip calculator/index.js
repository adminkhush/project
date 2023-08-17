const btnE1=document.getElementById("btnCalculate");
const billE1=document.getElementById("rupee");
const tipE1=document.getElementById("tip");
const totalE1=document.getElementById("total");

function calculateTotal (){

const billValue= billE1.value;
const tipValue= tipE1.value;
const totalValue= billE1.value*(1+tipE1.value/100);
totalE1.innerText=totalValue.toFixed(2);
}
btnE1.addEventListener("click",calculateTotal);