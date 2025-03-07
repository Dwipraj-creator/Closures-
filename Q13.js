function createBankAccount (mainbalance){
    let balance = mainbalance
    return {
        deposit : function(amount) {
                 balance += amount
                 return balance
                  
        },
        withdraw : function(amount){
            balance -= amount 
            return balance
        },
        getBalance : function (){
            return balance
        }
        }
    }
const account = createBankAccount(100)
console.log(account.deposit(50))
console.log(account.withdraw(30))
console.log(account.getBalance())