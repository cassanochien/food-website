
const rightbtn = document.querySelector('.right')
const leftbtn = document.querySelector('.left')
const divNuber = document.querySelectorAll('.slider > div')
console.log (divNuber.length)
let test = 0;

rightbtn.addEventListener ("click", function(){
    test = test + 1;
    if (test > divNuber.length-1){
        test = 0;
    }
    document.querySelector(".slider").style.right = test * 101.4+"%"
})
leftbtn.addEventListener ("click", function(){
    test = test - 1;
    if (test < 0){
        test = divNuber.length-1;
    }
    document.querySelector(".slider").style.right = test * 101.4+"%"
})
