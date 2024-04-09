// let son1 = 6
// let son2 = 10
// let son3 = 15
// let result = son1+son2+son3
// let natija = (result%2==0) ? 'Juft son': "Toq son"
// console.log(natija);

//                   false       ||        false     ||  true =  true
// let result1 = ((true && false) || !(false || true) || !false)

//                        false   ||         false    &&         false  =  false
// let result2 = (!false && !true || (false && false) && (true && (!true)))

//                 false   ||     true  &&    true ||  true = true
// let result3 = ((1 && 0) || !(0 && 0) && !false || !(!true))

// false || (false && true) = false;
// let result4 = !(6 != 5) || (6 === "6" && (!1 || !0));

//                             true              &&               false                 ||              false              = false
// let result5 = ((typeof true === typeof false) && (typeof null === typeof undefined) || !(typeof null == typeof undefined))

//                      true   &&       false ||             true    == false
// let result6 = !(!({} == {}) && !({} != {}) || (typeof {} == typeof {}))

// false   !=    true       &&         false  = false

// let result7 = isNaN("12") != isNaN("12a") && !isNaN("15s");
// console.log(result7);
// console.log(isNaN("12"));

let srt = "Meta it school";
// console.log(srt.toLowerCase());  kichik harf qiladi
// console.log(srt.toUpperCase());  katt harf qiladi
// console.log(srt[4]);  harfni olib beradi
// console.log(srt.charAt(2)); harfni olib beradi
// console.log(srt.at(-5));  harfni olib beradi
// console.log(srt.length);  uzunligini sanab beradi
// console.log(srt.indexOf('t',7));  nechanchi orinda turganini aytadi
// console.log(srt.padEnd(17,'.')); oxiriga nuqta qoyib beradi
// console.log(srt.slice(0,-4));  kesib beradi
// console.log(srt);
// console.log(srt.trim()); bosh joylarni olib tashlaydi
// console.log(srt.replace('t',"o'"));  almashtirib beradi
// console.log(srt.includes('meta'));  ichiga oladimi search qiladi
// console.log(srt.startsWith('Meta it school')); bilan boshlanadimi
// console.log(srt.endsWith('l'));
// console.log(srt.split('.'));  massiv qilib beradi

let ism = prompt("ismi kiriting");
let first = ism.charAt().toUpperCase();
let qolgan = ism.slice(1).toLowerCase();
console.log(first + qolgan);
