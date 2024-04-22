// hello()

// function hello() {
//   console.log("Funtion decloration");
// }

// const say1 = () => {
//   console.log("Arrow function");
// };

// say2()
// let say2 = function () {
//     console.log("function expression");
// };

// let a
//

// function user(){
//     return 5+2
// }

// let a = user()
// console.log(a);

// function user(ism,familiya='vali'){
//     console.log(ism);
//     console.log(familiya);
// }
// user('ali',2024)

// let user = {
//   // key:value
//   ism: "Eshmat",
//   familiya: "Toshmat",
//   yosh: 25,
//   "full name": "Ali Valiyev",
//   0: 455,
// };

// let name = "ism";

// console.log(user.name);
// console.log(user["name"]);
// console.log(user[name]);
// console.log(user[0]);
// console.log(user["0"]);

// console.log(user.ism);
// console.log(user['full name']);

// let user2 = {}
// user2.name = 'Akrom'
// user2.surname = 'Ikromov',
// user2.age = 25

// let user = {
//   ism: "Eshmat",
//   familiya: "Toshmat",
//   yosh: 25,
//   ism: "Vali",
// };
// let user2 = structuredClone(user)
// console.log(user2==user);

// let user = {
//   ism: "Eshmat",
//   familiya: "Toshmat",
//   yosh: 25,
//   ism: "Vali",
// };
// let user2 = {};
// Object.assign(user2,user);
// console.log(user2);

// let user = {
//   ism: "Eshmat",
//   familiya: "Toshmat",
//   yosh: 25,
//   ism: "Vali",
// };
// delete user.ism;
// console.log(user);

// user.ism = "Akrom";
// Object.freeze(user);
// delete user.yosh;
// console.log(user);

// let data = {
//   ism: "Omadbek",
//   familiya: "Usmonov",
//   yosh: 15,
//   manzil: {
//     viloyat: "Andijon",
//     tuman: "Asaka",
//     maxalla: "O'zbekiston",
//     contact: {
//       ums: {
//         "88": 45464,
//         "97": 5454545,
//       },
//     },
//   },
// };

let user = {
  ism: "Eshmat",
  familiya: "Toshmat",
  yosh: 25,
  manzil: "andijon",
};

for (let value in user) {
  console.log(`${value}:${user[value]}`);
}
