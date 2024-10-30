window.onload = function(){
    let value1 = document.querySelector(".value1");
    let value2 = document.querySelector(".value2");
    let value3 = document.querySelector(".value3");
    let btn1 = document.querySelector(".btn1");
    let btn2 = document.querySelector(".btn2");
    let btn3 = document.querySelector(".btn3");

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    btn1.addEventListener("click", increaseValue1);
    btn2.addEventListener("click", increaseValue2);
    btn3.addEventListener("click", increaseValue3);

    function increaseValue1 () {
        count1 += 1
        value1.innerHTML = count1;
    }

    function increaseValue2 (){
        count2 += 1
        value2.innerHTML = count2;
    }

    function increaseValue3 (){
        count3 += 1
        value3.innerHTML = count3;
    }

}