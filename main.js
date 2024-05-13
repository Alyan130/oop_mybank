"use strict";
class Bankaccount {
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit successfull new account balance is:" + this.accountbalance);
        }
        else {
            console.log("Credit unsuccessful");
        }
    }
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("Debit successfull new account balance:" + this.accountbalance);
        }
        else {
            console.log("debit unsuccessfull");
        }
    }
}
class Customer {
    constructor(person, age, gender, mobile_number, banckaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = banckaccount;
    }
    display() {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);
        console.log("Age: " + this.age);
        console.log("Mobile-Number: " + this.mobile_number);
        console.log("Account-balance:" + this.bankaccount.accountbalance);
        console.log();
    }
}
const a1 = new Bankaccount(60000);
const a2 = new Bankaccount(50000);
const c1 = new Customer({ firstname: "Alyan", lastname: "Ali" }, 19, "Male", 3152471268, a1);
const c2 = new Customer({ firstname: "Ahmed", lastname: "Ali" }, 20, "Male", 3182242436, a2);
c1.display();
c1.bankaccount.debit(10000);
console.log();
c2.display();
c2.bankaccount.credit(12000);
