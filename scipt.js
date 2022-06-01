
let agenda = document.getElementById('agenda-text');
let agenda2 = document.getElementById('agenda-text2');
let agenda3 = document.getElementById('agenda-text3');
let agenda4 = document.getElementById('agenda-text4');
let agenda5 = document.getElementById('agenda-text5');
let agenda6 = document.getElementById('agenda-text6');
let agenda7= document.getElementById('agenda-text7');
let agenda8 = document.getElementById('agenda-text8');
let agenda9= document.getElementById('agenda-text9');

// header date **NEEDS TO BE CONVERTED TO moment.js**
let currentDate = document.getElementById('currentDay');
let today = Date();
currentDate.append(today);
// header date 




//change to color of text areas based on time
const time = [9,10,11,12,13,14,15,16,17];

let d = new Date();
let date = d.getHours();

console.log(date);


// if (date == time){
//     agenda.style.backgroundColor = 'red';
// }


const greaterThanTen = time.find(element => element < date);

console.log(greaterThanTen);


//function for saving textarea

saveBtn = document.getElementById('saveBtn');
saveBtn2 = document.getElementById('saveBtn2');
saveBtn3 = document.getElementById('saveBtn3');
saveBtn4 = document.getElementById('saveBtn4');
saveBtn5 = document.getElementById('saveBtn5');
saveBtn6 = document.getElementById('saveBtn6');
saveBtn7 = document.getElementById('saveBtn7');
saveBtn8 = document.getElementById('saveBtn8');
saveBtn9 = document.getElementById('saveBtn9');

saveBtn.addEventListener('click', function(){
    const key = agenda.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn2.addEventListener('click', function(){
    const key = agenda2.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn3.addEventListener('click', function(){
    const key = agenda3.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn4.addEventListener('click', function(){
    const key = agenda4.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn5.addEventListener('click', function(){
    const key = agenda5.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn6.addEventListener('click', function(){
    const key = agenda6.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn7.addEventListener('click', function(){
    const key = agenda7.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn8.addEventListener('click', function(){
    const key = agenda8.value;

    localStorage.setItem(key, '');

    console.log(key);

});


saveBtn9.addEventListener('click', function(){
    const key = agenda9.value;

    localStorage.setItem(key, '');

    console.log(key);

});