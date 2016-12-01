(function(){

  console.log("hello from es6.ts");

  //----------- VAR, LET, CONST ------------
  //----------------------------------------
  //let preserves outer variable
  let i: string = "dog";
  for(let i: number = 0; i < 10; i++){
    console.log("in loop: " + i);
  }
  console.log("outside loop: " + i);

  //since var does not preserve scope, this would not work
  /*
  var j: string = "cat";
  for(var j: number = 0; j < 10; j++){
    //doesnt matter, already broken
  }
  */

  const MAX_NUM: number = 100;
  // MAX_NUM = 99; //cannot reassign const


  //-----------ARROW FUNCTIONS and DEFAULT PARAMS------
  //---------------------------------------------------
  const add = (num1: number = 1, num2: number = num1 + 1): number => num1 + num2;
  const greet = name => console.log("hello, " + name);
  console.log(add(15)); // out: 31
  console.log(add(34, 128)); // out: 162


  //------------SPREAD OPERATOR---------------
  //------------------------------------------

  const list = [1,2,3,4,5,6,7,-3, 40, 8];
  console.log("Max is : " + Math.max(...list));

  function variableArgs(name: string, ...args: number[]){
    console.log("in variable args with name " + name)
    for(let i = 0; i < args.length; i++){
      console.log(args[i]);
    }
    console.log("end variable args");
  }
  variableArgs("Lance", 1,2,6,1,2,0);

  type UserType = {name: string, age: number, dob: Date};
  let User: UserType = {
    name: "Lance",
    age: 30,
    dob: new Date(1986,9,12)
  };

  const showUser = function(User: UserType): void{
    const {name, age} = User; //grab only needed properties
    // const {name: myName, age: myAge} = User //optional alias
    console.log("name: " + name);
    console.log("age: " + age);
  }
  showUser(User);


  //-------------- TEMPLATE LITERALS -----------------
  //--------------------------------------------------
  const greeting = `
    Hello ${User.name},
  Hope things are going well.  You are ${User.age} years old. HA!!
  Bye...`;
  console.log(greeting);

})();
