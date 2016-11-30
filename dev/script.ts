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

  console.log(Color.RED);

})(new Date());
