var score = 0;
var score2 = 0;

function updatescore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "score : " + score;
};

function savescore() {
    localStorage.setItem("score", score);
};

function nextpage() {
    window.location="activity_2.html";
};

function back() {
    window.location = "activity_1.html";
};

function getscore() {
    score2 = localStorage.getItem("score");
    document.getElementById("score2").innerHTML = score2;
};