// elementi importati
const imageBox = document.querySelector('.image-box');

// variabili
const img = [
  'assets/img/01.webp' ,
  'assets/img/02.webp' ,
  'assets/img/03.webp' ,
  'assets/img/04.webp' ,
  'assets/img/05.webp' 
];



// ciclo for

for (let i= 0; i< img.length ; i++){
  console.log(i);
  const image = img[i];

  imageBox.innerHTML += `<img src=" ${image} " class="hide" >`;
  
}


// contatore immagini
let counterImg = 0;

// // prendo tutti gli elementi che sono tag img 
const photocollection = document.querySelectorAll('img');

photocollection[counterImg].classList.remove('hide');




