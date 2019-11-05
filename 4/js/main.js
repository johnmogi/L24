

//   const myName = "john";
// function a (callback){
//   callback
// }
  
// function b (){
//   console.log(callback)
// }
// (a("what"),() => b())


const a = (callback, b) => {
  callback(b);
}
  
a ((a) => console.log(a), 'john mogi');