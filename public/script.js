fetch('/api/ip')
.then(res=>res.json())
.then(data=>{
    document.getElementById("text").innerText = "It's yours ip?" + data.ip;
});


const text = document.getElementById("text");
const image = document.getElementById("image");

// Отримати IP
async function getIP() {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data.ip;
}

async function start() {

  // 1. Показати картинку
  image.style.display = "block";
  await wait(2000);
  image.style.display = "none";

  // 2. Loading
  text.innerText = "Loading...";
  await wait(1000);

  // 3. Processing
  text.innerText = "Processing...";
  await wait(1000);

  // 4. IP
  const ip = await getIP();
  text.innerText = `It's your IP?\nIP: ${ip}`;
}

// функція затримки
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

start();
