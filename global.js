//Global Object

console.log(global);


setTimeout(() => {
   console.log('IN THE TIMEOUT') ;
   clearInterval(int);
}, 5000);   

const int = setInterval(()=>{console.log("in the interval")},1000);


console.log(__dirname);
console.log(__filename);
