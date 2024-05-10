let user = [
  { id: 1, ism: "eshmat", yonalish: "frontend", yosh: 25 },
  { id: 2, ism: "toshmat", yonalish: "backend", yosh: 24 },
  { id: 3, ism: "Ikrom", yonalish: "backend", yosh: 20 },
  { id: 4, ism: "akrom", yonalish: "frontend", yosh: 18 },
  { id: 5, ism: "Ali", yonalish: "Andriod", yosh: 20 },
  { id: 6, ism: "Vali", yonalish: "Backend", yosh: 19 },
];


//Delete function
// function deleteUser(data){
// let res = user.filter(value => value.id != data)
// user = res
// }
// deleteUser(5)
// deleteUser(3)
// console.log(user);

// create function
// function createUser(ism, yonalish) {
//   let res = { id: user.length + 1, ism, yonalish };
//   user = [...user, res];
// }
// createUser("Xusan", "backend");
// createUser("Omadbek", "Frontend");
// console.log(user);

//update function
// function updateUser(data) {
//   let res = user.map((value) =>
//     value.id == data.id ? { ...value, [data.type]: data.newData } : value
//   );
//   user = res;
// }

// updateUser({ id: 4, type: "yonalish", newData: "Javohir" });
// updateUser({ id: 2, type: "yonalish", newData: "Motion Design" });
// console.log(user);

// sort function
// function sortByAge() {
//   let res = user.sort((a, b) => a.yosh - b.yosh);
//   user = res;
// }
// sortByAge();
// console.log(user);

// function sortByName() {
//   let res = user.sort((a, b) => a.ism.localeCompare(b.ism));
//   user = res;
// }
// sortByName();
// console.log(user);

//search function
// function searchUser(data){
// let res = user.filter(value=> value.ism.toLowerCase().includes(data.toLowerCase()))
// user = res
// }
// searchUser('akrom')
// console.log(user);
