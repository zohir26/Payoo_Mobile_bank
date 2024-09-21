document.getElementById("primary-button").addEventListener('click', function(event) {
    event.preventDefault();
    const addAmount= document.getElementById("add-amount").value;
    const amountNumber= parseFloat(addAmount);
    //input amount ti fraction soho number e convert hoye jabe
    const pinNumber= document.getElementById("pin-number").value;
    if(pinNumber == 123) {
        const amount=document.getElementById("amount").innerText
        // jehetu amra div er value ber korbo tai innertext use korechi. input tag hole .value use kortam
        const balanceNumber= parseFloat(amount);
        //Total amount number e convert holo
        const newBalance= amountNumber + balanceNumber;
        // ei new balance ta ke inner value hisebe set korbo total amount e 
        document.getElementById ( "amount").innerText = newBalance;
    }
    else{
        alert ('Please use valid Pin Number')
    }
})
