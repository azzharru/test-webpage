var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var header =  document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == '/images/firefox-logo.png') {
        myImage.setAttribute ('src','/images/firefox-logo-nightly.png');
    } else {
        myImage.setAttribute ('src','/images/firefox-logo.png');
    }
}

function setUserName(){
    var name = prompt('Pleace enter your name - ')
    localStorage.setItem('name', name)
    header.textContent = `Welcome to ${name} s web-page!`
}
if(!localStorage.getItem('name')){
    setUserName()
}else{
    var storedName = localStorage.getItem('name')
    header.textContent = `Welcome to ${storedName} s web-page!`
}

myButton.onclick = function(){
    setUserName()
}