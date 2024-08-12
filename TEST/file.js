import * as fs from 'fs';


//Sync File 
// fs.writeFileSync("./text.txt","Hello World")

//Async File 
// fs.writeFile('./text.txt',"Hello World Async",(err) => {
//     console.log(err)
// })

// console.log(fs.readFileSync('./test.txt','utf-8'))

//async way
// fs.readFile('./test.txt','utf-8',(err,res) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//     }
// })


// fs.appendFileSync('./text.txt',`${Date.now()} Hey There \n`)

//for the making folder
// fs.mkdirSync('new-folder')