window.onload = () => {
const playButton = document.getElementById('start');
const boxes = document.querySelectorAll('.box');
const audio = new Audio('music.mp3');

let pic1 


// AUDIO, MONTRE LES NIVEAU ET DONE LEUR ANIMATIONS
playButton.addEventListener('click', () => {
  audio.play();
  playButton.style.display = 'none';
  boxes.forEach((box) => box.classList.add('animated'));
  boxes.forEach((box) => box.style.visibility = 'visible');
});

// PIC1 ( JE VAIS EXPLIQUER POUR PIC 1 PUIS C'EST REPETER 4 FOIS)

const box1 = document.getElementById('box1');
const box1Img = document.getElementById('box1img');

box1.addEventListener('click', () => {
  if (box1.classList.contains('unlocked')) {
    // REDIGER LE JOUER AU NIVEAU
    pic1 = window.open('pic1.html', '_blank');
  }

// ICI TU PRENDS QUAND LE WINDOW DU NIVEAU EST FERMER PAR UN BOUTON. C'EST IMPORTANT CAR JE CEUX PAS QUE TU CLIQUE X EN HAUT ET CA DIT QUE TU AS ACCOMPLIT LE NIVEAU.
window.addEventListener('message', (event) => {
  if (event.data === 'close') {
    box1.classList.remove('unlocked');
    // CHANGE L'IMAGE PUIS FAIT QUE TU PEUX PAS RE-OUVRIR LE MEME NIVEAU
    box1.classList.add('locked');
    box1.title = 'VALERIA';
    box1Img.src = 'valeria.jpg';
    pic1.close();
  }
});
});

// PIC2
const box2 = document.getElementById('box2');
const box2Img = document.getElementById('box2img');

box2.addEventListener('click', () => {
  if (box2.classList.contains('unlocked')) {
    pic2 = window.open('pic2.html', '_blank');
    
  }


window.addEventListener('message', (event) => {
  if (event.data === 'close') {
    box2.classList.remove('unlocked');
    box2.classList.add('locked');
    box2.title = 'TAHA';
    box2Img.src = 'taha.jpg';
    pic2.close();
  }
});
});

// PIC3
const box3 = document.getElementById('box3');
const box3Img = document.getElementById('box3img');

box3.addEventListener('click', () => {
  if (box3.classList.contains('unlocked')) {
    pic3 = window.open('pic3.html', '_blank');
    
  }


window.addEventListener('message', (event) => {
  if (event.data === 'close') {
    box3.classList.remove('unlocked');
    box3.classList.add('locked');
    box3.title = 'ZAKARIA';
    box3Img.src = 'zakaria.jpg';
    pic3.close();
  }
});
});

// PIC4
const box4 = document.getElementById('box4');
const box4Img = document.getElementById('box4img');

box4.addEventListener('click', () => {
  if (box4.classList.contains('unlocked')) {
    pic4 = window.open('pic4.html', '_blank');
    
  }


window.addEventListener('message', (event) => {
  if (event.data === 'close') {
    box4.classList.remove('unlocked');
    box4.classList.add('locked');
    box4.title = 'FIN';
    box4Img.src = 'end.jpg';
 
    pic4.close();
  }
});
});





};









