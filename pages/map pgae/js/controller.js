'use strict';
var gMap

const defaultLocation = {
    id: makeId(),
    name: 'Eilat',
    lat: 29.557669, 
    lng: 34.951923,
    zoom: 12  
}
var gPlaces
var gMarkers = []


function initMap() {
    gPlaces = JSON.parse(localStorage.getItem('places'))
    if (!gPlaces || !gPlaces.length)gPlaces = [defaultLocation]
        gMap = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: { lat: defaultLocation.lat, lng: defaultLocation.lng },
        }); 
        renderPlaces()



        gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        const zoom = gMap.getZoom()
        addPlace(name, lat, lng, zoom)     
        renderPlaces()
        });
}

function onPanToPlace(placeId) {
const place = getPlaceById(placeId)
gMap.setCenter({ lat: place.lat, lng: place.lng})
gMap.setZoom(place.zoom)
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
function onAddPlace(name, lat, lng, zoom) {
    addPlace(name, lat, lng, zoom)

}
function onRemoveFromList(placeId) {
  removeFromList(placeId)
}
