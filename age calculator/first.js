const btnE1 =document.getElementById("btn");
const birthdayE1 =document.getElementById("birthday");

function calculateAge(){
    const birthdayValue =birthdayE1.Value;
if(birthdayValue===""){
    alert("please enter your birthday date");
}

}
btnE1.addEventListener("click",calculateAge);