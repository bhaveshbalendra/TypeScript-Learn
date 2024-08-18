"use strict";
//type inference
// age = "hello";
//npm install -g typescript
//tsc --v
//typescript is static typing
//compile time
//tsc index.ts -> tsc index only one compile if index.ts all at once
//tsc config file
// //@ts-check
// tsc --init -> create tsconfig.json file uncomment the "noEmitOnError":true
// or in command tsc --noEmitOnError index.ts
// let age: number = 123;
// const sum = (a?: number, b?: number): number => {
//   return (a || 0) + (b || 0);
// };
// const arr: string[] = ["bhavehs", "vipul", "rahul"];
// type Person = {
//   age: number;
//   names: string;
//   height: number;
// };
// const obj1: {
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
//classes
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const person1 = new Person("bhavesh", 22, ["football", "cricket"]);
console.log(person1);
