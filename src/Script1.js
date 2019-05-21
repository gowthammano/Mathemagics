// JavaScript source code
var timer;
var wolf = -3;
var man = 10;
var n1Lvl = 1;
var n2Lvl = 1;
var sec = 120;
function start() {
    document.getElementById("submit").disabled = false;
    document.getElementById("stp").disabled = true;
    document.getElementById("lvl").disabled = true;
    document.getElementById("sec").disabled = true;
    setup();

}
function setup() {
    document.getElementById("n1").innerText = getRandom(n1Lvl);
    document.getElementById("sgn").innerText = "x";
    document.getElementById("n2").innerText = getRandom(n2Lvl);
    document.getElementById("Text3").value = "";
    document.getElementById("pos" + man).innerHTML = "<img src=\"./img/2.png\" height=\"30\"  />";
    document.getElementById("pos" + wolf).innerHTML = "<img src=\"./img/3.gif\" height=\"30\" />";
    countDown(document.getElementById("sec").value, "timer")
}
function lvlCalc() {
    switch (document.getElementById("lvl").value) {

        case "0":
            n1Lvl = 1;
            n2Lvl = 1;
            document.getElementById("sec").value = 60;
            break;
        case "1":
            n1Lvl = 2;
            n2Lvl = 1;
            document.getElementById("sec").value = 90;
            break;
        case "2":
            n1Lvl = 3;
            document.getElementById("sec").value = 120;
            n2Lvl = 1;
            break;
        case "3":
            n1Lvl = 2;
            document.getElementById("sec").value = 150;
            n2Lvl = 2;
            break;
        default:
            n1Lvl = 1;
            document.getElementById("sec").value = 60;
            n2Lvl = 1;
    }

}
function getRandom(dig) {
    var ret = 1;
    while (ret < 2) {
        ret = Math.floor((Math.random() * Math.pow(10, dig)) + 1);
    }
    return ret;
}
function stpCalc() {
    document.getElementById("pos" + wolf).innerHTML = "&nbsp;";
    wolf = parseInt(document.getElementById("stp").value);
}
function countDown(secs, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = secs;
    if (secs < 1) {
        clearTimeout(timer);
        chkAnswer();
    }
    else {
        secs--;
        timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
    }

}
function chkAnswer() {
    clearTimeout(timer);
    document.getElementById("pos" + wolf).innerHTML = "&nbsp;";
    document.getElementById("pos" + man).innerHTML = "&nbsp;";
    if (document.getElementById("n1").innerText * document.getElementById("n2").innerText != document.getElementById("Text3").value) {
        document.getElementById("ans").className = "wrongAns";
        wolf += 1;
        man -= 1;
    }
    else {
        man -= 1;
        document.getElementById("ans").className = "correctAns";

    }
    document.getElementById("ans").innerText = document.getElementById("n1").innerText + "x" + document.getElementById("n2").innerText + "=" + document.getElementById("n1").innerText * document.getElementById("n2").innerText;
    if (wolf == 0) {
        alert("Game Over");
        return false;
    }
    if (man == 0) {
        alert("You Win!!!");
        return false;
    }
    setup();
    document.getElementById("Text3").focus();

}
function d12() {

}

