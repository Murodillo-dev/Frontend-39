// let user = {
//   name: "Eshmat",
//   surname: "Toshmat",
//   age: 25,
//   "full name": "ali valiyev",
//   age: 30,
// };

// user.manzil = "andijon";
// user.name = 'Akrom'
// console.log(user);

// delete user.surname
// console.log(user);

// let user2 = structuredClone(user)
// console.log(user2);

// let data = {}
// Object.assign(data,user)
// console.log(data);

// Object.freeze(user)
// delete user.name
// console.log(user);

// No1
// object keylarini toping
// let obj={
//     id:1,
//     name:"meta it school"
// }
// // natija:
// // id,name

// for(value in obj){
//     console.log(value);
// }

// no2
// object keylarini valuelarining raqamga tenglarini toping
// let obj = {
//   id: 1,
//   name: "meta it school",
// };

// for (value in obj) {
//   if (typeof obj[value] == "number") {
//     console.log(value);
//   }
// }

// let obj = {
//   id: 1,
//   name: "meta it school",
//   offline: true,
//   online: true,
//   individual: false,
// };

// for (value in obj) {
//   if (typeof obj[value] == "boolean") {
//     console.log(`${value}:${obj[value]}`);
//   }
// }

// let user1 = {
//   name: "Ikrom",
//   surname: "Akrom",
//   say: function () {
//     // console.log(this.surname);
//     // console.log(`hello ${user1.name}`);
//   },
// };
// user.say();

// let user2 = {
//   name: "Ikrom",
//   surname: "Akrom",
//   number: {
//     one: "bir",
//     two: "ikki",
//     three: "uch",
//     count: function () {
//       console.log(this);
//     },
//   },
// };
// user2.number.count()

// let user1 = {
//   name: "Ikrom",
//   surname: "Akrom",
//   say: function () {
//     console.log(this.surname);
//   },
// };

// let data = user1;
// user1 = null;
// data.say();

// let user1 = {
//   name: "Ikrom",
//   surname: "Akrom",
//   age: 25,
//   number: {
//     one: "bir",
//     two: "ikki",
//     three: "uch",
//   },
// };

// let name = 'ali'
// const { name:Ism, surname, age ,number:{one,two,three}} = user1;
// const {one,two,three} = number
// console.log(name);
// console.log(two);

let user1 = {
  name: "Ikrom",
  surname: "Akrom",
  age: 25,
};

console.log({
  ...user1,
  name: "Eshmat",
  surname: "toshmat",
  manzil: "andijon",
});


// console.log({ name: "Ikrom", surname: "Akrom", age: 25,name:'Eshmat' });
