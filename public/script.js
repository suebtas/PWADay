image  = [1,2,3,4]

/*
function showImage(){
    v = randomFromArray();
    document.querySelector("img").src = "images/img_"+v+".jpg"
}*/

function randomFromArray(){
    randomNo = Math.floor(Math.random()*4);
    return image[randomNo];
}


setInterval(function(){
    v = randomFromArray()
    document.querySelector("img").src = "images/img_"+v+".jpg";
},1000);