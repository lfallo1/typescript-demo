(function(currentDate: Date){

  console.log("app start time: " + currentDate.toUTCString());

  function User(name: string, age: number, dob: Date){
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.active = true;
  }

  User.prototype.showInfo = function(): string{
    return this.name + " is " + this.age + " years old, and was born on " + this.dob.toString();
  };

  let lance = new User("Lance", 30, new Date(1986,9,12));
  console.log(lance.showInfo());

  //function return types
  function testFunction(num: number): string{
    return "Your number is " + num.toString();
  }
  //function assignment
  let myFunc: (num: number) => string = testFunction;
  console.log(myFunc(34));

  //arrays
  let arr: any[] = ["dog", 24];
  arr = [false];

  let arr2: number[] = [1,2,3,4,5,6];
  arr2.push(7);

  //tuples
  let address: [string, number, string] = ['Westmoreland Avenue', 7919, "21234"];
  console.log(address);

  //enum
  enum Color {
    RED,
    GREEN,
    BLUE
  };
  console.log(Color.BLUE);

  let myObject: {name: string, age: number} = {
    age : 30,
    name : "Lance"
  };
  console.log(myObject);

  //complex objects and type declarations.  also shows union types (i.e., the method returns number[] or number)
  type ComplexType = {data: number[], output: (all: boolean)=>number[] | number};
  let complexObj: ComplexType = {
    data : [1,2,3,4,5],
    output : function(all: boolean): number[] | number{
      return all ? this.data : this.data[Math.floor(Math.random() * this.data.length)]
    }
  };
  const showAll = new Date().getTime() % 2 === 0;
  console.log(complexObj.output(showAll));

  //dont think typeof does anything special / unique to TypeScript
  let myNumber: number[] = [1,38];
  if(typeof myNumber === "number[]"){
    console.log("myNumber is a number array");
  }

  //never
  function throwError(msg: string): never{
    throw new Error("error: " + msg);
  }

  //null checks
  let nonNullNum: number = 34;
  // nonNullNum = null; //would throw error if strictNullChecks are turned on
  let canBeNull;
  canBeNull = null;

  //if strictNullChecks is on, this will not compile! (type null is not assignable to type number)
  // let startAsNull = null
  // startAsNull = 34;
  // console.log(startAsNull);


  //exercise
  type BankAccount = {money: number, deposit: (value: number) => void};
  let bankAcct: BankAccount = {
    money: 2000,
    deposit(value: number): void{
      this.money += value;
    }
  };

  let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAcct,
    hobbies: ["Sports", "Music"]
  };
  myself.bankAccount.deposit(1000);
  console.log(myself);


  

})(new Date());
