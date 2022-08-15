function french() {
    var elem = document.getElementsByClassName("EN");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none"};   

    var elem = document.getElementsByClassName("DE");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none"}; 
        
    var elem = document.getElementsByClassName("FR");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "flow"}; 
}

function german() {
    var elem = document.getElementsByClassName("EN");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none"};   

    var elem = document.getElementsByClassName("DE");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "flow"}; 
        
    var elem = document.getElementsByClassName("FR");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none"}; 
}

function english() {
    var elem = document.getElementsByClassName("EN");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "flow"};   

    var elem = document.getElementsByClassName("DE");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none"}; 
        
    var elem = document.getElementsByClassName("FR");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none"}; 
}