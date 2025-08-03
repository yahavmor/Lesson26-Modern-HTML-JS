'use strict';

const defaultPrefs = {
        bgc: 'white',
        txt: 'black'
    }; 

function onSubmitForm(ev){
    ev.preventDefault();
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const bgcInput = document.getElementById('bgc-color');
    const txtInput = document.getElementById('txt-color');    
    const birthDateInput = document.getElementById('birth-date'); 
    const birthTimeInput = document.getElementById('birth-time'); 

    const age = ageInput.value;
    const email = emailInput.value;
    const bgc = bgcInput.value;
    const txt = txtInput.value;
    const birthDate = birthDateInput.value;
    const birthTime = birthTimeInput.value;

    const birth = new Date(birthDate);
    const today = new Date();
    console.log(birth, today);
    let yearCalc = today.getFullYear() - birth.getFullYear();
    console.log(yearCalc);
    console.log(age)
    if(+yearCalc!== +age){
        alert('Your age does not match your birth date. Please check the values.');
        return;
    }
    const userPrefs = {
        age: age,
        email: email,
        bgc: bgc,
        txt: txt,
        birthDate: birthDate,
        birthTime: birthTime,
    };
    
    localStorage.setItem('userPrefs', JSON.stringify(userPrefs));
    setPrefs();
    }

    

    





function setPrefs(){
    const userPrefs = JSON.parse(localStorage.getItem('userPrefs'));
    if (!userPrefs.bgc || !userPrefs.txt) {
        document.body.style.backgroundColor = defaultPrefs.bgc;
        document.body.style.color = defaultPrefs.txt;
    }else {
        document.body.style.backgroundColor = userPrefs.bgc;
        document.body.style.color = userPrefs.txt;
    }
}
function onResetPrefs(){
    localStorage.setItem('userPrefs', JSON.stringify(defaultPrefs));
    setPrefs();
}
function displayAge() {
    const ageInput = document.getElementById('age');
    const displayAgeSpan = document.querySelector('.display-age');
    displayAgeSpan.innerHTML = ageInput.value;
}
