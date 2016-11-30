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
    console.log(Color.RED);
})(new Date());
//# sourceMappingURL=script.js.map