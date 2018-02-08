var x = 0;
var s = "";

console.log("Hello World");

var form = document.getElementById("form");
form.hidden = true;
var button = document.getElementById("buyButton");

button.on("click",
    function() { console.log("Buying Item"); });
var productInfo = document.getElementByClassName("product-props");
var listItems=productInfo.item[0].children;
