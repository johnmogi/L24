"use strict";

(function(){
    setInterval(() => {
        const main = document.getElementById("main");
        main.innerHTML = "";
        main.append(Math.floor(Math.random() * 101));
      }, 1000);
})();
