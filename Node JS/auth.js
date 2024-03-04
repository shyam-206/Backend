const register = function(username) {
    console.log(`User ${username} had been registered`)
}

const login = function(username,password){
    console.log(`User ${username} is logged in`)
}

// for one module export
//module.exports = register

//more than one module export
module.exports = {
    register : register,
    login : login
}