(function(){
/*
  class Person {
    name: string;
    private type: string = "guest";
    protected age: number = 21;

    constructor(name: string, public username: string){
      this.name = name;
    };

    getAge(): number{
      return this.age;
    };
    setAge(age: number): void{
      this.age = age && age >= 0 ? age : this.age;
    };

    private isLegal(): boolean{
      return this.age >= 21;
    };
  };

  let person = new Person("Lance", "lfallo1");
  console.log(person.username);
  console.log(person.name);
  person.setAge(20);
  console.log(person.getAge());
  // person.type;
  // person.age;


  //inheritance
  class Superhero extends Person{

    private suit: string;
    private alias: string;
    private powerLevel: number;

    constructor(name: string, username: string, suit: string = "metallic suit, silver. royal blue gloves and boots", alias: string="captain justice", powerLevel: number = 5000){
      super(name, username);
      this.suit = suit;
      this.alias = alias;
      this.powerLevel = powerLevel;
    };

    print(): void{
      console.log(`${this.name} (aka, ${this.alias}) is ${this.powerLevelText()}. This brave crimefighter wheres a ${this.suit}`);
    }

    private powerLevelText(): string{
      if(this.powerLevel > 4000){
        return "an elite defender of justice, almighty protector, crushes evil forces with ease.";
      }
      return "a novice crimefighter moving up the ranks."
    }
  };

  let captainJustice = new Superhero("Lance Fallon", "lfallo1");
  captainJustice.print();
*/

})();
