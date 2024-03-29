

"use strict";

(function(){

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = "rgb(" + r + "," + g + "," + b + ")"; // rgb(20,48,50)
        return color;
    }

   
    function cool(paintCallback) {
        paintCallback();
    }
    
    cool( () => {
        document.body.style.backgroundColor = getRandomColor();
    });

      
})();
