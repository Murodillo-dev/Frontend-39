// let hello=function (){
//     console.log('hello');
// }

// for (let i =1; i <=10; i++) {
// console.log(`
// ${i} lik karra jadvali`);
//   for (let j = 1; j <= 10; j++) {

//     console.log(`${i}*${j} = ${i*j}`);
//   }
// }

// let start = 1
// let end = 10
// for (let i = start; i <= end; i++) {

//   for (let j = start; j <=i; j++) {
//     console.log(i);
//   }
// }

// let sum = 0
// for (let i = 1; i <= 4; i++) {
// console.log(i);
// console.log(`sum:${i**2}+${sum} = ${sum+=i**2}`);
// sum+=i**i
// }
// console.log(sum);

// let sum = 1
// for (let i = 1; i <= 10; i++) {
// //   console.log(`${1}+${1 / i}= ${1 + (1 / i)}`);
//   sum+= ((1/i))
// }
// console.log(sum);

// let sum = 1;
// let n = 1;
// for (let i = 1; i <= 10; i++) {
//   sum += (n + i) ** 2;
// }
// console.log(sum);

// say()
// function say(){
//     console.log('hello function Decloration');
// }

// let salom = function(){
//     console.log("Hello function Expression");
// }
// salom()

// const hello = () =>{
//     console.log('Hello Arrow Function');
// }
// hello()
// function say(parametr){

//     console.log('hello '+parametr);
// }

// say('Eshmat')
// say('Toshmat')
// say('Ali')
// say('Vali')

// const user = (ism , familiya , yosh) =>{
//     console.log(`ism: ${ism}`);
//     console.log(`familiya: ${familiya}`);
//     console.log(`yosh: ${yosh}`);
//     console.log('==========');
// }
// user('Toshmat',"Eshmatov")
// user('Akrom',25)

// const user = (ism='ali' , familiya='valiyev') =>{
//     console.log(`ism: ${ism}`);
//     console.log(`familiya: ${familiya}`);
// }
// user()

function ortacha(a, b, c, d) {
  return (a + b + c + d) / 4;
}
let a = ortacha(4, 5, 3, 3);


function ortacha1(a, b, c, d) {
  return (a + b + c + d) / 4;
}
let b = ortacha(4, 5, 5, 5);

console.log((a+b)/2);
