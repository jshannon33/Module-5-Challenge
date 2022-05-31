
let agenda = document.getElementById('agenda-text');

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

console.log(time.value);
// if (date == 16){
//     agenda.style.backgroundColor = 'red';
// }



//function for saving textarea

saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', function(){
    const key = agenda.value;

    localStorage.setItem(key, '');

    console.log(key);

});