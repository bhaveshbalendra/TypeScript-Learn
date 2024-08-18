//type inference
// age = "hello";
//npm install -g typescript
//tsc --v
//typescript is static typing
//compile time

//tsc index.ts -> tsc index only one compile if index.ts all at once
//node index

//tsc config file
// //@ts-check
// tsc --init -> create tsconfig.json file uncomment the "noEmitOnError":true
// or in command tsc --noEmitOnError index.ts
// tsc -watch or tsc -w

// {
//   "compilerOptions": {
//     "target": "es5",
//     "module": "commonjs",
//     "strict": true,
//     "esModuleInterop": true,
//     "noEmitOnError": true
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "jsx": "react",

//   },
//   "include": ["src"],
//   "exclude": ["node_modules", "dist"]
// }

// structure
// [(dist(file.js))(src(file.ts))(index.html)(tsconfig.json)]
//in index.html put the script tag as type module and src ad ./dist/file.js

// let age: number = 123;

// const sum = (a?: number, b?: number): number => {
//   return (a || 0) + (b || 0);
// };

//const arr: string[] = ["bhavesh", "vipul", "rahul"];
//const numbers: number[] = [1, 2, 3, 4, 5];

// interface Person {
//   name: string;
//   age: number;
// }

// const people: Person[] = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
// ];

// type Person = {
//   age: number;
//   names: string;
//   height: number;
// };

//const arr: Array<string> = ["bhavesh", "vipul", "rahul"];

// interface Person {
//   name: string;
//   age: number;
// }

// const mixedArray: (string | number | Person)[] = [
//   "bhavesh",
//   42,
//   { name: "vipul", age: 30 },
//   "rahul",
//   { name: "alice", age: 25 }
// ];

// tuples
//const tuple: [string, number, boolean] = ["bhavesh", 42, true];
// A tuple with an optional number
//let optionalTuple: [string, number?]=["Charlie"];

// A tuple with a string and a variable number of numbers
//let restTuple: [string, ...number[]] = ["Dave", 1, 2, 3, 4];

// Function returning a tuple
// function getPerson(): [string, number] {
//   return ["Eve", 22];
// }

// Destructuring the returned tuple
//let [personName, personAge] = getPerson();

//objects

// interface Car {
//   make: string;
//   model: string;
//   year?: number;
//   location?: {
//     city: string;
//     country: string;
//   };
//   greet?: () => void;
// }

// interface GreetFunction {
//   (name: string, age: number): string;
// }

// interface Book {
//   readonly title: string;
//   author: string;
// }

// const greet: GreetFunction = (name, age) => {
//   return `Hello, my name is ${name} and I am ${age} years old.`;
// };

// console.log(greet("Alice", 30)); // Output: Hello, my name is Alice and I am 30 years old.

// const myCar: Car = {
//   make: "Toyota",
//   model: "Camry",
// };

//If you need an object with dynamic keys, you can use index signatures:
// interface StringDictionary {
//   [key: string]: string;
// }

// const dictionary: StringDictionary = {
//   hello: "world",
//   foo: "bar",
// };

// const obj1: {`
//   age: number;
//   names: string;
//   height: number;
// } = { age: 10, names: "bhavesh", height: 20 };

// const obj2: Person = { age: 10, names: "bhavesh", height: 20 };

// console.log(sum(2, 3));
// console.log(age);

// call signature

// type Person = {
//   age: number;
//   names: string;
//   height?: number;
//   origin: (country: string) => string;
// };

// const person1: Person = {
//   age: 20,
//   names: "bhavesh",
//   height: 10,
//   origin: (country): string => `hello there ${country}`,
// };

// const introduction: (person1: Person) => string = (person1): string => {
//   const { names, age } = person1;
//   return `Welcome My name is ${names}, I am ${age}yrs old`;
// };

//Enums

// enum Role {
//   user = "user",
//   admin = "admin",
// }

// type LoginDetails = {
//   name?: string;
//   email: string;
//   password: string;
//   role: Role;
// };

