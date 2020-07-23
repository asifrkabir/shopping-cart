const phonePrice = 1219;
const casePrice = 59;

//phone plus button event handler
const plusBtnPhone = document.getElementById("btn-plus-phone");
plusBtnPhone.addEventListener("click", function () {
    increment("quantity-phone", "phone-price");
  })


//phone minus button event handler
const minusBtnPhone = document.getElementById("btn-minus-phone");
minusBtnPhone.addEventListener("click", function () {
    if(document.getElementById("quantity-phone").value > 0){
        decrement("quantity-phone", "phone-price");
    }
  })


//case plus button event handler
const plusBtnCase = document.getElementById("btn-plus-case");
plusBtnCase.addEventListener("click", function () {
    increment("quantity-case", "case-price");
  })


//case minus button event handler
const minusBtnCase = document.getElementById("btn-minus-case");
minusBtnCase.addEventListener("click", function () {
    if(document.getElementById("quantity-case").value > 0){
        decrement("quantity-case", "case-price");
    }
  })




function increment(id1, id2){
    document.getElementById(id1).value++;
    if(id2 == "phone-price"){
        document.getElementById(id2).innerText = document.getElementById(id1).value * phonePrice;
    }
    else if(id2 == "case-price"){
        document.getElementById(id2).innerText = document.getElementById(id1).value * casePrice;
    }
}

function decrement(id1, id2){
    document.getElementById(id1).value--;
    if(id2 == "phone-price"){
        document.getElementById(id2).innerText = document.getElementById(id1).value * phonePrice;
    }
    else if(id2 == "case-price"){
        document.getElementById(id2).innerText = document.getElementById(id1).value * casePrice;
    }
}