//create, delete and interact with a filesystem which is unique to Node.



const fs = require('fs');

//READING FILES
// fs.readFile('./docs/blog1.txt', (err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log(data.toString())
// });

// console.log('async check');


//WRITING FILES
// fs.writeFile('./docs/blog1.txt', 'Hello Kartik', ()=>{
//     console.log('file was written')
// });

// fs.writeFile('./docs/blog2.txt', 'Hello Kartik', ()=>{
//     console.log('file was written')
// });


//DIRECTORIES
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err)
        }
        
        console.log("folder created")
        
    })

}

else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }

        console.log('folder deleted')
    })
}


// DELETING FILES 

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err)
        {
            console.log(err)
        }
        console.log("File Deleted")
    })
}
