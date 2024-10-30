window.onload = function(){
    let counterDisplayElem = document.querySelector(".counterDisplay");
    let btn1 = document.querySelector(".btn1");

    let count1 = 0;

    btn1.addEventListener("click", increaseValue1);

    function increaseValue1 () {
        count1 +=1
        counterDisplayElem.innerHTML = count1;
    }

}