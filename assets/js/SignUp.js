var next_1 = document.getElementById('next1');
var next_2 = document.getElementById('next2');
var next_3 = document.getElementById('next3');
var next_4 = document.getElementById('next4');
function nextaction1(){
    next_1.style.visibility = "hidden";
    next_1.style.height = "0%";
    next_1.style.display = "none";
    next_2.style.visibility = "visible";
    next_2.style.height = "64vh";
    next_2.style.display = "contents";
}
function backaction1(){
    next_2.style.visibility = "hidden";
    next_2.style.height = "0%";
    next_2.style.display = "none";
    next_1.style.visibility = "visible";
    next_1.style.height = "64vh";
    next_1.style.display = "contents";
}
function nextaction2(){
    next_2.style.visibility = "hidden";
    next_2.style.height = "0%";
    next_2.style.display = "none";
    next_3.style.visibility = "visible";
    next_3.style.height = "64vh";
    next_3.style.display = "contents";
}
function backaction2(){
    next_3.style.visibility = "hidden";
    next_3.style.height = "0%";
    next_3.style.display = "none";
    next_2.style.visibility = "visible";
    next_2.style.height = "64vh";
    next_2.style.display = "contents";
}
function nextaction3(){
    next_3.style.visibility = "hidden";
    next_3.style.height = "0%";
    next_3.style.display = "none";
    next_4.style.visibility = "visible";
    next_4.style.height = "64vh";
    next_4.style.display = "contents";
}
function backaction3(){
    next_4.style.visibility = "hidden";
    next_4.style.height = "0%";
    next_4.style.display = "none";
    next_3.style.visibility = "visible";
    next_3.style.height = "64vh";
    next_3.style.display = "contents";
}