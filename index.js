const images = document.querySelector('.imgs');
const pops =  document.querySelector('.pop');
const faq =  document.querySelector('.f-s-item');
const faqspan =  document.querySelector('.f-s-item span');
console.log(faqspan);

let imgsArray = [];
for(let i=1; i<10;i++){
     imgsArray.push(`img/${i}.png`)
    
}
for(let img=0; img < imgsArray.length;img++){
    
    images.innerHTML += `<img src=${imgsArray[img]} alt='client' class='img' style='max-width: 13rem'></img>`
}
const change = (img)=>{
    imgs.forEach((slide) => {
        slide.classList.remove("active-img");
      });
}
const Auto = ()=>{
    for(let i = 0; i < imgs.length; i++ ){
       
        
          1
}
}
const imgs = document.querySelectorAll('.img');
const myTimeout = setInterval(Auto,2000)

for(let img of imgs){
    img.addEventListener('click',()=>{
        change()
        img.classList.toggle("active-img")
    })
}

    faq.addEventListener('click',()=>{
        pops.classList.toggle('hide')
        pops.classList.toggle('show')
        faqspan.classList.toggle('rotate')

    })
