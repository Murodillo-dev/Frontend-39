// let user = {
//   ism: "Ali",
//   familiya: "Valiyev",
//   yosh: 25,
//   manzil: "andijn",
//   yonalish: {
//     one:'frontend',
//     two:'backend',
//     number:function(){
//         console.log(this);
//     }
//   },
// };
// user.yonalish.number()

// let ism = 'eshmat'
// const { ism:Name, familiya, manzil, yonalish:{one,two}, yosh } = user;
// const {one,two} = yonalish
// console.log(one);

// let user = {
//   ism: "Ali",
//   familiya: "Valiyev",
//   yosh: 25,
//   manzil: "andijn",
// };
// console.log({...user,familiya:'toshmat',age:30});

// let number = [45,25,85,24,125,35]
let mixed = [function () {}, undefined, true, false, null, "Eshmat"];
console.log(mixed[1]);
console.log(mixed.length);

// let names = [
//   "ali",
//   "vali",
//   "akrom",
//   "ikrom",
//   "eshmat",
//   "toshmat",
//   "baxtiyor",
//   "ixtiyor",
// ];
// console.log(names[names.length-2]);
// console.log(Array.isArray(names));
// console.log(number.toString());
// console.log(number.join('num'));

// console.log(names);
// names.push('Jasur','akmal')
// names.pop()
// names.shift()
// names.unshift(true,false)
// names.splice(2,3)
// names.splice(2,0,'baxrom','akmal')
// console.log(names.reverse());
// console.log(names.concat(number));

// let number = [45,25,85,24,125,35]
// console.log(number);
// number.splice(2,1)
// number.shift()
// number.splice(2,0,55)
// number.push(100)
// console.log(number);

// let toq = [];
// let juft = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     juft.push(i);
//   }
//   if (i % 5 == 0) {
//     toq.push(i);
//   }
// }
// console.log(juft);
// console.log(toq);

// let uch = [];
// for (let i = 1; i <= 10000; i++) {
//   let tasodifiy = Math.trunc(Math.random() * 100);
//   if (tasodifiy === 102) {
//     uch.push(tasodifiy);
//   }
// }
// console.log(uch);
// console.log(uch.length);

// let names = [
//   "ali",
//      "vali",
//         "akrom",
//   "ikrom",
//   "eshmat",
//   "toshmat",
//   "baxtiyor",
//   "ixtiyor",
// ];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i].toUpperCase());
// }
