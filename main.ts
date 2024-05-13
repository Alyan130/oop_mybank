interface ibankaccount{
     credit(amount:number):void;
     debit(amount:number):void;
    }
    
    class Bankaccount implements ibankaccount{
      accountbalance:number;
      constructor(accountbalance:number){
        this.accountbalance=accountbalance;
      }
      public credit(amount:number){
        if(amount>0){
     this.accountbalance+=amount;
     console.log("Credit successfull new account balance is:"+this.accountbalance);
        }
        else{
            console.log("Credit unsuccessful");
        }
      }
      public debit(amount:number){
        if(amount>0 && amount<this.accountbalance){
            this.accountbalance-=amount;
            console.log("Debit successfull new account balance:"+this.accountbalance);
        }
        else{
        console.log("debit unsuccessfull");
        }
      }
    }
    
    class Customer{
        person:{
            firstname:String;
            lastname:String;
        }
        age:number;
        gender:String;
        mobile_number:number;
        bankaccount:Bankaccount;
    
        constructor(person:{firstname:String,lastname:String},age:number,gender:String,mobile_number:number,banckaccount:Bankaccount){
            this.person=person;
            this.age=age;
            this.gender=gender;
            this.mobile_number=mobile_number;
            this.bankaccount=banckaccount;
        }
        public display(){
            console.log("Name: "+this.person.firstname+" "+this.person.lastname);
            console.log("Age: "+this.age)
            console.log("Mobile-Number: "+this.mobile_number)
            console.log("Account-balance:"+this.bankaccount.accountbalance);
            console.log();
        }
    }
    const a1=new Bankaccount(60000);
    const a2=new Bankaccount(50000);
    const c1=new Customer({firstname:"Alyan",lastname:"Ali"},19,"Male",3152471268,a1);
    const c2=new Customer({firstname:"Ahmed",lastname:"Ali"},20,"Male",3182242436,a2);
    c1.display();
    c1.bankaccount.debit(10000);
    console.log();
    c2.display();
    c2.bankaccount.credit(12000);

    