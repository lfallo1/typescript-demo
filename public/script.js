var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    var Person = (function () {
        function Person(name, username) {
            this.username = username;
            this.type = "guest";
            this.age = 21;
            this.name = name;
        }
        Person.showInfo = function () {
            console.log(Person.info);
        };
        ;
        Person.prototype.getAge = function () {
            return this.age;
        };
        ;
        Person.prototype.setAge = function (age) {
            this.age = age && age >= 0 ? age : this.age;
        };
        ;
        Person.prototype.isLegal = function () {
            return this.age >= 21;
        };
        ;
        Person.info = "This is the person class";
        return Person;
    }());
    ;
    var person = new Person("Lance", "lfallo1");
    console.log(person.username);
    console.log(person.name);
    person.setAge(20);
    console.log(person.getAge());
    // person.type;
    // person.age;
    //inheritance
    var Superhero = (function (_super) {
        __extends(Superhero, _super);
        function Superhero(name, username, suit, alias, powerLevel) {
            if (suit === void 0) { suit = "blue suit, with red boots, red cape, and gold S stamped on his chest"; }
            if (alias === void 0) { alias = "Superman"; }
            if (powerLevel === void 0) { powerLevel = 5000; }
            _super.call(this, name, username);
            this._suit = suit;
            this._alias = alias;
            this._powerLevel = powerLevel;
        }
        ;
        Object.defineProperty(Superhero.prototype, "suit", {
            get: function () { console.log('in suit getter'); return this._suit; },
            set: function (suit) {
                if (suit.length < 20) {
                    this._suit = suit;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Superhero.prototype, "alias", {
            get: function () { console.log('in alias getter'); return this._alias; },
            set: function (alias) {
                if (alias.length < 20) {
                    this._alias = alias;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Superhero.prototype, "powerLevel", {
            get: function () { console.log('in powerLevel getter'); return this._powerLevel; },
            set: function (powerLevel) {
                if (powerLevel < 2000 && powerLevel > 0) {
                    this._powerLevel = powerLevel;
                }
            },
            enumerable: true,
            configurable: true
        });
        ;
        Superhero.prototype.print = function () {
            console.log(this.name + " (aka, " + this.alias + ") is " + this.powerLevelText() + " with a power level of " + this._powerLevel + ". This superhero wheres a " + this._suit);
        };
        Superhero.prototype.powerLevelText = function () {
            if (this._powerLevel > 4000) {
                return "an elite defender of justice.";
            }
            return "a novice crimefighter moving up the ranks.";
        };
        return Superhero;
    }(Person));
    ;
    var superman = new Superhero("Clark Kent", "superman1");
    superman.print();
    superman.print();
    superman.powerLevel = 2001;
    superman.print();
    superman.powerLevel = 1999;
    superman.print();
    Superhero.showInfo();
    var User = (function () {
        function User(name, email) {
            this.name = name;
            this.email = email;
        }
        Object.defineProperty(User.prototype, "name", {
            get: function () { return this._name; },
            set: function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "email", {
            get: function () { return this._email; },
            set: function (email) {
                this._email = email;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    //ABSTRACT CLASSES
    var EmailHolder = (function () {
        function EmailHolder(to, from, cc) {
            this.to = to;
            this.from = from;
            this.cc = cc;
        }
        return EmailHolder;
    }());
    ;
    var EmailRegistration = (function (_super) {
        __extends(EmailRegistration, _super);
        function EmailRegistration(user) {
            _super.call(this, [user.name], "support@website.com", []);
            this.user = user;
        }
        EmailRegistration.prototype.constructMessage = function () {
            return "Dear " + this.user.name + ",\n        Welcome to the website. Please contact support for more information.\n\n        Sincerely,\n        -Don't touch the potato\n        ";
        };
        ;
        EmailRegistration.prototype.sendEmail = function () {
            console.log("sending email to " + this.user.email + "...");
            console.log(this.constructMessage());
        };
        return EmailRegistration;
    }(EmailHolder));
    ;
    var user = new User("lance", "fallon.lance@gmail.com");
    var emailReg = new EmailRegistration(user);
    emailReg.sendEmail();
    var SqlDb = (function () {
        function SqlDb() {
        }
        return SqlDb;
    }());
    ;
    var MySqlDb = (function (_super) {
        __extends(MySqlDb, _super);
        function MySqlDb() {
            _super.apply(this, arguments);
        }
        MySqlDb.prototype.query = function (sql) {
            console.log("querying mysql db: " + sql);
        };
        return MySqlDb;
    }(SqlDb));
    //SINGLETONS
    var DbConnectionWrapper = (function () {
        function DbConnectionWrapper(connectionString) {
            this.connectionString = connectionString;
            this.connected = false;
            this.connectionString = connectionString;
            console.log("trying connection to " + connectionString);
            if (this.connectionString.toLowerCase().indexOf('mysql') > -1) {
                this._connection = new MySqlDb();
                this.connected = true;
                return;
            }
            console.log('unable to connect');
        }
        DbConnectionWrapper.getInstance = function (connectionString) {
            if (!DbConnectionWrapper.instance) {
                DbConnectionWrapper.instance = new DbConnectionWrapper(connectionString);
            }
            return DbConnectionWrapper.instance;
        };
        ;
        ;
        Object.defineProperty(DbConnectionWrapper.prototype, "connection", {
            get: function () { return this._connection; },
            enumerable: true,
            configurable: true
        });
        DbConnectionWrapper.prototype.disconnect = function () {
            console.log("succesfully disconnected from " + this.connectionString);
            return true;
        };
        return DbConnectionWrapper;
    }());
    ;
    var myDb = DbConnectionWrapper.getInstance('mysql://localhost:5432/MyDb;lfallo1;pwd');
    console.log(myDb.connectionString);
    var conn = myDb.connection;
    conn.query("select * from users");
    myDb.disconnect();
})();
(function () {
    /*
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
    
      var j: string = "cat";
      for(var j: number = 0; j < 10; j++){
        //doesnt matter, already broken
      }
      
    
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
    */
})();
(function (currentDate) {
    console.log("app start time: " + currentDate.toUTCString());
    /*
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
    
      //var assignment
      let myName: string = "lance";
    
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
    
          //if all is true, then return the entire array. otherwise, return a random element from it
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
    
      (num1: number = 1, num2: number = num1 + 1): number => num1 + num2;
    
      let jsUtil ={
        setInnerHTMLById : (id: string="id", content: string | number="content"): void => {
          let elem = document.getElementById(id);
          if(typeof elem !== 'undefined' || elem !== null){
            elem.innerHTML = content.toString();
          }
        }
      };
    
      //exercise
      type BankAccount = {money: number, deposit: (value: number) => void, display: ()=>void};
      let bankAcct: BankAccount = {
        money: 2000,
        deposit(value: number): void{
          this.money += value;
        },
        display(): void{
          jsUtil.setInnerHTMLById("totalMoney", `Balance: ${this.money}`);
        }
      };
    
      let myself: {name: string, bankAccount: BankAccount, hobbies: string[], displayUI: ()=> void} = {
        name: "Max",
        bankAccount: bankAcct,
        hobbies: ["Sports", "Music"],
        displayUI: (): void=> {
          myself.bankAccount.display();
          jsUtil.setInnerHTMLById("user", `Name: ${myself.name}`);
          jsUtil.setInnerHTMLById("hobbies", `hobbies: ${myself.hobbies.toString()}`);
        }
      };
    
      myself.bankAccount.deposit(Math.floor(Math.random() * 10000));
      myself.displayUI();
    
      */
})(new Date());
(function () {
    /*
    type StringFormatter = (...p)=>void;
    
    //CLASSES & ENUMS
    
    enum Type {
      SUPERHERO,
      VILLAIN
    };
    
    class SpecialMove{
      private chargeNeeded: number;
      private currentCharge: number;
      private strength: number;
      private description: StringFormatter;
      private didKillDescription: StringFormatter;
    
      constructor(chargeNeeded: number = 3, strength: number = 25, description: StringFormatter, didKillDescription: StringFormatter){
        this.chargeNeeded = chargeNeeded > 0 ? chargeNeeded : 3;
        this.strength = strength > 0 && strength < 100 ? strength : 25;
        this.description = description;
        this.didKillDescription = didKillDescription;
        this.currentCharge = 0;
      }
    
      private isAvailable(){
        return this.currentCharge >= this.chargeNeeded;
      };
    
      addCharge(): void {
        if (this.currentCharge < this.chargeNeeded){
          this.currentCharge += 1;
        }
      };
    
      trySpecial(): [number, StringFormatter, StringFormatter] | boolean{
        if(this.isAvailable()){
          this.currentCharge = 0;
          return [this.strength, this.description, this.didKillDescription]
        }
        return false;
      };
    }
    
    class Fighter{
      private name: string;
      private alias: string;
      private description: string;
      private type: Type;
      private life: number;
      private attackPower: number;
      private special: SpecialMove;
      private attackDescriptions: StringFormatter[];
      private killDescription: StringFormatter;
    
      constructor(name, alias, description, type: Type, attackPower: number = 5, special: SpecialMove, killDescription: StringFormatter, attackDescriptions: StringFormatter[]){
        this.name = name;
        this.alias = alias;
        this.description = description;
        this.type = type;
        this.life = 100;
        this.attackPower = attackPower > 0 && attackPower < 25 ? attackPower : 5;
        this.special = special;
        this.attackDescriptions = attackDescriptions;
        this.killDescription = killDescription;
      };
    
      getAlias(){return this.alias; };
    
      getType(){return this.type; };
    
      getLife(){ return this.life; };
    
      decrementLife(amount: number){
        this.life -= amount;
      };
    
      attack(opponent: Fighter){
        if(this.life <= 0){ return; }
    
        const special = this.special.trySpecial();
        if(special){
          opponent.decrementLife(special[0]);
          if(opponent.getLife() <= 0){
            console.log(special[1](this.getAlias(), opponent.getAlias()));
            console.log(special[2](this.getAlias(), opponent.getAlias()));
            return;
          }
          console.log(special[1](this.getAlias(), opponent.getAlias()));
          return;
        }
    
        const damage = Math.floor(Math.random()*this.attackPower) + 1;
        opponent.decrementLife(damage);
        if(opponent.getLife() <= 0){
          console.log(this.killDescription(this.getAlias(), opponent.getAlias()));
          return;
        }
        const attackDescription = this.attackDescriptions[Math.floor(Math.random() * this.attackDescriptions.length)];
        console.log(`${attackDescription(this.getAlias(), opponent.getAlias())} - ${damage}`);
        this.special.addCharge();
      }
    }
    
    //GENERAL FUNCTIONS
    
    function fight(superhero: Fighter, villain: Fighter){
      if(superhero && villain && superhero.getType() === Type.SUPERHERO && villain.getType() === Type.VILLAIN){
    
        while(superhero.getLife() > 0 && villain.getLife() > 0){
          superhero.attack(villain);
          villain.attack(superhero);
          showSummary(superhero, villain);
        }
    
      }
    };
    
    function showSummary(fighterOne, fighterTwo){
      const summary = `
      Round summary:
      ${fighterOne.getAlias()}: ${fighterOne.getLife()}
      ${fighterTwo.getAlias()}: ${fighterTwo.getLife()}
    
      `
      console.log(summary);
    }
    
    //DATA STORE
    let laser = new SpecialMove(5, 20,
      (...p) => `${p[0]} raises his left hand.  The superhero fires a laser at ${p[1]}, delivering massive damage`,
      (...p) => `As the flash gives way, ${p[1]} is out for the count.  The superhero, ${p[0]}, is once again victorious`);
    let snakeTransformation = new SpecialMove(8, 70,
      (...p) => `Suddenly, ${p[0]} gives a wicked smirk, its eyes turning red as it transforms into a massive serpent.  its tail wraps around ${p[1]} squeezing the life out of the superhero`,
      (...p) => `The crowd watches in terror as ${p[0]}'s jaws open, and the mighty ${p[1]} can only squirm helplessly.  Consumed headfirst, the demonic beast swallows the superhero whole.  Guess that's game over...`);
    
    let CaptainJustice = new Fighter("Unknown",
      "Captain Justice",
      "A made up superhero",
      Type.SUPERHERO, 12, laser,
      (...p)=>`${p[0]} stands hands on hips, over ${p[1]}.  The champion of justice once again victorious`,
      [
        (...p)=>`${p[0]} delivers an upper cut to his ${p[1]}'s jaw`,
        (...p)=>`${p[0]} delivers a combo punch, finishing it off with a spinning kick to ${p[1]}'s mid-section.`,
        (...p)=>`${p[0]} walks confidently toward ${p[1]}, before exploding into ${p[1]} with unbelievable force.`
      ]
    );
    
    let Devil = new Fighter("The Shapeshifter", "ShapeShifter", "A bad guy who can turn into stuff.",
      Type.VILLAIN, 15, snakeTransformation,
      (...p)=>`${p[0]} snarls, as ${p[1]} lays face first on the ground.  Grabbing the crimefighter by the boots, drags the superhero away to be cooked and served for dinner. Poor ${p[1]}`,
      [
        (...p)=>`${p[0]} grabs ${p[1]} by the neck and slams the superhero into the ground`,
        (...p)=>`${p[0]} grabs ${p[1]} by the boots, lifting our spandex-clad warrior off the ground. ${p[0]} violently slams ${p[1]} into the ground, like a rag doll`
      ]
    );
    
    
    //DRIVER
    
    fight(CaptainJustice, Devil);
    */
})();
