'use strict';
var gMap
var lat
var lng
var name

const userLocation = {
    lat:  38.8977,
    lng: -77.0365
}
 
const defaultLocation = {
    id: makeId(),
    name: 'Eilat',
    lat: 29.557669, 
    lng: 34.951923,
    zoom: 14  
}
var gPlaces
var gMarkers = []


function initMap() {
    gPlaces = JSON.parse(localStorage.getItem('places'))
    if (!gPlaces || !gPlaces.length) gPlaces = [defaultLocation]
        gMap = new google.maps.Map(document.getElementById("map"),
        {
        center: { lat: defaultLocation.lat, lng: defaultLocation.lng },
        zoom: defaultLocation.zoom
        }); 
        renderPlaces()



        gMap.addListener('click', ev => {
        const elModal = document.querySelector('.add-location-modal')
        const elInput = elModal.querySelector('.dialog-input')
        lat = ev.latLng.lat()
        lng = ev.latLng.lng()
        elInput.value = ''
        elModal.showModal()        
        });
}

function onSaveLocation(){
    const elModal = document.querySelector('.add-location-modal')
    const elInput = elModal.querySelector('.dialog-input')
    name = elInput.value
    addPlace(name, lat, lng)     
    renderPlaces()

}


function onPanToPlace(placeId) {
const place = getPlaceById(placeId)
gMap.setCenter({ lat: place.lat, lng: place.lng})
gMap.setZoom(14)
}


function renderPlaces() {
    const elPlaces = document.querySelector('.places-list ul')
    let strHtmls = gPlaces.map(place => {
        return `<li class="place">
            ${place.name}
            <button onclick="onPanToPlace('${place.id}')">Go</button>
            <button onclick="onRemoveFromList('${place.id}')">X</button>
        </li>`
    }).join('')

    elPlaces.innerHTML = strHtmls
    renderMarkers()
}
function onAddPlace(name, lat, lng) {
    addPlace(name, lat, lng)

}
function onRemoveFromList(placeId) {
  removeFromList(placeId)
}
function onCloseModal(){
    const elModal  = document.querySelector('.add-location-modal')
    elModal.close()
}

