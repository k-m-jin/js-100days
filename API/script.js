const userLocation = document.querySelector('.location')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(showPosition, errorCallback)
})

function showPosition(position) {
  // 위도 경도
  userLocation.innerHTML = `
        Latitude: ${position.coords.latitude} <br>
        Longitude: ${position.coords.longitude}
    `
}

function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`)
}
