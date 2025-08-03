'use strict';


function onSubmitForm(ev){
    ev.preventDefault();
    const ageInput = document.getElementById('age');
    const age = ageInput.value;
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const bgcInput = document.getElementById('bgc-color');
    const bgc = bgcInput.value;
    const txtInput = document.getElementById('txt-color');
    const txt = txtInput.value;

    const userPrefs = {
        age: age,
        email: email,
        bgc: bgc,
        txt: txt
    };

    localStorage.setItem('userPrefs', JSON.stringify(userPrefs));
    setPrefs();

}

function setPrefs(){
    const userPrefs = JSON.parse(localStorage.getItem('userPrefs'));
    if (userPrefs) {
        document.body.style.backgroundColor = userPrefs.bgc;
        document.body.style.color = userPrefs.txt;
    }else {
        const defaultPrefs = {
            bgc: 'lightgray',
            txt: 'black'
        };
        document.body.style.backgroundColor = defaultPrefs.bgc;
        document.body.style.color = defaultPrefs.txt;
    }
}
function onResetPrefs(){
    const defaultPrefs = {
        bgc: 'lightgray',
        txt: 'black'
    };
    localStorage.setItem('userPrefs', JSON.stringify(defaultPrefs));
    setPrefs();
}

