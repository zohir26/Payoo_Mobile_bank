document.getElementById("cashout-button").addEventListener('click', function(){
    document.getElementById("cashout-form").classList.remove("hidden")
    document.getElementById("addmoney-form").classList.add("hidden")

    document.getElementById("addmoney-button").addEventListener('click' , function(){
        document.getElementById("addmoney-form").classlist.remove("hidden");
        document.getElementById("cashout-form").classlist.add("hidden")
    })
})