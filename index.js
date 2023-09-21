var a = document.querySelector('.target');
a.innerHTML = 0;

function inc(){
    var a = document.querySelector('.target');
    a.innerText = Number(a.innerText)+1;
}
function dec(){
    var a = document.querySelector('.target');
    a.innerText = Number(a.innerText)-1;
}
function res(){
    var a = document.querySelector('.target');
    a.innerText = 0;
}