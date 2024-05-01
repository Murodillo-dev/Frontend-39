// let number = [1, 5, 8, 86, 12, 35, 50, 90, 20, 52, 75, 125, 200, 225];

// console.log(number.fill(15,2,4));

// let res = number.filter((parametr) => {
//   return parametr>=12 && parametr<=125;
// });
// console.log(res);

// let res=number.sort((a,b)=>b-a)
// console.log(res);

// let user = [
//   { id: 1, ism: "eshmat", yonalish: "frontend" },
//   { id: 2, ism: "toshmat", yonalish: "backend" },
//   { id: 3, ism: "ikrom", yonalish: "backend" },
//   { id: 4, ism: "akrom", yonalish: "frontend" },
// ];

// let res = user.filter((value) => {
//   return value.id == 3;
// });
// console.log(res);

// let res = user.sort((a,b)=> b.ism.localeCompare(a.ism))
// console.log(res);

// let front = [];
// let back = [];

//forEach
// let res = user.forEach((value)=>{
//     if (value.yonalish == 'frontend') {
//         front.push(value.ism)
//     }
//     if (value.yonalish == 'backend') {
//         back.push(value.ism)
//     }
// })

//map
// console.log(front);
// console.log(back);
// console.log(res);

// let res = user.map((value, index) => {
//   console.log(index + 1);
// });
// console.log(res);

//for loop
// let user = [
//   { id: 1, ism: "eshmat", yonalish: "frontend" },
//   { id: 2, ism: "toshmat", yonalish: "backend" },
//   { id: 3, ism: "ikrom", yonalish: "backend" },
//   { id: 4, ism: "akrom", yonalish: "frontend" },
// ];

// for (let index = 0; index < user.length; index++) {
//   console.log(user[index].ism);
// }

// let count = 0;
// for (let i = 0; i < number.length; i++) {
//   count += number[i];
// }
// console.log(count);

//reduce
// let number = [1, 3, 5, 4, 10, 12];
// let res = number.reduce((sum, current, index) => {
//   console.log(`${sum} + ${index} = ${sum + index}`);
//   return sum + index;
// }, 0);
// console.log(res);

//flat
// let number = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11], 12, 13], 14, 15];
// console.log(
//   number.flat(Infinity).reduce((sum, current) => {
//     return (sum += current);
//   }, 0)
// );
// console.log(number[4][4][1]);

//dectructure
let pc = ["acer", "asus", "lenovo", ["rog gaming", "predator"]];
const [one, two, three, four] = pc;
const [five, six] = four;
console.log(five);
