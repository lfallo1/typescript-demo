(function(){

  class Person {

    protected static info: string = "This is the person class";
    static showInfo(){
      console.log(Person.info);
    }

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

    private _suit: string;
    private _alias: string;
    private _powerLevel: number;

    constructor(name: string, username: string, suit: string = "blue suit, with red boots, red cape, and gold S stamped on his chest", alias: string="Superman", powerLevel: number = 5000){
      super(name, username);
      this._suit = suit;
      this._alias = alias;
      this._powerLevel = powerLevel;
    };

    get suit(){console.log('in suit getter');return this._suit;}
    get alias(){console.log('in alias getter');return this._alias;}
    get powerLevel(){console.log('in powerLevel getter');return this._powerLevel;}

    set suit(suit: string){
      if(suit.length < 20){
        this._suit = suit;
      }
    };

    set alias(alias: string){
      if(alias.length < 20){
        this._alias = alias;
      }
    }

    set powerLevel(powerLevel: number){
      if(powerLevel < 2000 && powerLevel > 0){
        this._powerLevel = powerLevel;
      }
    }

    print(): void{
      console.log(`${this.name} (aka, ${this.alias}) is ${this.powerLevelText()} with a power level of ${this._powerLevel}. This superhero wheres a ${this._suit}`);
    }

    private powerLevelText(): string{
      if(this._powerLevel > 4000){
        return "an elite defender of justice.";
      }
      return "a novice crimefighter moving up the ranks."
    }
  };

  let superman = new Superhero("Clark Kent", "superman1");
  superman.print();
  superman.print();
  superman.powerLevel = 2001;
  superman.print();
  superman.powerLevel = 1999;
  superman.print();

  Superhero.showInfo();


  class User{
    private _name: string;
    private _email: string;

    get name(){return this._name;}
    get email(){return this._email;}
    set name(name: string){
      this._name = name;
    }
    set email(email: string){
      this._email = email;
    }

    constructor(name: string, email: string){
      this.name = name;
      this.email = email;
    }
  }


//ABSTRACT CLASSES
  abstract class EmailHolder{
    protected to: string[];
    protected from: string;
    protected cc: string[];

    constructor(to: string[], from: string, cc: string[]){
      this.to = to;
      this.from = from;
      this.cc = cc;
    }

    abstract sendEmail(): void;
  };

  class EmailRegistration extends EmailHolder{

    private user: User;

    private constructMessage(){
      return `Dear ${this.user.name},
        Welcome to the website. Please contact support for more information.

        Sincerely,
        -Don't touch the potato
        `
    };

    constructor(user: User){
      super([user.name], "support@website.com", []);
      this.user = user;
    }

    sendEmail(): void{
      console.log(`sending email to ${this.user.email}...`);
      console.log(this.constructMessage());
    }
  };

  let user = new User("lance", "fallon.lance@gmail.com");
  let emailReg = new EmailRegistration(user);
  emailReg.sendEmail();


  abstract class SqlDb{
    abstract query(sql: string);
  };

  class MySqlDb extends SqlDb{
    query(sql: string){
      console.log(`querying mysql db: ${sql}`);
    }
  }

  //SINGLETONS
  class DbConnectionWrapper{

    private static instance: DbConnectionWrapper;
    private connected: boolean = false;
    private _connection: SqlDb;

    static getInstance(connectionString: string){
      if(!DbConnectionWrapper.instance){
        DbConnectionWrapper.instance = new DbConnectionWrapper(connectionString)
      }
      return DbConnectionWrapper.instance;
    };

    private constructor(public readonly connectionString: string){
      this.connectionString = connectionString;
      console.log(`trying connection to ${connectionString}`);
      if(this.connectionString.toLowerCase().indexOf('mysql') > -1){
        this._connection = new MySqlDb();
        this.connected = true;
        return;
      }
      console.log('unable to connect');
    };

    get connection(){return this._connection;}

    disconnect(): boolean{
      console.log(`succesfully disconnected from ${this.connectionString}`);
      return true;
    }
  };

  let myDb = DbConnectionWrapper.getInstance('mysql://localhost:5432/MyDb;lfallo1;pwd');
  console.log(myDb.connectionString);
  let conn = myDb.connection;
  conn.query("select * from users");
  myDb.disconnect();

})();
