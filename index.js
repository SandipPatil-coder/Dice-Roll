var random1 = Math.floor(Math.random()*6)+1;

var random1diceimage = "dice"+random1+".png";

var randomsource = "/images/"+random1diceimage;

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomsource);

var random2 = Math.floor(Math.random()*6)+1;

var random2diceimage = "dice"+random2+".png";

var random2source = "/images/"+random2diceimage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", random2source);

if (random1>random2){
    document.querySelector("h1").innerHTML = "!!! Player 1 wins !!!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML = "!!! Player 2 wins !!!"
}
else if(random1 === random2) {
    document.querySelector("h1").innerHTML = "TIE"
}