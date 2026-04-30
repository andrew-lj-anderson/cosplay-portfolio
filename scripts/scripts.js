/*
Andrew Anderson
script.js
4.11.2026
Portfolio Website
*/
//Hamburger menu function
function hamburger () {
    console.log("Hamburger menu clicked");
    var menu = document.getElementById("menu-links");
    console.log(menu);
    console.log(menu.style.display);
    if (menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}