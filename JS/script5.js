const btn = document.querySelectorAll('button')
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var dish = btnItem.parentElement
    var dishImg = dish.querySelector("img").src
    var dishName = dish.querySelector("H1").innerText
    var dishPrice = dish.querySelector("span").innerText
    // console.log(dishName,dishPrice, dishImg);
    addcart(dishPrice,dishImg,dishName)    
}})  
})

function addcart(dishPrice,dishImg,dishName){
    var addtr = document.createElement("tr")  
    var cartItem = document.querySelectorAll("tbody tr") 
    for (var i=0; i<cartItem.length;i++){
        var dishT = document.querySelectorAll(".title")
        if( dishT[i].innerHTML == dishName){            
            alert("Sản phẩm của bạn đã có trong giỏ hàng ")
            return
        }
    }

    var trcontent = '<tr><td style="display:flex;align-items: center;"><img style="width: 100px;;" src="'+dishImg+'" alt=""><span class="title" style="margin-left:20px;font-weight: 600;">'+dishName+'</span> </td><td><p><span class="price" style="font-weight: 700;font-size:18px">'+dishPrice+'</span><sup>$</sup></p></td><td><input style="width: 40px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="price-detele"style="color: red">Delete</span></td></tr>'
    var cartTable = document.querySelector("tbody")
    addtr.innerHTML = trcontent
    cartTable.append(addtr)
    // console.log(cartTable);
    carttotal()
    deteleCart()

}

/**TotalPrice */
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    // console.log(cartItem.length);
    for (var i=0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue);
        var dishPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(dishPrice);
        totalA = inputValue*dishPrice
        // totalB = totalA.toLocaleString('de-DE')
        totalC = totalC + totalA
        // console.log(totalC);    
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPice.innerHTML = totalC.toLocaleString('de-DE')
    // console.log();
    inputChange()

}
//....................Detele cart......................
function deteleCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length;i++){
        var dishT = document.querySelectorAll(".price-detele")
        dishT[i].addEventListener("click",function(event){
            var cartDetele = event.target
            var cartItemP = cartDetele.parentElement.parentElement
            cartItemP.remove()
            carttotal()
        })
    }
}

function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length;i++){
        var input1 = cartItem[i].querySelector("input")     
        input1.addEventListener("change",function(){
            carttotal()
        })        
    }
}

const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartbtn.addEventListener("click",function(){    
    document.querySelector(".cart").style.right = "-100"
})
cartshow.addEventListener("click",function(){        
    document.querySelector(".cart").style.right = "0"
})

// ---------------click-out--------------


