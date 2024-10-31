window.onload = function(){
    let moneyValue = document.querySelector(".moneyValue");
    let foodValue = document.querySelector(".foodValue");
    let popValue = document.querySelector(".popValue");
    let devValue = document.querySelector(".devValue");

    let moneyBtn = document.querySelector(".moneyBtn");
    let foodBtn = document.querySelector(".foodBtn")
    let popBtn = document.querySelector(".popBtn");
    let devBtn = document.querySelector(".devBtn");

    let moneyCount = 10;
    let foodCount = 0;
    let popCount = 0;
    let devCount = 0;

    moneyValue.innerHTML = moneyCount;

    moneyBtn.addEventListener("click", increasemoneyValue);

    foodBtn.addEventListener("click", increasefoodValue)
    
    popBtn.addEventListener("click", increasepopValue);

    devBtn.addEventListener("click", increasedevValue);

    function increasemoneyValue () {
        if(foodCount - 9 > 0){
        moneyCount += 10;
        moneyValue.innerHTML = moneyCount;
        foodCount -= 9;
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food to sell!")}
    }

    function increasefoodValue () {
        if(moneyCount - 9 > 0){
        foodCount += 10;
        foodValue.innerHTML = foodCount;
        moneyCount -= 9;
        moneyValue.innerHTML = moneyCount;}
        else{alert("Not enough gold to buy food!")}
    }

    function increasepopValue (){
        if(foodCount - 10 >= 0){
        popCount += 1;
        popValue.innerHTML = popCount;
        foodCount -= 10;
        foodValue.innerHTML = foodCount;}
        else{alert("Not enough food for the people!")}
    }

    function increasedevValue (){
        if(moneyCount - 10 >= 0){
        devCount += 1;
        devValue.innerHTML = devCount;
        moneyCount -=10;
        moneyValue.innerHTML = moneyCount;}
        else(alert("Not enough gold to increase development!"))
    }

   

    

}