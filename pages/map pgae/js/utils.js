'use strict';
const defaultPrefs = {
        bgc: 'white',
        txt: 'black'
    }; 

function makeId(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}


function getPlaceById(placeId) {
    return gPlaces.find(place => place.id === placeId)
}

function setToLocalStorage(key, value){
  localStorage.setItem(key, JSON.stringify(value))
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

function centerUserLocation(){
    
}