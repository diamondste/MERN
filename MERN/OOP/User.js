class User { 
    constructor(username, emailAddress){
        this.name = username 
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) { 
        this.accountBalance += amount
        return this;
    }
    makeWithdrawal(amount) { 
        this.accountBalance -= amount
        return this;
    }
    displayBalance() { 
        console.log("User: " + this.name, "Balance: " + this.accountBalance)
        return this;
    }

}

const tom = new User("Tom Cat", "tomcat@cat.com")
const jerry = new User("Jerry Mouse", "jerryMouset@mouse.com")
const piggy = new User("Ms Piggy", "lovekermit@piggy.com")

tom.makeDeposit(100).makeDeposit(200).makeDeposit(400).makeWithdrawal(100).displayBalance()

jerry.makeDeposit(200).makeDeposit(100).makeWithdrawal(100).makeWithdrawal(50).displayBalance()

piggy.makeDeposit(400).makeWithdrawal(100).makeWithdrawal(50).makeWithdrawal(80).displayBalance()

