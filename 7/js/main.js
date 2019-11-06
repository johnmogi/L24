

"use strict";

(function(){

  const nav = navigator.geolocation.getCurrentPosition
  ((position)=> console.log(position.coords.latitude, position.coords.longitude))
 //! ((err)=>   console.log(err.message))
// TODO ask for error example
//   navigator.geolocation.getCurrentPosition(function(position){
//     console.log(position.coords.latitude, 
//       position.coords.longitude);
// }, function(err) {
//     console.log(err.message);
// });

})();
