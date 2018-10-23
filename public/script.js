var image = [1,2,3,4];
var imgElem = document.querySelector("img");

function randomValueFromArray(array){
    let randomNo = Math.floor(Math.random() * array.length);
    return array[randomNo];
}
setInterval(function() {
    let randomChoice = randomValueFromArray(image);
    imgElem.src = 'images/img_' + randomChoice + '.jpg';
}, 2000);