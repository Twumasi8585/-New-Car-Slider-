let imageVar = document.getElementById('image');
let imageArray = ['aston-martin.jpg', 'audi-rs-e-tron-gt.jpg', 'maserati-mc20.jpg', 'nio-et5.jpg'];

let imageIndex = 0;

function slideshow() {
    imageVar.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex >= imageArray.length){
        imageIndex = 0
    }
}

setInterval(slideshow, 3000);