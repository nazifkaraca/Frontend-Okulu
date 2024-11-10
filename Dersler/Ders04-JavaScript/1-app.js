// JS Giriş
// console.log("Merhaba JS")

// Variables
// Not type-safe, wecan assign a string to "a"
// var a = 10; // Number
// var b = 3.14; // Number
// var c = "JavaScript"; // String
// console.log(a);
// console.log(typeof a);
// console.log(a, b, c);


// var firstNumber = 10;
// var secondNumber = "20";
// // + makes concat, - makes operation
// var result2 = firstNumber + secondNumber;
// var result = firstNumber - secondNumber;
//console.log(result);
// console.log(typeof result);


// Değişkenlere atama sonradan yapıldığında undefined verirken,
// fonksiyonlarda sonradan tanımlama yapabiliyoruz.
// derleme ve çalıştırma aşamaları var js'nin.
// bir değişken ve fonksiyon var, ikisini de belleğe atıyor
// değişkeni undefined atarken, fonksiyonlarda olduğu gibi tutuyor. Buna hoisting deniyor. 
// HOISTING!!!!!!!
// var firstNumber;
// console.log(firstNumber);
// firstNumber = 20;
// deneme();
// function deneme() {
//     console.log("a fonksiyonu");
// }


// Boolean
// var isActive = true;
// if (age) {
//     age >= 18 ? console.log("Ehliyet alabilir.") : console.log("Ehliyet alamaz.");
// }


//  Undefined - Tanımsız
// var userName;
// console.log(typeof userName); 


// Null - Değer yok
// var isNull = null;
// console.log(null);
// // null primitive'dir, referans bir değer değildir.
// // normalde referans bir değerdir ama js'de primitive...
// // bir hatadan kaynaklı bir hatadır.
// console.log(typeof null);


// Object - Nesne!!!!
// var user = {
//     name: "Nazif",
//     age: 26,
//     isActive: true,
//     notlar: {
//         mat: 90,
//         fizik: 80,
//     },
//     favoriteFruits: ["elma", "armut"],
// };
// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.notlar.mat);


// Array - Dizi
// var fruits = ["elma", "armut", "muz"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);


// Function - Fonksiyonlar
// function hello() {
//     console.log("Merhaba JS");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);


// Date - Tarih
// var date = new Date();
// console.log(date);

// var a = 10;
// var b = a;
// console.log("1- ", a, b);
// a = 20;
// console.log("2- ", a, b);

// array içindeki eleman bir taneyse matematiksel işlem yapar.
// var a = [10];
// var b = a;
// console.log("1- ", a, b);
// a = [20];
// console.log("2- ", a, b);
// console.log("3- ", a * b);

// var a = ["10"];
// var b = a;
// console.log("1- ", a, b);
// a = ["20"];
// console.log("2- ", a, b);
// console.log("3- ", a * b);

// b, a'nın referansını tuttuğu için a'da yapılan değişiklik
// atama önceden de yapılmış olsa b değişir.
// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log("1- ", a, b);
// //a[0] = 60;
// a.push(60);
// console.log("2- ", a, b);


// Scope - Kapsam
// var a = 10; // Global scope

// function scope() {
//     var b = 20; // function scope
//     console.log(a, b);
// }
// if (true) {
//     // let yaparsak eğer globala yansamaz
//     let c = 30; // block scope
// }
// {
//     var d = 40; // block scope
// }
// console.log(a, b, c, d);


// Type Conversion - tip dönüşümleri
// var a = 5;
// console.log(a, typeof a);
// a = String(a);
// console.log(a, typeof a);

// var a = "deneme";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// var a = 5 + "2";
// console.log(a, typeof a);
// var a = 5 - "2";
// console.log(a, typeof a);


// Operatörler - Operators
// Atama Operatörleri (=)
// const a = 10; // let var gibi değiştirilebilir, const değiştirilemez.

// Aritmetik Operatörler
// console.log(10 + 5); // Toplama
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 / 5);
// console.log(10 % 5);
// console.log(10 ** 5); // Üs alma


// Math Fonksiyonları
// let sonuc;
// sonuc = Math.PI;
// sonuc = Math.ceil(3.6);
// sonuc = Math.round(3.2);
// sonuc = Math.floor(3.9);
// sonuc = Math.sqrt(16);
// sonuc = Math.floor(Math.random() * 100); // Sıfırla 100 arasında bir sayı


