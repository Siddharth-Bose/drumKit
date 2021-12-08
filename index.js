document.querySelector(".w").addEventListener("click",function(){
    sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/crash.mp3');
    sound.play();
            setTimeout(function() {document.querySelector('.w').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.w').style="box-shadow:0 0 0 0 grey;";},100);
});
document.querySelector(".a").addEventListener("click",function(){
    sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/kick-bass.mp3');
    sound.play();
            setTimeout(function() {document.querySelector('.a').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.a').style="box-shadow:0 0 0 0 grey;";},100);
});
document.querySelector(".s").addEventListener("click",function(){
    sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/snare.mp3');
    sound.play();
            setTimeout(function() {document.querySelector('.s').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.s').style="box-shadow:0 0 0 0 grey;";},100);
});
document.querySelector(".d").addEventListener("click",function(){
    sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-1.mp3');
    sound.play();
            setTimeout(function() {document.querySelector('.d').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.d').style="box-shadow:0 0 0 0 grey;";},100);
});
document.querySelector(".j").addEventListener("click",function(){
    sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-2.mp3');
    sound.play();
            setTimeout(function() {document.querySelector('.j').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.j').style="box-shadow:0 0 0 0 grey;";},100);
});
document.querySelector(".k").addEventListener("click",function(){
    sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-3.mp3');
    sound.play();
            setTimeout(function() {document.querySelector('.k').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.k').style="box-shadow:0 0 0 0 grey;";},100);
});
document.querySelector(".l").addEventListener("click",function(){
    sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-4.mp3');
    sound.play();
            setTimeout(function() {document.querySelector('.l').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.l').style="box-shadow:0 0 0 0 grey;";},100);
});
function myfunction(){
    var x = event.keyCode;
    if(x===68 || x===100){
        sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-1.mp3');
        sound.play();
                setTimeout(function() {document.querySelector('.d').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.d').style="box-shadow:0 0 0 0 grey;";},100);
    }
    else if(x===65 || x===97){
        sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/kick-bass.mp3');
        sound.play();
                setTimeout(function() {document.querySelector('.a').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.a').style="box-shadow:0 0 0 0 grey;";},100);
    }
    else if(x===87 || x===119){
        sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/crash.mp3');
        sound.play();
                setTimeout(function() {document.querySelector('.w').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.w').style="box-shadow:0 0 0 0 grey;";},100);
    }
    else if(x===115 || x===83){
        sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/snare.mp3');
        sound.play();
                setTimeout(function() {document.querySelector('.s').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.s').style="box-shadow:0 0 0 0 grey;";},100);
    }
    else if(x===106 || x===74){
        sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-2.mp3');
        sound.play();
        setTimeout(function() {document.querySelector('.j').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.j').style="box-shadow:0 0 0 0 grey;";},100);
    }
    else if(x===75 || x===107){
        sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-3.mp3');
        sound.play();
        setTimeout(function() {document.querySelector('.k').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.k').style="box-shadow:0 0 0 0 grey;";},100);
    }
    else if(x===76 || x===108){
        sound=new Audio('https://siddharth-bose.github.io/drumKit/sounds/tom-4.mp3');
        sound.play();
        setTimeout(function() {document.querySelector('.l').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.l').style="box-shadow:0 0 0 0 grey;";},100);
    }
}
