document.getElementById("out-primary-button").addEventListener('click' , function(event){
event. preventDefault();
const cashOutAmount = document.getElementById("cashout-amount").value;
const cashOutNumber= parseFloat(cashOutAmount);
const pinNumber=document.getElementById("out-pin-number").value;
if(pinNumber == 123) {
 const amount=document.getElementById("amount").innerText;
 const totalAmount = parseFloat(amount);
 const newAmount = totalAmount - cashOutNumber;
 document.getElementById("amount").innerText= newAmount;
}
else{
    alert ('Give Valid Pin Number')
}
})