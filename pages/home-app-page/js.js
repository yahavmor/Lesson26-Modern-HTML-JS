'use strict';

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