function outerFunction (){
    let message = "Hello I am Dwipraj"
    function innerFunction (){
       return message
    }
   return  innerFunction()
}
console.log(outerFunction())