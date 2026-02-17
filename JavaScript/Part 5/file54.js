function user(){
    let password = "1234"
    function checkPassword(inputpassword){
        return password == inputpassword;
    }
    return checkPassword;
}

const checkpassword = user()
console.log(checkpassword("1234"))