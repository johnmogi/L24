"use strict";

(function () {

    const buttonTest = document.getElementById("buttonTest");
    buttonTest.addEventListener("click", () => alert("Test"));

    const buttonTest2 = document.getElementById("buttonTest2");
    
    // who is this?
    // buttonTest2.addEventListener("click", () => {
    //     alert("Test 2");
    //     this.style.backgroundColor = "Green"; // אינו הלחצן this-לא עובד בגלל שה
    // });


    buttonTest2.addEventListener("click", function () {
        alert("Test 2");
        this.style.backgroundColor = "Green"; // זהו האובייקט שקרא לפונקציה, כלומר הלחצן this-עובד, כי ה
    });


})();