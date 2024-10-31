window.onload = function(){
    let moneyValue = document.querySelector(".moneyValue");
    let foodValue = document.querySelector(".foodValue");
    let popValue = document.querySelector(".popValue");
    let devValue = document.querySelector(".devValue");

    let moneyBtn = document.querySelector(".moneyBtn");
    let foodBtn = document.querySelector(".foodBtn")
    let popBtn = document.querySelector(".popBtn");
    let devBtn = document.querySelector(".devBtn");

    let moneyCount = 0;
    let foodCount = 0;
    let popCount = 0;
    let devCount = 0;

    moneyBtn.addEventListener("click", increasemoneyValue);

    foodBtn.addEventListener("click", increasefoodValue)
    
    popBtn.addEventListener("click", increasepopValue);
    popBtn.addEventListener("click", decreasemoneyValue); 

    devBtn.addEventListener("click", increasedevValue);
    devBtn.addEventListener("click", decreasepopValue);

    function increasemoneyValue () {
        moneyCount += 1;
        moneyValue.innerHTML = moneyCount;
    }

    function decreasemoneyValue (){
        foodCount -= 1;
        foodValue.innerHTML = foodCount;
    }

    function increasefoodValue () {
        foodCount += 1;
        foodValue.innerHTML = foodCount;
    }

    function decreasefoodValue (){
        moneyCount -= 1;
        moneyValue.innerHTML = moneyCount;
    }

    function increasepopValue (){
        popCount += 0.5;
        popValue.innerHTML = popCount;
    }

    function decreasepopValue (){
        popCount -= 1;
        popValue.innerHTML = popCount;

    }

    function increasedevValue (){
        devCount += 0.25;
        devValue.innerHTML = devCount;
    }

   

    

}