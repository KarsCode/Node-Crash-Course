const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf-8'})

const writeStream = fs.createWriteStream('./docs/blog4.txt')

//event listener, everytime we receive a buffer of data from the stream this callback is fired
// readStream.on('data',(chunk)=>{
//     console.log('------NEW CHUNK-----');
//     console.log(chunk);
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// })


//using pipe from a readable stream to a writeable one, PIPING

readStream.pipe(writeStream);