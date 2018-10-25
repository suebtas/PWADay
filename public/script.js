//a=1;
//setInterval(showImage,1000);
setInterval(showImage,1000);
//alert(a);
/*function showImage(){
    v= randomFromArray();
   document.querySelector("img").src="images/image"+v+".jpg"
}*/
image = [1,2,3,4]
function randomFromArray(){
    /*v = Math.random()*4;
    //alert(Math.round(v));
    v = Math.floor(v);
    console.log(v);
    return Math.round(v) ;*/

    randomNo = Math.floor(Math.random()*4);
    //0 1 2 3
    return image[randomNo];


}
setInterval(function(){
v= randomFromArray()
document.querySelector("img").src= "images/image"+v+".jpg"
},1000)