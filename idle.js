window.onload = function(){
    let moneyValue = document.querySelector(".moneyValue");
    let popValue = document.querySelector(".popValue");
    let devValue = document.querySelector(".devValue");

    let moneyBtn = document.querySelector(".moneyBtn");
    let popBtn = document.querySelector(".popBtn");
    let devBtn = document.querySelector(".devBtn");

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    moneyBtn.addEventListener("click", increasemoneyValue);
    
    popBtn.addEventListener("click", increasepopValue);
    popBtn.addEventListener("click", decreasemoneyValue); 

    devBtn.addEventListener("click", increasedevValue);
    devBtn.addEventListener("click", decreasepopValue);

    function increasemoneyValue () {
        count1 += 1;
        moneyValue.innerHTML = count1;
    }

    function increasepopValue (){
        count2 += 0.5;
        popValue.innerHTML = count2;
    }

    function increasedevValue (){
        count3 += 0.25;
        devValue.innerHTML = count3;
    }

    function decreasemoneyValue (){
        count1 -= 1;
        moneyValue.innerHTML = count1;
    }

    function decreasepopValue (){
        count2 -= 1;
        popValue.innerHTML = count2;

    }

}