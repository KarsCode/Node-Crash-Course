//using a require statement to import people.js into this file, empty object, module.exports

const { people,ages } = require('./people');

console.log(people,ages);   
//os module
const os = require('os');

console.log(os.platform(),'and', os.homedir());

