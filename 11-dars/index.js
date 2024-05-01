// console.log(number.toString());
// console.log(number.join('/'));

// console.log(pc);
// pc.pop()
// pc.shift()
// pc.push('hp')
// pc.splice(1,2,'macbook')
// console.log(pc.concat(number));

//filter

// let number = [5, 8, 71, 12, 35, 50];
// let pc = ["acer", "lenovo", "asus", "dell"];
// let res = number.filter((value) => {
//   return value>12;
// });
// console.log(res);

// let res = pc.filter(value => value!='acer')
// console.log(res);

// let user = [
//   { id: 1, ism: "eshmat", yosh: 25, yonalish: "frontend" },
//   { id: 2, ism: "toshmat", yosh: 20, yonalish: "backend" },
//   { id: 3, ism: "ali", yosh: 19, yonalish: "backend" },
//   { id: 4, ism: "vali", yosh: 24, yonalish: "frontend" },
//   { id: 5, ism: "ikrom", yosh: 22, yonalish: "android" },
//   { id: 6, ism: "akrom", yosh: 25, yonalish: "android" },
// ];

// let res = user.filter((value) => {
//   return value.yosh > 20 && value.yosh<25;
// });
// console.log(res);

// let res = user.filter((value) => {
//   return value.yonalish != "frontend";
// });
// console.log(res);

//fill
// let number = [5, 8, 71, 12, 35, 50];
// let res = number.fill('salom',1,3)
// console.log(res);

// let number = [1, 8, 5, 3, 9, 7, 15, 25, 12, 30, 24];
// let pc = ["acer", "lenovo", "asus", "Dell"];

// let res = number.sort((a, b) => a-b);
// console.log(res);

// let res = pc.sort((a,b)=> a.localeCompare(b))
// console.log(res);

// let user = [
//   { id: 1, ism: "eshmat", yosh: 25, yonalish: "frontend" },
//   { id: 2, ism: "toshmat", yosh: 20, yonalish: "backend" },
//   { id: 3, ism: "ali", yosh: 19, yonalish: "backend" },
//   { id: 4, ism: "vali", yosh: 24, yonalish: "frontend" },
//   { id: 5, ism: "ikrom", yosh: 22, yonalish: "android" },
//   { id: 6, ism: "akrom", yosh: 25, yonalish: "android" },
// ];

// let res = user.sort((a,b)=> b.yosh-a.yosh )
// console.log(res);

// let res = user.sort((a,b)=> a.ism.localeCompare(b.ism) )
// console.log(res);

// let resFind = number.find((value) => {
//   return value==5;
// });
// console.log(resFind);

// let resFilter = number.find((value) => {
//   return value==5;
// });
// console.log(resFilter);

// let res = number.findIndex((value)=>{
//     return value==5
// })
// console.log(res);

//forEach
// let user = [
//   { id: 1, ism: "eshmat", yosh: 25, yonalish: "frontend" },
//   { id: 2, ism: "toshmat", yosh: 20, yonalish: "backend" },
//   { id: 3, ism: "ali", yosh: 19, yonalish: "backend" },
//   { id: 4, ism: "vali", yosh: 24, yonalish: "frontend" },
//   { id: 5, ism: "ikrom", yosh: 22, yonalish: "android" },
//   { id: 6, ism: "akrom", yosh: 25, yonalish: "android" },
// ];

// let name = [];
// let res = user.forEach((element) => {
//   // if (element.yosh==25) {
//   //     name.push(element.ism)
//   // }

// //   if (element.yonalish == "backend") name.push(element.ism);
// });
// console.log(name);
// console.log(res);

// let res = user.map((value)=>{
//     return (value.ism);
// })
// console.log(res);

// let res = user.map(value=> {
//     if (value.yosh>20) {
//         return value.yonalish
//     }
// })
// console.log(res);

// let user = [
//   { id: 1, ism: "eshmat", yosh: 25, yonalish: "frontend" },
//   { id: 2, ism: "toshmat", yosh: 20, yonalish: "backend" },
//   { id: 3, ism: "ali", yosh: 19, yonalish: "backend" },
//   { id: 4, ism: "vali", yosh: 24, yonalish: "frontend" },
//   { id: 5, ism: "ikrom", yosh: 22, yonalish: "android" },
//   { id: 6, ism: "akrom", yosh: 25, yonalish: "android" },
// ];

// let res = user.forEach((value) => {
//   if (value.id>3) {
//     console.log(value.ism);
//   }
// });
