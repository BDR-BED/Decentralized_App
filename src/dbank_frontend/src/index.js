import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load" , async function(){
  //console.log("Loaded");
  var balance = await dbank_backend.checkBalance();
  document.getElementById("value").innerText = balance.toFixed(2);
})

document.querySelector("form").addEventListener("submit" , async function(event){
   //console.log("Submitted");
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const inputWithDrawlAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  if(document.getElementById("input-amount").value.length != 0){
    await dbank_backend.topUp(inputAmount);
  } 
  if(document.getElementById("withdrawal-amount").value.length != 0){
    await dbank_backend.withDraw(inputWithDrawlAmount);
  }
  
  await dbank_backend.compaund();

  button.setAttribute("disabled" , true);

  var balance = await dbank_backend.checkBalance();
  document.getElementById("value").innerText = balance.toFixed(2);
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value ="";
  button.removeAttribute("disabled");
})