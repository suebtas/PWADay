var image=[1,2,3,4]
var intravel=2000

function randfromarray()
{
    randno=Math.floor(Math.random() * 4);  
    //console.log(randno);
    return image[randno];
}

setInterval(function(){
    document.querySelector("img").src="images/image" + randfromarray() + ".jpg";
},intravel)