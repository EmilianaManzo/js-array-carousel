// elementi importati
const imageBox = document.querySelector('.image-box');
const iconUp = document.querySelector('.btn-up');
const iconDown = document.querySelector('.btn-down');


// variabili
const imgArr = [
  'assets/img/01.webp' ,
  'assets/img/02.webp' ,
  'assets/img/03.webp' ,
  'assets/img/04.webp' ,
  'assets/img/05.webp' 
];


// contatore immagini
let counterImg = 0;


// ciclo for per inserire le immagini nell' html

for (let i= 0; i< imgArr.length ; i++){
  console.log(i);
  const image = imgArr[i];

  imageBox.innerHTML += `<img src=" ${image} " class="hide" >`;
  
}


// // prendo tutti gli elementi che sono tag img 
const imgcollection = document.querySelectorAll('img');

imgcollection[counterImg].classList.remove('hide');

// Inizio bottoni con addEventListener

iconUp.addEventListener('click', function(){
  imgcollection[counterImg].classList.add('hide');
  
  counterImg++;

  if (counterImg > imgArr.length-1){
    counterImg = 0;
  }

  imgcollection[counterImg].classList.remove('hide');
});


iconDown.addEventListener('click', function(){
  imgcollection[counterImg].classList.add('hide');

  counterImg--;
  
  if (counterImg < 0){
    counterImg = imgArr.length-1;
  }
  
  imgcollection[counterImg].classList.remove('hide');
  
  
});

