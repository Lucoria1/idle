window.onload = function(){
    let moneyValue = document.querySelector(".moneyValue");
    let foodValue = document.querySelector(".foodValue");
    let popValue = document.querySelector(".popValue");
    let devValue = document.querySelector(".devValue");

    let moneyBtn = document.querySelector(".moneyBtn");
    let foodBtn = document.querySelector(".foodBtn")
    let popBtn = document.querySelector(".popBtn");
    let devBtn = document.querySelector(".devBtn");

    let saveBtn = document.querySelector(".saveBtn")
    let resetBtn = document.querySelector(".resetBtn");
    let loadBtn = document.querySelector(".loadBtn");

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

    let moneyCount = 100000;
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

    resetBtn.addEventListener("click", resetData);
    saveBtn.addEventListener("click", saveData);
    loadBtn.addEventListener("click", loadData);
    
    moneyBtn.addEventListener("click", increasemoneyValue);

    foodBtn.addEventListener("click", increasefoodValue);
    
    popBtn.addEventListener("click", increasepopValue);

    devBtn.addEventListener("click", increasedevValue);

    function loadData () {

        if(localStorage.getItem("moneyCount") === null){
            alert("No saved data!")
            
        } else {
        moneyCount = JSON.parse(localStorage.getItem("moneyCount"));        
        foodCount = JSON.parse(localStorage.getItem("foodCount"));
        popCount = JSON.parse(localStorage.getItem("popCount"));        
        devCount = JSON.parse(localStorage.getItem("devCount"));

        foodSellVal = JSON.parse(localStorage.getItem("foodSellVal"));        
        foodBuyVal = JSON.parse(localStorage.getItem("foodBuyVal"));

        foodBuyQty = JSON.parse(localStorage.getItem("foodBuyQty"));        
        foodSellQty = JSON.parse(localStorage.getItem("foodSellQty"));

        popIncVal = JSON.parse(localStorage.getItem("popIncVal"));        
        foodConsumeVal = JSON.parse(localStorage.getItem("foodConsumeVal"));

        devIncVal = JSON.parse(localStorage.getItem("devIncVal"));        
        goldSpendVal = JSON.parse(localStorage.getItem("goldSpendVal"));

        goldUpgradeCost = JSON.parse(localStorage.getItem("goldUpgradeCost"));        
        qtyUpgradeCost = JSON.parse(localStorage.getItem("qtyUpgradeCost"));

        foodUpgradeCost = JSON.parse(localStorage.getItem("foodUpgradeCost"));        
        costUpgradeCost = JSON.parse(localStorage.getItem("costUpgradeCost"));

        popUpgradeCost = JSON.parse(localStorage.getItem("popUpgradeCost"));        
        popQtyUpgradeCost = JSON.parse(localStorage.getItem("popQtyUpgradeCost"));

        devUpgradeCost = JSON.parse(localStorage.getItem("devUpgradeCost"));        
        devCostUpgradeCost = JSON.parse(localStorage.getItem("devCostUpgradeCost"));

        moneyValue.innerHTML = moneyCount;
        foodValue.innerHTML = foodCount;
        popValue.innerHTML = popCount;
        devValue.innerHTML = devCount;

        exchangeMoneyValue.innerHTML = `Sell ${foodSellQty} food for ${foodSellVal} gold`;
        exchangeFoodValue.innerHTML = `Buy ${foodBuyQty} food for ${foodBuyVal} gold`;
        exchangePopValue.innerHTML = `Increase Population by ${popIncVal} for ${foodConsumeVal} food`;
        exchangeDevValue.innerHTML = `Increase Development by ${devIncVal} for ${goldSpendVal} gold`;
    
        goldUpgradeValue.innerHTML = goldUpgradeCost;
        qtyUpgradeValue.innerHTML = qtyUpgradeCost;
        foodUpgradeValue.innerHTML = foodUpgradeCost;
        costUpgradeValue.innerHTML = costUpgradeCost;
        popUpgradeValue.innerHTML = popUpgradeCost;
        popQtyUpgradeValue.innerHTML = popQtyUpgradeCost
        devUpgradeValue.innerHTML = devUpgradeCost;
        devCostUpgradeValue.innerHTML = devCostUpgradeCost;

        alert("Data loaded!")}
    }

    function resetData () {
        localStorage.removeItem("moneyCount");
        localStorage.removeItem("foodCount");
        localStorage.removeItem("popCount");
        localStorage.removeItem("devCount");

        localStorage.removeItem("foodSellVal");
        localStorage.removeItem("foodBuyVal");

        localStorage.removeItem("foodBuyQty");
        localStorage.removeItem("foodSellQty");

        localStorage.removeItem("popIncVal");
        localStorage.removeItem("foodConsumeVal");

        localStorage.removeItem("devIncVal");
        localStorage.removeItem("goldSpendVal");

        localStorage.removeItem("goldUpgradeCost");
        localStorage.removeItem("qtyUpgradeCost");

        localStorage.removeItem("foodUpgradeCost");
        localStorage.removeItem("costUpgradeCost");

        localStorage.removeItem("popUpgradeCost");
        localStorage.removeItem("popQtyUpgradeCost");

        localStorage.removeItem("devUpgradeCost");
        localStorage.removeItem("devCostUpgradeCost");



        alert("Data has been reset!");
    }

    function saveData () {
        localStorage.setItem("moneyCount", JSON.stringify(moneyCount));
        localStorage.setItem("foodCount", JSON.stringify(foodCount));
        localStorage.setItem("popCount", JSON.stringify(popCount));
        localStorage.setItem("devCount", JSON.stringify(devCount));

        localStorage.setItem("foodSellVal", JSON.stringify(foodSellVal));
        localStorage.setItem("foodBuyVal", JSON.stringify(foodBuyVal));

        localStorage.setItem("foodBuyQty", JSON.stringify(foodBuyQty));
        localStorage.setItem("foodSellQty", JSON.stringify(foodSellQty));

        localStorage.setItem("popIncVal", JSON.stringify(popIncVal));
        localStorage.setItem("foodConsumeVal", JSON.stringify(foodConsumeVal));

        localStorage.setItem("devIncVal", JSON.stringify(devIncVal));
        localStorage.setItem("goldSpendVal", JSON.stringify(goldSpendVal));

        localStorage.setItem("goldUpgradeCost", JSON.stringify(goldUpgradeCost));
        localStorage.setItem("qtyUpgradeCost", JSON.stringify(qtyUpgradeCost));

        localStorage.setItem("foodUpgradeCost", JSON.stringify(foodUpgradeCost));
        localStorage.setItem("costUpgradeCost", JSON.stringify(costUpgradeCost));

        localStorage.setItem("popUpgradeCost", JSON.stringify(popUpgradeCost));
        localStorage.setItem("popQtyUpgradeCost", JSON.stringify(popQtyUpgradeCost));

        localStorage.setItem("devUpgradeCost", JSON.stringify(devUpgradeCost));
        localStorage.setItem("devCostUpgradeCost", JSON.stringify(devCostUpgradeCost));

        alert("Data has been saved!")
    }

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
        foodCount = Number(foodCount.toFixed(2));
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
            foodSellVal *= 1.5;
            foodSellVal = Number(foodSellVal.toFixed(2));
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

                if(foodBuyVal === 0.01){
                    costUpgradeValue.innerHTML = "MAX"
                } else {
                costUpgradeCost *= 2;
                costUpgradeValue.innerHTML = costUpgradeCost;}

            moneyValue.innerHTML = moneyCount;
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

                if(foodConsumeVal === 0.01){
                    popQtyUpgradeValue.innerHTML = "MAX"
                } else {
                popQtyUpgradeCost *= 2;
                popQtyUpgradeValue.innerHTML= popQtyUpgradeCost;}

            moneyValue.innerHTML = moneyCount;
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

                if(goldSpendVal === 0.01){
                    devCostUpgradeValue.innerHTML = "MAX"
                } else {
                    devCostUpgradeCost *= 2;
                    devCostUpgradeValue.innerHTML = devCostUpgradeCost;
                }
            
            moneyValue.innerHTML = moneyCount;
            exchangeDevValue.innerHTML = `Increase Development by ${devIncVal} for ${goldSpendVal} gold`;
        } else if (moneyCount - devCostUpgradeCost >= 0 && goldSpendVal === 0.01){
            alert("It can't get any cheaper!");
        } else {alert("Not enough Gold!")}
    }


   

    

}