'use strict';
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