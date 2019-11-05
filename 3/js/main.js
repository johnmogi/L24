

"use strict";

(function(){

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = "rgb(" + r + "," + g + "," + b + ")"; // rgb(20,48,50)
        return color;
    }

    setInterval(() => {
    function cool(paintCallback) {
        paintCallback();
    }
    
    cool(function () {
        document.body.style.backgroundColor = getRandomColor();
    });





        // const colors = ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow"];
        // i = Math.floor(Math.random() * 7);
        // let colorChange = colors[i];
      
        // main.innerHTML = "";
        // document.body.bgColor = colorChange;
      
        // main.append();
      }, 1000);
      
})();
