count = 0;
function show() {
  count++;
  console.log(count);
}

function get() {
  //   let text = document.querySelector("#matn");
  let text = document.querySelectorAll("#matn");
  for (let i = 0; i < text.length; i++) {
    text[i].style.color = "red";
    text[i].style.fontSize = "55px";
    text[i].style.backgroundColor = "blue";
  }
}

let text = document.querySelector(".text");
let size = 16;

function increase() {
  size += 2;
  text.style.fontSize = size + "px";
}

function decrease() {
  size -= 2;
  text.style.fontSize = size + "px";
}

function reset() {
  size = 16;
  text.style.fontSize = size + "px";
}

let btn = document.querySelector(".modal");
let clear = document.querySelector(".clear");
let info = document.querySelector(".info");

btn.addEventListener("click", () => {
  info.classList.add("style1");
});

clear.addEventListener("click", () => {
  info.classList.remove("style1");
});



document.addEventListener('click',()=>{
    console.log('asdsad');
})
