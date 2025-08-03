'use strict';


function removeFromList(placeId){
    const idx = gPlaces.findIndex(place => place.id === placeId)
    console.log('idx', idx)
    gPlaces.splice(idx, 1)
    setToLocalStorage('places', gPlaces)
    renderPlaces()
}

function addPlace(name, lat, lng) {
        const place = {
        id: makeId(),
        name,
        lat,
        lng,
    }
    gPlaces.push(place)
    setToLocalStorage('places', gPlaces)
}

function getCSV() {
    const csvContent = gPlaces.map(place => {
        return `${place.name},${place.lat},${place.lng}`
    }).join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = 'places.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}


function renderMarkers() {
gMarkers.forEach(marker => marker.setMap(null))
gMarkers = gPlaces.map(place => {
return new google.maps.Marker({
position: { lat: place.lat, lng: place.lng },
map: gMap,
title: place.name
})
})
}
function centerUserLocation(){
    gMap.setCenter({ lat: userLocation.lat, lng: userLocation.lng})
}