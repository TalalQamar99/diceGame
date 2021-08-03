function rollDice() {
var play1 = Math.floor((Math.random())*6 + 1);
var play2 = Math.floor((Math.random())*6 + 1);
var img_all = document.querySelectorAll("img");
var img1 = img_all[0];
var img2 = img_all[1];
var upd_play1 = "images/dice"+play1+".png";
var upd_play2 = "images/dice"+play2+".png";
img1.setAttribute("src",upd_play1);
img2.setAttribute("src",upd_play2);
if (play1 > play2)
{
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if (play2 > play1){
    document.querySelector("h1").textContent = "Player 2 wins";
}
else {
    document.querySelector("h1").textContent = "Draw";
}
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        rollDice();
    }
}

function refreshP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
