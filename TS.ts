class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    moves(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.moves(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.moves(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
// 122
sam.move(1);
tom.moves(34);
console.log("--------");
class hello{
    hello:string
    constructor(hello:string){
        this.hello=hello
    }
    Hello(youName:string){
        console.log(`${this.hello}${youName}`);
        
    }
}
class names extends hello{
    constructor(hello: string){
        super(hello)
    }
    names(youName: string ){
        super.Hello(youName)
    }
}
let hi=new names("你好")
hi.names("张三")
class Grid{
    static origin={x:0,y:0}
    calculate(point:{x:number;y:number}){
        let xlet=(point.x-Grid.origin.x)
        let ylet=(point.y-Grid.origin.y)
        return Math.sqrt(xlet*xlet+ylet*ylet)/this.scals
    }
    constructor(public scals=1){}
}
let grid1=new Grid() // scals
let grid2=new Grid(5) // scals
console.log(grid1.calculate({x:10,y:10}));
console.log(grid2.calculate({x:10,y:10}));

abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
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
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    constructor(message:string){this.greeting=message}
    greet() {
        if (!this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter("TS");
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hi there!";
let greeter2: Greeter = new greeterMaker("JS");
console.log(greeter2.greet());

interface clock{
    current:Date
}
class Clock implements clock{
    current: Date;
    constructor (h:number,m:number){
        
    }
}