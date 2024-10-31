window.onload = function(){
    let moneyValue = document.querySelector(".moneyValue");
    let foodValue = document.querySelector(".foodValue");
    let popValue = document.querySelector(".popValue");
    let devValue = document.querySelector(".devValue");

    let moneyBtn = document.querySelector(".moneyBtn");
    let foodBtn = document.querySelector(".foodBtn")
    let popBtn = document.querySelector(".popBtn");
    let devBtn = document.querySelector(".devBtn");

    let goldUpgradeBtn = document.querySelector(".goldUpgrade");
    let foodUpgradeBtn = document.querySelector(".foodUpgrade");
    let popUpgradeBtn = document.querySelector(".popUpgrade");
    let devUpgradeBtn = document.querySelector(".devUpgrade");

    let moneyCount = 10;
    let foodCount = 0;
    let popCount = 0;
    let devCount = 0;

    let foodSellVal = 10;
    let foodBuyVal = 9;

    let foodBuyQty = 10;
    let foodSellQty = 9;

    let popIncVal = 1;
    let foodConsumeVal = 10;
    
    let devIncVal = 1;
    let goldSpendVal = 10;

    moneyValue.innerHTML = moneyCount;

    moneyBtn.addEventListener("click", increasemoneyValue);

    foodBtn.addEventListener("click", increasefoodValue)
    
    popBtn.addEventListener("click", increasepopValue);

    devBtn.addEventListener("click", increasedevValue);

    function increasemoneyValue () {
        if(foodCount - 9 > 0){
        moneyCount += foodSellVal;
        moneyValue.innerHTML = moneyCount;
        foodCount -= foodSellQty;
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food to sell!")}
    }

    function increasefoodValue () {
        if(moneyCount - 9 > 0){
        foodCount += foodBuyQty;
        foodValue.innerHTML = foodCount;
        moneyCount -= foodBuyVal;
        moneyValue.innerHTML = moneyCount;}
        else{alert("Not enough gold to buy food!")}
    }

    function increasepopValue (){
        if(foodCount - 10 >= 0){
        popCount += popIncVal;
        popValue.innerHTML = popCount;
        foodCount -= foodConsumeVal;
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food for the people!")}
    }

    function increasedevValue (){
        if(moneyCount - 10 >= 0){
        devCount += devIncVal;
        devValue.innerHTML = devCount;
        moneyCount -= goldSpendVal;
        moneyValue.innerHTML = moneyCount;}
        else(alert("Not enough gold to increase development!"))
    }

    goldUpgradeBtn.addEventListener("click", activateGoldUpgrade);

    foodUpgradeBtn.addEventListener("click", activateFoodUpgrade);

    popUpgradeBtn.addEventListener("click", activatePopUpgrade);

    devUpgradeBtn.addEventListener("click", activateDevUpgrade);

    function activateGoldUpgrade () {
        alert("gold upgrade")
    }

    function activateFoodUpgrade () {
        alert("food upgrade")
    }

    function activatePopUpgrade () {
        alert("pop upgrade")
    }

    function activateDevUpgrade () {
        alert("dev upgrade")
    }




   

    

}