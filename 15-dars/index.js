let user = [
  { id: 1, ism: "eshmat", yonalish: "frontend", yosh: 25 },
  { id: 2, ism: "toshmat", yonalish: "backend", yosh: 24 },
  { id: 3, ism: "Ikrom", yonalish: "backend", yosh: 20 },
  { id: 4, ism: "akrom", yonalish: "frontend", yosh: 18 },
  { id: 5, ism: "Ali", yonalish: "Andriod", yosh: 20 },
  { id: 6, ism: "Vali", yonalish: "Backend", yosh: 19 },
];

let a = prompt("id");
let b = prompt("type");
let c = prompt("value");
function updataUser(parametr) {
  const newData = user.map((e) =>
    e.id == parametr.id ? { ...e, [parametr.type]: parametr.value } : e
  );
  console.log(newData);
}
updataUser({ id: a, type: b, value: c });

// setTimeout(callback,time,argument)

// console.log(1);
// console.log(2);

// setTimeout( () => {console.log(3)}, 10);
// setTimeout( () => {console.log(6)}, 0);

// console.log(4);
// console.log(5);

// let count = 0
// let timer = setInterval(()=>{
//     count++
//     console.log(count);
// },0)

// setTimeout(()=>{clearInterval(timer)},10000)

// setInterval(() => {
//   let vaqt = new Date();
//   let yil = vaqt.getFullYear();
//   let oy = vaqt.getMonth();
//   let kun1 = vaqt.getDate();
//   let kun2 = vaqt.getDay();
//   let soat = vaqt.getHours();
//   let minut = vaqt.getMinutes();
//   let sekund = vaqt.getSeconds();

//   if (minut < 10 && sekund < 10) {
//     console.log(`${soat}:0${minut}:0${sekund}`);
//   } else if (minut > 10 || sekund > 10) {
//     console.log(`${soat}:0${minut}:${sekund}`);
//   }

//   //   if (sekund < 10) {
//   //     console.log(`${soat}:${minut}:0${sekund}`);
//   //   }
// }, 1000);
// 1;
// console.log(yil);
// console.log(oy+1);
// console.log(kun1,"may")
// console.log(kun2,"chorshanba");
// console.log(soat);
// console.log(minut);
// console.log(sekund);
