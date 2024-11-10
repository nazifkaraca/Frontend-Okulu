// Local storage - Tarayıcıda veri saklamak için kullanılan bir API'dır
// veri ekleme
// let userName = "Nazif";
// localStorage.setItem("name", userName); // local storage'da tuttuğum ad soldaki
// // veri çağırma
// localStorage.getItem("name"); // local storage'da tuttuğum adı çağır

// let yas = 26;
// localStorage.setItem("age", yas);
// localStorage.getItem("age");
// console.log(typeof age);

// let user = {
//     name: "nazif",
//     age: 26,
//     city: "İzmir",
//     lang: ["Java", "Python", "JavaScript"]
// };

// localStorage.setItem("userDetail", JSON.stringify(user));
// let userDetail = JSON.parse(localStorage.getItem("userDetail"));

// console.log(userDetail);


// Session Storage
// Çerezler 5kb, yerel depo 4kb. 
// çerezlerde expire date var yerel depoda yok.
// let users = [
//     { name: "Nazif", age: 26 },
//     { name: "Mehmet", age: 30 },
//     { name: "Ali", age: 23 },
// ]

// localStorage.setItem("users", JSON.stringify("users"));
// let userDetail = JSON.parse(localStorage.getItem("userDetail"));

// userDetail.map((user) => {
//     document.write(`<p>${user.name} - ${user.age}</p>`);
// });


// let users = [
//     { name: "Nazif", age: 26 },
//     { name: "Mehmet", age: 30 },
//     { name: "Ali", age: 23 },
// ]

// localStorage.setItem("users", JSON.stringify("users"));
// let userDetail = JSON.parse(localStorage.getItem("userDetail"));

// userDetail.map((user) => {
//     document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// let filteredUsers = userDetail.filter((user) => user.age < 26);

// filteredUsers.map((user) => {
//     document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// const numbers = [2, 53, 21, 23, 56, 85];
// const lang = ["Python", "Java", "C++", "JavaScript"];

// const result = numbers.reduce((toplam, number) => {
//     return toplam + number;
// })

// Spread Operator
// İki diziyi yayıyor.
// const result = [...lang, ...numbers];
// console.log(result)

// langs = [...lang, "C"];
// console.log(langs);


// Destructing
let user = {
    name: "nazif",
    age: 26,
    city: "İzmir",
    lang: ["Java", "Python", "JavaScript"]
};

let { name, ...geriKalanlar } = user;

console.log(user)