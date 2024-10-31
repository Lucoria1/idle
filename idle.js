window.onload = function(){
    let moneyValue = document.querySelector(".moneyValue");
    let foodValue = document.querySelector(".foodValue");
    let popValue = document.querySelector(".popValue");
    let devValue = document.querySelector(".devValue");

    let moneyBtn = document.querySelector(".moneyBtn");
    let foodBtn = document.querySelector(".foodBtn")
    let popBtn = document.querySelector(".popBtn");
    let devBtn = document.querySelector(".devBtn");

    let goldUpgradeValue = document.querySelector(".goldUpgradeValue");
    let foodUpgradeValue = document.querySelector(".foodUpgradeValue");
    let popUpgradeValue = document.querySelector(".popUpgradeValue");
    let devUpgradeValue = document.querySelector(".devUpgradeValue");

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
        }
        else {alert("Not enough gold!")};
    }

    function activateFoodUpgrade () {
        if(moneyCount - foodUpgradeCost >= 0) {
            moneyCount -= foodUpgradeCost;
            foodSellVal *= 1.5;
            foodUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            foodUpgradeValue.innerHTML = foodUpgradeCost;
        }
        else {alert("Not enough gold!")};
    }

    function activateGoldUpgrade () {
        if(moneyCount - goldUpgradeCost >= 0) {
            moneyCount -= goldUpgradeCost;
            foodSellVal *= 1.5;
            goldUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            goldUpgradeValue.innerHTML = goldUpgradeCost;
        }
        else {alert("Not enough gold!")};
    }

    function activateGoldUpgrade () {
        if(moneyCount - goldUpgradeCost >= 0) {
            moneyCount -= goldUpgradeCost;
            foodBuyQty *= 1.5;
            goldUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            goldUpgradeValue.innerHTML = goldUpgradeCost;
        }
        else {alert("Not enough gold!")};
    }


    function activatePopUpgrade () {
        alert("Not enough gold!")
    }

    function activateDevUpgrade () {
        alert("Not enough gold!")
    }




   

    

}