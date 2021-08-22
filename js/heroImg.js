const imgContainer = document.querySelector('.hero');
const images = document.querySelectorAll('.image img');
let cont = 0;

setInterval(() => {
    changeImage();
}, 8000);

function changeImage () {
    if(cont <= 2 ){
        imgContainer.style.backgroundImage = "url(" + images[cont].src +")";
    }else{
        cont = 0;
        imgContainer.style.backgroundImage = "url(" + images[cont].src +")";
    };

    cont++;
};

images.forEach(e => {
    e.onclick = () =>{
        imgContainer.style.backgroundImage = "url(" + e.src +")";
    };
});

