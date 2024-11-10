// let value;

// value = document;
// value = document.URL;
// value = document.title;
// value = document.location;
// value = document.location.hostname;
// value = document.scripts[0];
// value = document.links;
// value = document.links[document.links.length - 1].getAttribute("class");  
// value = document.links[document.links.length - 1].classList;

// // ID ile seçme
// value = document.getElementById("title"); // verilen id'yi seçiyor
// value = document.getElementById("title").textContent; // verilen id'den texti getirir
// value = document.getElementById("title").innerHTML; // verilen id'den html getirir


// // Class ile seçme
// value = document.getElementsByClassName("text");
// value = document.getElementsByClassName("text")[0].innerText; // 0'daki elemanın textini getirir


// // Tag ile seçme
// value = document.getElementsByTagName("p");


// // Query ile seçme
// value = document.querySelector("#title"); // ilk bulduğu elemanı getirir
// value = document.querySelector(".title");
// value = document.querySelector("span");


// // Eleman Oluşturma - Buton
// const button = document.createElement("a");
// button.id = "denemeButton";
// button.className = "btn btn-danger";
// button.href = "https://www.google.com";
// button.target = "_blank";
// button.textContent = "Google'a git";
// const divSec = document.querySelector("#denemeDiv");
// divSec.appendChild(button);

// value = document.getElementById("denemeButton");

// value.addEventListener("click", function () {
//     console.log("Tıklama işlemi gerçekleşti");
// });

// console.log(value);

const textInput = document.querySelector("#text-input");
textInput.addEventListener("keyup", () => console.log(textInput.value)); // her yazış sonunda metni ekrana yaz

textInput.addEventListener("focus", () => textInput.value = ""); // kutuya her tıkladığımda metini temizle

textInput.addEventListener("blur", () => console.log("Çıkış yapıldı.")); // kutu dışında başka bir yere tıkladığımda işe yarar
