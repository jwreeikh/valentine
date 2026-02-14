<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Valentine's Day 💕</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
body{
    font-family:'Poppins',sans-serif;
    background: radial-gradient(circle at 30% 30%, #ffd9e8, #ffb6c1, #ff9a9e);
    min-height:100vh;
    overflow-x:hidden;
}

/* MAIN CARD */
.main-card{
    background:rgba(255,255,255,0.2);
    backdrop-filter:blur(15px);
    border-radius:40px;
    padding:30px;
    margin-top:40px;
    border:3px solid white;
    box-shadow:0 20px 50px rgba(255,77,141,0.3);
}

h1{
    font-family:'Dancing Script',cursive;
    font-size:4rem;
    color:white;
    text-shadow:0 0 20px #fff,0 0 40px #ff4d8d;
}

.quote-box{
    background:rgba(255,255,255,0.3);
    padding:25px;
    border-radius:30px;
    margin:30px 0;
    text-align:center;
}

.quote-text{
    font-size:1.4rem;
    min-height:70px;
}

.btn-magic{
    background:#ff4d8d;
    color:white;
    border:none;
    padding:12px 30px;
    border-radius:50px;
    font-weight:bold;
    transition:.2s;
}

.btn-magic:hover{
    background:white;
    color:#ff4d8d;
}

.love-meter{
    background:white;
    border-radius:50px;
    overflow:hidden;
    margin:20px 0;
}

.meter-fill{
    height:20px;
    background:linear-gradient(90deg,#ff4d8d,#ff85b3);
    width:100%;
}

footer{
    margin-top:40px;
    text-align:center;
    color:white;
}
</style>
</head>

<body>

<div class="container text-center">
<div class="main-card">

<h1>💖 Valentine 💖</h1>
<p id="greeting" class="fs-4 text-danger"></p>

<div id="counter" class="mb-3 text-white fw-bold"></div>

<div class="quote-box">
    <div class="quote-text" id="quoteText"></div>
    <div class="text-warning" id="quoteAuthor"></div>
</div>

<div class="love-meter">
    <div class="meter-fill"></div>
</div>
<p class="text-white">❤️ Cinta kita 100% tulus ❤️</p>

<button class="btn-magic" onclick="magicSurprise()">✨ Magic Surprise ✨</button>
<div id="magicResult" class="mt-3"></div>

<footer>
    Made with Love 💕
</footer>

</div>
</div>

<script>

// =======================
// GREETING OTOMATIS
// =======================
const hour = new Date().getHours();
let greeting;

if(hour < 11){
    greeting = "🌅 Selamat Pagi, Cinta!";
}else if(hour < 15){
    greeting = "☀️ Selamat Siang, Sayang!";
}else if(hour < 18){
    greeting = "🌆 Selamat Sore, Sweetheart!";
}else{
    greeting = "🌙 Selamat Malam, My Love!";
}

document.getElementById("greeting").innerText = greeting;


// =======================
// COUNTDOWN VALENTINE
// =======================
const targetDate = new Date("February 14, 2026 00:00:00").getTime();

function updateCounter(){
    const now = new Date().getTime();
    const distance = targetDate - now;

    if(distance > 0){
        const days = Math.floor(distance / (1000*60*60*24));
        document.getElementById("counter").innerText = days + " Hari Menuju Valentine 💕";
    }else{
        document.getElementById("counter").innerText = "Selamat Hari Valentine 💖";
    }
}

updateCounter();
setInterval(updateCounter,1000);


// =======================
// QUOTES DATA
// =======================
const quotes = [
    {text:"Cinta bukan tentang memiliki, tapi tentang menjaga.",author:"Unknown"},
    {text:"Bersamamu, dunia terasa sempurna.",author:"Me"},
    {text:"Kamu adalah rumah terbaikku.",author:"Forever"},
    {text:"Cinta kita lebih indah dari senja.",author:"Always"}
];

let currentQuote = 0;

function showQuote(index){
    if(index >= quotes.length) index = 0;
    if(index < 0) index = quotes.length-1;

    document.getElementById("quoteText").innerText = `"${quotes[index].text}"`;
    document.getElementById("quoteAuthor").innerText = "— " + quotes[index].author;
    currentQuote = index;
}

showQuote(0);
setInterval(()=> showQuote(currentQuote+1),5000);


// =======================
// MAGIC SURPRISE
// =======================
const surprises = [
    "🎉 Kamu adalah keajaiban dalam hidupku!",
    "💖 Aku mencintaimu lebih dari apapun!",
    "✨ Kamu membuat dunia ini indah!",
    "🌟 Bersamamu adalah keajaiban!",
    "💫 Cinta kita abadi selamanya!"
];

function magicSurprise(){
    const random = surprises[Math.floor(Math.random()*surprises.length)];
    document.getElementById("magicResult").innerHTML =
        `<div class="alert alert-danger rounded-pill mt-3">${random}</div>`;
}

</script>

</body>
</html>