/// <reference path="jquery-3.4.1.js" />

// Document Ready Event: 
$(document).ready(function () { });

// Same: 
$(function () {

    // 1. Find the button: 
    const buttonHello = document.getElementById("buttonHello");

    // 2. Register to click event: 
    buttonHello.addEventListener("click", function showHello() {
        alert("Hello");
    });

    // 1 + 2: By jQuery - find the button and register to click event: 
    $("#buttonWhatsUp").click(function showHello() {
        alert("Whats Up?");
    });

    $("#buttonTime").click(function () {

        // Show Time: 
        const time = new Date();
        alert(time.toLocaleTimeString());

        // Paint me in red: 
        $(this).css("background-color", "Red");

    });


    $("button").mouseenter(function () {
        $(this).css("background-color", "Green");
    });

    $("button").mouseleave(function () {
        $(this).css("background-color", "Yellow");
    });

});


