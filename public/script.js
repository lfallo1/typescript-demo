(function (currentDate) {
    console.log("app start time: " + currentDate.toUTCString());
    function User(name, age, dob) {
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.active = true;
    }
    User.prototype.showInfo = function () {
        return this.name + " is " + this.age + " years old, and was born on " + this.dob.toString();
    };
    var lance = new User("Lance", 30, new Date(1986, 9, 12));
    console.log(lance.showInfo());
    //function return types
    function testFunction(num) {
        return "Your number is " + num.toString();
    }
    //function assignment
    var myFunc = testFunction;
    console.log(myFunc(34));
    //arrays
    var arr = ["dog", 24];
    arr = [false];
    var arr2 = [1, 2, 3, 4, 5, 6];
    arr2.push(7);
    //tuples
    var address = ['Westmoreland Avenue', 7919, "21234"];
    console.log(address);
    //enum
    var Color;
    (function (Color) {
        Color[Color["RED"] = 0] = "RED";
        Color[Color["GREEN"] = 1] = "GREEN";
        Color[Color["BLUE"] = 2] = "BLUE";
    })(Color || (Color = {}));
    ;
    console.log(Color.BLUE);
    var myObject = {
        age: 30,
        name: "Lance"
    };
    console.log(myObject);
    var complexObj = {
        data: [1, 2, 3, 4, 5],
        output: function (all) {
            return all ? this.data : this.data[Math.floor(Math.random() * this.data.length)];
        }
    };
    var showAll = new Date().getTime() % 2 === 0;
    console.log(complexObj.output(showAll));
    //dont think typeof does anything special / unique to TypeScript
    var myNumber = [1, 38];
    if (typeof myNumber === "number[]") {
        console.log("myNumber is a number array");
    }
    //never
    function throwError(msg) {
        throw new Error("error: " + msg);
    }
    //null checks
    var nonNullNum = 34;
    // nonNullNum = null; //would throw error if strictNullChecks are turned on
    var canBeNull;
    canBeNull = null;
    var bankAcct = {
        money: 2000,
        deposit: function (value) {
            this.money += value;
        }
    };
    var myself = {
        name: "Max",
        bankAccount: bankAcct,
        hobbies: ["Sports", "Music"]
    };
    myself.bankAccount.deposit(1000);
    console.log(myself);
})(new Date());
