// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",member);
  
function member(){
  event.preventDefault();

var Arr=JSON.parse(localStorage.getItem("schedule"))||[];

var Obj={
  matchNum: masaiForm.matchNum.value,
  teamA:masaiForm.teamA.value,
  teamB:masaiForm.teamB.value,
  date:masaiForm.date.value,
  venue:masaiForm.venue.value,
};
Arr.push(Obj);
localStorage.setItem("schedule",JSON.stringify(Arr));


}