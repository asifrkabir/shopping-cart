const phonePrice = 1219;
const casePrice = 59;
document.getElementById("tax").innerText = ((phonePrice + casePrice) * 0.15).toFixed(2);

//remove from cart cross button event handler
const removeBtn = document.getElementsByClassName("remove-item");
for (let i = 0; i < removeBtn.length; i++) {
    const btn = removeBtn[i];
    btn.addEventListener("click", function (event) {
        document.getElementById("sub-total").innerText = parseFloat(document.getElementById("sub-total").innerText) - parseFloat(btn.previousSibling.previousSibling.lastChild.innerText);

        document.getElementById("tax").innerText = (parseFloat(document.getElementById("sub-total").innerText) * 0.15).toFixed(2);

        document.getElementById("total").innerText = parseFloat(document.getElementById("sub-total").innerText) + parseFloat(document.getElementById("tax").innerText);

        event.target.parentNode.parentNode.parentElement.remove();
    })
}


//phone plus button event handler
const plusBtnPhone = document.getElementById("btn-plus-phone");
plusBtnPhone.addEventListener("click", function () {
    increment("quantity-phone", "phone-price");
})


//phone minus button event handler
const minusBtnPhone = document.getElementById("btn-minus-phone");
minusBtnPhone.addEventListener("click", function () {
    if (document.getElementById("quantity-phone").value > 0) {
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
    if (document.getElementById("quantity-case").value > 0) {
        decrement("quantity-case", "case-price");
    }
})




function increment(id1, id2) {
    document.getElementById(id1).value++;
    if (id2 == "phone-price") {
        document.getElementById(id2).innerText = document.getElementById(id1).value * phonePrice;
        finalBill(phonePrice);
    }
    else if (id2 == "case-price") {
        document.getElementById(id2).innerText = document.getElementById(id1).value * casePrice;
        finalBill(casePrice);
    }
}



function decrement(id1, id2) {
    document.getElementById(id1).value--;
    if (id2 == "phone-price") {
        document.getElementById(id2).innerText = document.getElementById(id1).value * phonePrice;
        finalBill(-1 * phonePrice);
    }
    else if (id2 == "case-price") {
        document.getElementById(id2).innerText = document.getElementById(id1).value * casePrice;
        finalBill(-1 * casePrice);
    }
}


function finalBill(prodType) {
    document.getElementById("sub-total").innerText = parseFloat(document.getElementById("sub-total").innerText) + prodType;

    document.getElementById("tax").innerText = (parseFloat(document.getElementById("sub-total").innerText) * 0.15).toFixed(2);

    document.getElementById("total").innerText = parseFloat(document.getElementById("sub-total").innerText) + parseFloat(document.getElementById("tax").innerText);
}