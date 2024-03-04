//NPM module
//Youtube coder's gyanw
// const color = require('cli-color')
// console.log(color.blue('Hello JavaScript'))

//local module.
//here how to used auth that has been created by us we used here.

//for one module
// const  = require('./auth')
// register('codeShyam')




//for more than one module import
/*const auth = require('./auth')

auth.register('Shyam Dhokiya')
auth.login('Shyam Dhokiya','secret') */

/*const path = require('path')
//dir name
console.log('Folder name :',path.dirname(__filename) )

//file name
console.log('File Name :',path.basename(__filename))

console.log('Parse : ',path.extname(__filename))

*/

//const path = require('path')
//File System
//const fs = require('fs')

//make directory
/*fs.mkdir(path.join(__dirname,'/test'),(err) => {
    if(err){
        console.log('Something went to wrong...')
        console.log(err)
        return
    }

    console.log("Folder Created...")
})

*/

//Create a file 
/*three parameter
1. path name
2. what we had to right
3. function
*/
// fs.writeFile(path.join(__dirname,'test','test.txt'),
// 'Hello Node ',(err)  => {
//     if(err){
//         throw err
//     }
//     fs.appendFile(path.join(__dirname,'test','test.txt'),
//     'More data', (err) =>{
//         if(err){
//             throw err
//         }

//         console.log('Data added...')
//     })
//     console.log("File Created...")
// })


//How to read file
//method 1 
/*fs.readFile(path.join(__dirname,'test','test.txt'),
(err,data) =>{
    if(err){
        throw err
    }
    const content = Buffer.from(data)
    console.log(content.toString())
}) */

//method 2
// fs.readFile(path.join(__dirname,'test','test.txt'),
// 'utf-8',(err,data) => {
//     if(err){
//         throw err
//     }

//     console.log(data)
// })


//OS Module 
// const os = require('os')

// console.log('OS type :' ,os.type())
// console.log('Os Platdorm : ',os.platform())
// console.log("cpu architecture :", os.arch())
// console.log("CPU details",os.cpus())
// console.log("Free Memory",os.freemem())
// console.log("Total Memory",os.totalmem())


//Events Module

/*const Emitter = require('events')
const myEmiiter = new Emitter()


//herre someone is event
myEmiiter.on('somename',(data) => {
    console.log(data)
})

myEmiiter.emit('somename', {
    name : 'Rakesh'
})

class Auth extends Emitter {

    register(username){
        console.log('Registeration Successfully Done... ')
        this.emit('registered',username)
    }
}

const auth = new Auth()

//listen

//verify email
auth.on('registered',(data) => {
    console.log(`Sending email to ${data} `)
})

//welcome email
auth.on('registered',(data) => {
    console.log(`Sending welcome email to ${data} `)
})
auth.register('Rakesh') */