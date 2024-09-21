// when cashout button will clicked the hidden property or class will be removed for cashout-form and add hidden class for add-money-form 

document.getElementById("cashout-button").addEventListener('click', function(){
    document.getElementById("cashout-form").classList.remove("hidden")
    document.getElementById("addmoney-form").classList.add("hidden")

// when add money button will be clicked the hidden property will be removed for add-money-form and hidden property will be add for cashout-form.

    document.getElementById("addmoney-button").addEventListener('click' , function(){
        document.getElementById("addmoney-form").classlist.remove("hidden");
        document.getElementById("cashout-form").classlist.add("hidden")
    })
})