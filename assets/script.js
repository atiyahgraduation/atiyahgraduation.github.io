AOS.init();
const gambarKado = document.getElementById('gambarKado');
const containerKado = document.querySelector('.containerKado');
const isiKado = document.querySelector('.containerIsiKado');

gambarKado.addEventListener('click', function() {
    isiKado.style.right = '0';
    containerKado.style.left = '-100%';
});

const gambarMotor = document.getElementById('gambarMotor');
const containerMotor = document.querySelector('.containerMotor');
const isiMotor = document.querySelector('.containerIsiMotor');

gambarMotor.addEventListener('click', function() {
    containerMotor.style.left = '60%';
    this.removeAttribute('class');
    setTimeout(() => {
        containerMotor.style.left = '-100%';
        isiMotor.style.right = '0';
    }, 1500);
});

const UmiCollage = document.querySelector('.UmiCollage');
const head = document.querySelector('.happy');
const subHead = document.querySelector('.sub-head');
const paragrafHero = document.querySelector('.paragraf-hero');
const btnHero = document.querySelector('.btn-hero');
const tombolPlay = document.getElementById('tombolPlay');
const player = document.getElementById('player');
const overlay = document.querySelector('.overlay');

tombolPlay.addEventListener('click', function() {
    player.play();
    overlay.style.top = "-100%";
    setTimeout(() => {
        head.style.left = '0';
    }, 1400);
    setTimeout(() => {
        subHead.style.left = '0';
    }, 1700);
    setTimeout(() => {
        UmiCollage.style.left = '10%';
    }, 2000);
    setTimeout(() => {
        paragrafHero.style.left = '0';
    }, 2000);
    setTimeout(() => {
        btnHero.style.left = '0';
    }, 5000);
  });