// const user: LoginDetails = {
//   name: "Bhavesh",
//   email: "bhaveshbalendra@gmail.con",
//   password: "1234abcd",
//   role: Role.user,
// };

// const isAdmin: (user: LoginDetails) => string = (user): string => {
//   const { name, role } = user;
//   return role === "admin" ? `This is ${role}` : "This is not Admin";
// };

// console.log(isAdmin(user));

//tuples fixed size array

// type PersonInfo = readonly [string, number, boolean];

// const displayPersonInfo: (person1: PersonInfo) => string = (
//   person1: PersonInfo
// ): string => {
//   const [name, age, licence] = person1;
//   return `${name} ${age} ${licence}`;
// };
// const person1: PersonInfo = ["bhavesh", 123, true];

// console.log(displayPersonInfo(person1));

//Unions using pipe |
// const userInput = (values: string | number): string | number => {
//   if (typeof values === "number") {
//     return values * 2;
//   } else if (typeof values === "string") {
//     return values;
//   } else {
//     throw new Error("no data");
//   }
// };

// console.log(userInput(10));

// console.log(userInput("subscribed"));

// in union one full type should be used with mix of other types one properties or several eg
// type Person = {
//   name: string;
//   age: number;
// };

// type Emp = {
//   empNo: number;
//   empPost: string;
// };

// type EmployeeDetails = Person | Emp;

// const employee: EmployeeDetails = {
//   name: "bhavesh",
//   age: 34,
//   empNo: 23,
//   empPost: "Developer",
// };

// const myDetails = (employee: EmployeeDetails): {} => {
//   return {
//     name: employee.name,
//     age: employee.age,
//     empNo: employee.empNo,
//     empPost: employee.empPost,
//   };
// };

// const employee = {
//   name: "bhavesh",
//   age: 34,
//   empNo: 23,
//   empPost: "Developer",
// } as EmployeeDetails; type assertion

// console.log(myDetails(employee));

// intersection both compulsory
// type Person = {
//   name: string;
//   age: number;
// };

// type Emp = {
//   empNo: number;
//   empPost: string;
// };

// type EmployeeDetails = Person & Emp;

// const employee: EmployeeDetails = {
//   name: "bhavesh",
//   age: 34,
//   empNo: 23,
//   empPost: "Developer",
// };

// const myDetails = (employee: EmployeeDetails): {} => {
//   return {
//     name: employee.name,
//     age: employee.age,
//     empNo: employee.empNo,
//     empPost: employee.empPost,
//   };
// };

// console.log(myDetails(employee));

// type User = {
//   name: string;
//   age: number;
// };

// type MyLocation = {
//   city: string;
//   country: string;
// };

// const user: User = {
//   name: "bhavesh",
//   age: 22,
// };

// const myLocation: MyLocation = {
//   city: "raipur",
//   country: "india",
// };
// const createUserProfile = (
//   user: User,
//   myLocation: MyLocation
// ): { name: string; age: number; city: string; country: string } => {
//   return { ...user, ...myLocation };
// };

// const myCompleteInfo: User & MyLocation = createUserProfile(user, myLocation);

// console.log(myCompleteInfo);

//Generics

// function logAndReturn<Type>(value: Type): Type {
//   return value;
// }

// const numberResult: number = logAndReturn<number>(42);
// const stringResult: string = logAndReturn<string>("hello");

// console.log(numberResult, stringResult);

// function logAndReturn<T, U>(a: T, b: U): string {
//   return `${a} ${b}`;
// }

// const numberResult: string = logAndReturn<number, number>(42, 23);
// const stringResult: string = logAndReturn<string, number>("hello", 23);

// console.log(numberResult, stringResult);

// type Result<T> = {
//   success: boolean;
//   data: T;
// };

// const stringResult: Result<string> = { success: true, data: "Hello, World!" };
// const numberResult: Result<number> = { success: true, data: 42 };

// console.log(stringResult); // Output: { success: true, data: 'Hello, World!' }
// console.log(numberResult); // Output: { success: true, data: 42 }

//classes

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const person1: Person = new Person("bhavesh", 22, ["football", "cricket"]);
console.log(person1);
