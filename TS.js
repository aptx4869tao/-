var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.moves = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.moves.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.moves.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move(1);
tom.moves(34);
console.log("--------");
var hello = /** @class */ (function () {
    function hello(hello) {
        this.hello = hello;
    }
    hello.prototype.Hello = function (youName) {
        console.log("".concat(this.hello).concat(youName));
    };
    return hello;
}());
var names = /** @class */ (function (_super) {
    __extends(names, _super);
    function names(hello) {
        return _super.call(this, hello) || this;
    }
    names.prototype.names = function (youName) {
        _super.prototype.Hello.call(this, youName);
    };
    return names;
}(hello));
var hi = new names("你好");
hi.names("张三");
var Grid = /** @class */ (function () {
    function Grid(scals) {
        if (scals === void 0) { scals = 1; }
        this.scals = scals;
    }
    Grid.prototype.calculate = function (point) {
        var xlet = (point.x - Grid.origin.x);
        var ylet = (point.y - Grid.origin.y);
        return Math.sqrt(xlet * xlet + ylet * ylet) / this.scals;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(); // scals
var grid2 = new Grid(5); // scals
console.log(grid1.calculate({ x: 10, y: 10 }));
console.log(grid2.calculate({ x: 10, y: 10 }));
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// class Greeter{
//     greeting:string
//     constructor(message:string){
//         this.greeting=message
//     }
//     greet(){
//         return "Hello,"+this.greeting
//     }
// }
// let greeter:Greeter
// greeter=new Greeter('World')
// console.log(greeter.greet())
/*  */
// class Greeter1{ 
//     greeting:string
//     static msg="Hello,word"
//     constructor(message:string){this.greeting=message}
//     greet(){
//         if(this.greeting){
//             return "Hello,"+this.greeting
//         }else{
//             return Greeter1.msg
//         }
//     }
// }
// let greeter1:Greeter1=new Greeter1("TS")
// let greeter2:typeof Greeter1=Greeter1
// greeter2.msg="Hello,JS"
// let greeter3:Greeter1=new greeter2("")
// console.log(greeter3.greet());
/*  */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (!this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter("TS");
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hi there!";
var greeter2 = new greeterMaker("JS");
console.log(greeter2.greet());
console.log("++++++++++++");
// let a=[]
// let b={}
// let c=undefined
// console.log(a.__proto__.__proto__);
// console.log(b.__proto__);
// console.log(c.__proto__);
// console.log(a.__proto__.__proto__===c.__proto__.__proto__);
var aa=function() {
    console.log(111);
}
aa(2222)