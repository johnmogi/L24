"use strict";

// Arrow Functions

(function () {

    const buttonPower = document.getElementById("buttonPower");
    buttonPower.addEventListener("click", function () {

        //const num = parseInt(prompt("Enter a number: "));
        //const num = parseFloat(prompt("Enter a number: "));
        //const num = Number(prompt("Enter a number: "));
        const num = +prompt("Enter a number: ");
        const pow = num * num;
        alert("Power: " + pow);

    });

})();
