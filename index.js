const buton1 = document.querySelector('.button1')
const buton2 = document.querySelector('.button2')
const buton3 = document.querySelector('.button3')

const lift = document.querySelector('.lift');



  buton3.addEventListener('click', e => {
      lift.style.marginTop="0"
   })

   buton2.addEventListener('click', e => {
      lift.style.marginTop="270px"
   })

   buton1.addEventListener('click', e => {
      lift.style.marginTop="540px"
   })





