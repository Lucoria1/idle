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
    let qtyUpgradeValue = document.querySelector(".qtyUpgradeValue");

    let foodUpgradeValue = document.querySelector(".foodUpgradeValue");
    let costUpgradeValue = document.querySelector(".costUpgradeValue");

    let popUpgradeValue = document.querySelector(".popUpgradeValue");
    let popQtyUpgradeValue = document.querySelector(".popQtyUpgradeValue")

    let devUpgradeValue = document.querySelector(".devUpgradeValue");
    let devCostUpgradeValue = document.querySelector(".devCostUpgradeValue");

    let goldUpgradeBtn = document.querySelector(".goldUpgrade");
    let qtyUpgradeBtn = document.querySelector(".qtyUpgrade");

    let foodUpgradeBtn = document.querySelector(".foodUpgrade");
    let costUpgradeBtn = document.querySelector(".costUpgrade")

    let popUpgradeBtn = document.querySelector(".popUpgrade");
    let popQtyUpgradeBtn = document.querySelector(".popQtyUpgrade")

    let devUpgradeBtn = document.querySelector(".devUpgrade");
    let devCostUpgradeBtn = document.querySelector(".devCostUpgrade");

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
        moneyCount = Number(moneyCount.toFixed(2));
        moneyValue.innerHTML = moneyCount;
        foodCount -= foodSellQty;
        foodCount = Number(foodCount.toFixed(2));
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food to sell!")}
    }

    function increasefoodValue () {
        if(moneyCount - foodBuyVal >= 0){
        foodCount += foodBuyQty;
        foodCount = Number(foodCount.toFixed(2));
        foodValue.innerHTML = foodCount;
        moneyCount -= foodBuyVal;
        moneyCount = Number(moneyCount.toFixed(2));
        moneyValue.innerHTML = moneyCount;}
        else{alert("Not enough gold to buy food!")}
    }

    function increasepopValue (){
        if(foodCount - foodConsumeVal >= 0){
        popCount += popIncVal;
        popCount = Number(popCount.toFixed(2));
        popValue.innerHTML = popCount;
        foodCount -= foodConsumeVal;
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food for the people!")}
    }

    function increasedevValue (){
        if(moneyCount - goldSpendVal >= 0){
        devCount += devIncVal;
        devCount = Number(devCount.toFixed(2));
        devValue.innerHTML = devCount;
        moneyCount -= goldSpendVal;
        moneyCount = Number(moneyCount.toFixed(2));
        moneyValue.innerHTML = moneyCount;}
        else{alert("Not enough gold to increase development!")};
    }

    let goldUpgradeCost = 50;
    goldUpgradeValue.innerHTML = goldUpgradeCost;
    let qtyUpgradeCost = 50;
    qtyUpgradeValue.innerHTML = qtyUpgradeCost;

    let foodUpgradeCost = 50;
    foodUpgradeValue.innerHTML = foodUpgradeCost;
    let costUpgradeCost = 50;
    costUpgradeValue.innerHTML = costUpgradeCost;

    let popUpgradeCost = 50;
    popUpgradeValue.innerHTML = popUpgradeCost;
    let popQtyUpgradeCost = 50;
    popQtyUpgradeValue.innerHTML = popQtyUpgradeCost

    let devUpgradeCost = 50;
    devUpgradeValue.innerHTML = devUpgradeCost;
    let devCostUpgradeCost = 50;
    devCostUpgradeValue.innerHTML = devCostUpgradeCost;

    goldUpgradeBtn.addEventListener("click", activateGoldUpgrade);
    qtyUpgradeBtn.addEventListener("click", activateQtyUpgrade);

    foodUpgradeBtn.addEventListener("click", activateFoodUpgrade);
    costUpgradeBtn.addEventListener("click", activateCostUpgrade);

    popUpgradeBtn.addEventListener("click", activatePopUpgrade);
    popQtyUpgradeBtn.addEventListener("click", activatePopQtyUpgrade);

    devUpgradeBtn.addEventListener("click", activateDevUpgrade);
    devCostUpgradeBtn.addEventListener("click", activateDevCostUpgrade);

    function activateGoldUpgrade () {
        if(moneyCount - goldUpgradeCost >= 0) {
            moneyCount -= goldUpgradeCost;
            moneyCount = Number(moneyCount.toFixed(2));
            foodSellVal *= 1.5;
            foodSellVal = Number(foodSellVal.toFixed(2));
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
            moneyCount = Number(moneyCount.toFixed(2));
            foodBuyQty *= 1.5;
            foodBuyQty = Number(foodBuyQty.toFixed(2));            
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
            moneyCount = Number(moneyCount.toFixed(2));
            popIncVal *= 1.5;
            popIncVal = Number(popIncVal.toFixed(2));
            popUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            popUpgradeValue.innerHTML = popUpgradeCost;
            exchangePopValue.innerHTML = `Increase Population by ${popIncVal} for ${foodConsumeVal} food`;        
        }
        else {alert("Not enough gold!")};
    }

    function activateDevUpgrade () {
        if(moneyCount - devUpgradeCost >= 0) {
            moneyCount -= devUpgradeCost;
            moneyCount = Number(moneyCount.toFixed(2));
            devIncVal *= 1.5;
            devIncVal = Number(devIncVal.toFixed(2));
            devUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            devUpgradeValue.innerHTML = devUpgradeCost;
            exchangeDevValue.innerHTML = `Increase Development by ${devIncVal} for ${goldSpendVal} gold`;
        }
        else {alert("Not enough gold!")};
    }

    function activateQtyUpgrade () {
        if(moneyCount - qtyUpgradeCost >= 0){
            moneyCount -= qtyUpgradeCost;
            moneyCount = Number(moneyCount.toFixed(2));
            foodSellQty *= 1.5;
            foodSellQty = Number(foodSellQty.toFixed(2));
            qtyUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            qtyUpgradeValue.innerHTML = qtyUpgradeCost;
            exchangeMoneyValue.innerHTML = `Sell ${foodSellQty} food for ${foodSellVal} gold`;
        }
        else {alert("Not Enough Gold!")}

    }

    function activateCostUpgrade () {
        if(moneyCount - costUpgradeCost >= 0 && foodBuyVal !== 0.01){
            moneyCount -= costUpgradeCost;
            moneyCount = Number(moneyCount.toFixed(2));
            foodBuyVal *= 0.5;
            foodBuyVal = Number(foodBuyVal.toFixed(2));
            costUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            costUpgradeValue.innerHTML = costUpgradeCost;
            exchangeFoodValue.innerHTML = `Buy ${foodBuyQty} food for ${foodBuyVal} gold`;
        } else if (moneyCount - costUpgradeCost >=0 && foodBuyVal === 0.01) {
            alert("It can't get any cheaper!")
        }
        else {alert("Not Enough Gold!")}
    }

    function activatePopQtyUpgrade () {
        if(moneyCount - popQtyUpgradeCost >= 0 && foodConsumeVal !== 0.01){
            moneyCount -= popQtyUpgradeCost;
            moneyCount = Number(moneyCount.toFixed(2));
            foodConsumeVal *= 0.5;
            foodConsumeVal = Number(foodConsumeVal.toFixed(2));
            popQtyUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            popQtyUpgradeValue.innerHTML= popQtyUpgradeCost;
            exchangePopValue.innerHTML = `Increase Population by ${popIncVal} for ${foodConsumeVal} food`;
        } else if(moneyCount - popQtyUpgradeCost >= 0 && foodConsumeVal === 0.01){
            alert("It can't get any cheaper!")
        } else {alert("Not Enough Gold!")}
    }

    function activateDevCostUpgrade () {
        if(moneyCount - devCostUpgradeCost >= 0 && goldSpendVal !== 0.01){
            moneyCount -= devCostUpgradeCost;
            moneyCount = Number(moneyCount.toFixed(2));
            goldSpendVal *= 0.5;
            goldSpendVal = Number(goldSpendVal.toFixed(2));
            devCostUpgradeCost *= 2;
            moneyValue.innerHTML = moneyCount;
            devCostUpgradeValue.innerHTML = devCostUpgradeCost;
            exchangeDevValue.innerHTML = `Increase Development by ${devIncVal} for ${goldSpendVal} gold`;
        } else if (moneyCount - devCostUpgradeCost >= 0 && goldSpendVal === 0.01){
            alert("It can't get any cheaper!");
        } else {alert("Not enough Gold!")}
    }



   

    

}