// const voltar =  document.getElementById('btn-voltar');
// const proximo =  document.getElementById('btn-proximo');
// const imagens = document.querySelectorAll(".img-slider");
// const qtnImgs = imagens.length
// const slides = document.querySelector('.area-slide');
// let slideImgFoco = 0;
// const btns = document.querySelectorAll(".btns-slide");

// function passarImg(){
// //     btns.forEach((btn) => {
// //         btn.addEventListener('click', (e)=>{
// //             const voltar = e.target.classList.contains('btn-voltar');
// //             const proximo = e.target.classList.contains('btn-proximo');
            
// //             if(voltar){
// //                 slideImgFoco -= 1;
// //             }
// //             else if(proximo){
// //                 slideImgFoco += 1;
// //             }
// //             if(slideImgFoco >= qtnImgs){
// //                 slideImgFoco = 0;
// //             };
// //             if (slideImgFoco < 0) {
// //                 slideImgFoco = qtnImgs - 1;
// //             };

// //             imagens[slideImgFoco].scrollIntoView({
// //                 behavior: "smooth",
// //                 inline: "center",
// //             })
// //         })
// // })

//     voltar.addEventListener('click', ()=> {
//         slideImgFoco -= 1
//         if(slideImgFoco >= qtnImgs){
//             slideImgFoco = 0;
//         };
//         if (slideImgFoco < 0) {
//             slideImgFoco = qtnImgs - 1;
//         };
//         imagens[slideImgFoco].scrollIntoView({
//             behavior: "smooth",
//             inline: "center",
//         })    
//     })
//     proximo.addEventListener('click', ()=> {
//         slideImgFoco += 1
//         if(slideImgFoco >= qtnImgs){
//             slideImgFoco = 0;
//         };
//         if (slideImgFoco < 0) {
//             slideImgFoco = qtnImgs - 1;
//         };
//         imagens[slideImgFoco].scrollIntoView({
//             behavior: "smooth",
//             inline: "center",
//         })    
//     })

// }

// passarImg();

let menuArea = 'none'
function menu(){
    if(menuArea === 'none'){
        menuArea = 'flex'
        document.getElementById('menu').style.top = '100px'
        document.getElementById('menu').style.opacity = '1'
        document.getElementById('icon-menu').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'
    }
    else if(menuArea === 'flex'){
        menuArea = 'none'
        document.getElementById('menu').style.top = '-1000px'
        document.getElementById('menu').style.opacity = '0'
        document.getElementById('icon-menu').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>'
    }
    
}  


function voltarApp(){
    var urlScheme = "Omniapp://";
  window.location.href = urlScheme;
}