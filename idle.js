window.onload = function(){
    let moneyValue = document.querySelector(".moneyValue");
    let foodValue = document.querySelector(".foodValue");
    let popValue = document.querySelector(".popValue");
    let devValue = document.querySelector(".devValue");

    let moneyBtn = document.querySelector(".moneyBtn");
    let foodBtn = document.querySelector(".foodBtn")
    let popBtn = document.querySelector(".popBtn");
    let devBtn = document.querySelector(".devBtn");

    let exchangeFoodValue = document.querySelector(".exchangeFoodValue");
    let exchangeMoneyValue = document.querySelector(".exchangeMoneyValue");
    let exchangePopValue = document.querySelector(".exchangePopValue");
    let exchangeDevValue = document.querySelector(".exchangeDevValue");

    let goldUpgradeValue = document.querySelector(".goldUpgradeValue");
    let foodUpgradeValue = document.querySelector(".foodUpgradeValue");
    let popUpgradeValue = document.querySelector(".popUpgradeValue");
    let devUpgradeValue = document.querySelector(".devUpgradeValue");

    let goldUpgradeBtn = document.querySelector(".goldUpgrade");
    let foodUpgradeBtn = document.querySelector(".foodUpgrade");
    let popUpgradeBtn = document.querySelector(".popUpgrade");
    let devUpgradeBtn = document.querySelector(".devUpgrade");

    let moneyCount = 100;
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

    exchangeMoneyValue.innerHTML = `Sell ${foodSellQty} food for ${foodSellVal} gold`;
    exchangeFoodValue.innerHTML = `Buy ${foodBuyQty} food for ${foodBuyVal} gold`;
    exchangePopValue.innerHTML = `Increase Population by ${popIncVal} for ${foodConsumeVal} food`;
    exchangeDevValue.innerHTML = `Increase Development by ${devIncVal} for ${goldSpendVal} gold`;

    moneyBtn.addEventListener("click", increasemoneyValue);

    foodBtn.addEventListener("click", increasefoodValue);
    
    popBtn.addEventListener("click", increasepopValue);

    devBtn.addEventListener("click", increasedevValue);

    function increasemoneyValue () {
        if(foodCount - foodSellQty >= 0){
        moneyCount += foodSellVal;
        moneyValue.innerHTML = moneyCount;
        foodCount -= foodSellQty;
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food to sell!")}
    }

    function increasefoodValue () {
        if(moneyCount - foodBuyVal >= 0){
        foodCount += foodBuyQty;
        foodValue.innerHTML = foodCount;
        moneyCount -= foodBuyVal;
        moneyValue.innerHTML = moneyCount;}
        else{alert("Not enough gold to buy food!")}
    }

    function increasepopValue (){
        if(foodCount - foodConsumeVal >= 0){
        popCount += popIncVal;
        popValue.innerHTML = popCount;
        foodCount -= foodConsumeVal;
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food for the people!")}
    }

    function increasedevValue (){
        if(moneyCount - goldSpendVal >= 0){
        devCount += devIncVal;
        devValue.innerHTML = devCount;
        moneyCount -= goldSpendVal;
        moneyValue.innerHTML = moneyCount;}
        else{alert("Not enough gold to increase development!")};
    }

    let goldUpgradeCost = 50;
    goldUpgradeValue.innerHTML = goldUpgradeCost;

    let foodUpgradeCost = 50;
    foodUpgradeValue.innerHTML = foodUpgradeCost;

    let popUpgradeCost = 50;
    popUpgradeValue.innerHTML = popUpgradeCost;

    let devUpgradeCost = 50;
    devUpgradeValue.innerHTML = devUpgradeCost;

    goldUpgradeBtn.addEventListener("click", activateGoldUpgrade);

    foodUpgradeBtn.addEventListener("click", activateFoodUpgrade);

    popUpgradeBtn.addEventListener("click", activatePopUpgrade);

    devUpgradeBtn.addEventListener("click", activateDevUpgrade);

    function activateGoldUpgrade () {
        if(moneyCount - goldUpgradeCost >= 0) {
            moneyCount -= goldUpgradeCost;
            foodSellVal *= 1.5;
            goldUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            goldUpgradeValue.innerHTML = goldUpgradeCost;
            exchangeMoneyValue.innerHTML = `Sell ${foodSellQty} food for ${foodSellVal} gold`;
        }
        else {alert("Not enough gold!")};
    }

    function activateFoodUpgrade () {
        if(moneyCount - foodUpgradeCost >= 0) {
            moneyCount -= foodUpgradeCost;
            foodBuyQty *= 1.5;
            foodUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            foodUpgradeValue.innerHTML = foodUpgradeCost;
            exchangeFoodValue.innerHTML = `Buy ${foodBuyQty} food for ${foodBuyVal} gold`;
        }
        else {alert("Not enough gold!")};
    }

    function activatePopUpgrade () {
        if(moneyCount - popUpgradeCost >= 0) {
            moneyCount -= popUpgradeCost;
            popIncVal *= 1.5;
            popUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            popUpgradeValue.innerHTML = goldUpgradeCost;
            exchangePopValue.innerHTML = `Increase Population by ${popIncVal} for ${foodConsumeVal} food`;        
        }
        else {alert("Not enough gold!")};
    }

    function activateDevUpgrade () {
        if(moneyCount - devUpgradeCost >= 0) {
            moneyCount -= devUpgradeCost;
            devIncVal *= 1.5;
            devUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            devUpgradeValue.innerHTML = goldUpgradeCost;
            exchangeDevValue.innerHTML = `Increase Development by ${devIncVal} for ${goldSpendVal} gold`;
        }
        else {alert("Not enough gold!")};
    }



   

    

}