// String Methodları
// let value;
// const firstName = "Nazif";
// const lastName = "Karaca";
// const department = "Yazılım";
// const age = 26;

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;
// value = value.length;
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// value = firstName[0];
// value = firstName[firstName.length-1];
// value = firstName.indexOf("a"); // a karakterinin indexi
// // value = firstName.include('a'); // a karakterini içerir mi
// value = firstName.concat(" ", lastName, " ", "Yazılım"); // a karakterini içerir mi

// value = "İsim: " + firstName + " " + lastName + " " + "\nYaş: " + age;
// // template literals: alt + noktalı virgül - ``
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Departman: ${department}`

// value = `
// <ul>
//     <li>İsim: ${firstName}</li>
// </ul>
// `


// Array Methodları
let value;
// const langs = ["Python", "Java", "C++", "JavaScript"];
// const numbers = [43, 22, 35, 4, 12, 80, 50, 9 , 99];

// value = numbers.length; // eleman sayısı
// value = numbers[0]; // 0. indeksteki sayı
// value = numbers[numbers.length-1]; // son eleman
// value = numbers.indexOf(12); // elemanın indeksi
// value = numbers.push(1000); // sona eleman ekler ve eleman sayısını döner
// value = numbers.unshift(200); // en başa eleman ekler
// value = numbers.pop(); // liste sonundan eleman çıkarır ve döndürür
// value = numbers.reverse(); // diziyi ters döndürür
// value = numbers.sort(); // diziyi alfabetik sıralar
// value = numbers.sort(function(a, b){
//     return a - b;
// }) // diziyi asıl sıralayan budur. içine fonksiyon vererek


// Object
// const student = {
//     fullName: "Nazif Karaca",
//     age: 26,
//     adress: {
//         city: "İzmir",
//         country: "Türkiye"
//     },
//     langs: ["Python", "Java", "JavaScript"],
//     work: function(){
//         console.log("Çalışıyor...");
//         return "Devam ediyor...";
//     }
// }

// value = student;
// value = student.fullName;
// value = student.adress.city;
// value = student.langs[0];
// value = student.work();

// let date = new Date();
// value = date;
// value = date.getMonth() + 1; // ayın indeksini verdiği için +1 yaptık asıl ayı bulmak için
// value = date.getDay();
// value = date.getFullYear();
// value = `
// ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}
// `


// Karşılaştırma Operatörleri
// a = 10;
// b = 20;
// c = "10";
// d = 10;

// value = a == c; // true döner. type comparison yerine value comparison yapıyor
// value = a === c; // false döner. type comparison yapar, value comparion yapmaz
// value = a != b;
// value = a !== c; // true döner.
// value = a > b;
// value = a < b;

// // && And Operatörü
// value = (a == d) && (a > b);

// // || Or Operatörü
// value = a == d || a > b;


// Koşullar - Conditions
// let a = 10;
// let b = 20;

// if (a > b) {
//     value = `${a} büyüktür ${b}`
// } else if (a == b) {
//     value = `${a} eşittir ${b}`
// } else {
//     value = `${a} küçüktür ${b}`
// }

// const islem = 4;

// switch (islem) {
//     case 1:
//         value = "İşlem 1";
//         break;
//     case 2:
//         value = "İşlem 2";
//         break;
//     case 3:
//         value = "İşlem 3";
//         break;
//     default:
//         value = "İşlem geçersiz."
//         break;
// }


// Döngüler
// For Döngüsü
// for (let i = 0; i < 10; i++ ) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

// const langs = ["Python", "Java", "C++", "JavaScript"];

// for (let i = 0; i < langs.length; i++) {
//     console.log(langs[i]);
// }

// Functions
// function merhaba() {
//     console.log("Merhaba");
// }
// merhaba();

// function user(name, age) {
//     return `İsim: ${name}, Yaş: ${age}`;
// }
// console.log(user("Nazif", 26));

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//     return `İsim: ${name}, Yaş: ${age}`;
// }
// console.log(user());

// function square(x) {
//     return x * x;
// }
// const result = square(5) * 3;
// console.log(result);


// Arrow Function
// const square = x => x * x;
// console.log(square(2));


// While Loops
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// Do While
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 0);


// Foreach
const langs = ["Python", "Java", "C++", "JavaScript"];

// Array methodları daha hızlı döndürür. map daha hızlıdır.
// langs.forEach(function (lang, index) {
//     console.log(lang, index);
// })

// langs.map(function (lang, index) {
//         console.log(lang, index);
//     });
