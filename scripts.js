// Initialize and configure the map
const map = L.map('map').setView([50.0, 10.0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

// Custom white icon configuration
const whiteIcon = new L.Icon({
    iconUrl: 'white-marker.png',  // The path to your marker image
    iconSize: [20, 16],
    iconAnchor: [10, 16],
    popupAnchor: [0, -16]
});

// Define the function to add pins to the map
function addPin(lat, lng, title, url) {
    L.marker([lat, lng], { icon: whiteIcon }).addTo(map)
        .bindPopup(`<a href="${url}" target="_blank">${title}</a>`);
}

// Example pins - replace with your actual blog post data
addPin(22.40217, 58.80121, 'Wahiba Sands', 'https://medium.com/@louiebucc/22-40217-n-58-80121-e-d06aeb4c2a33');
addPin(43.08114, -79.07580, 'Niagara Falls', 'hhttps://medium.com/@louiebucc/niagara-falls-a81df418e86f');
addPin(41.86225, -87.61667, `Soldier Field`, `https://medium.com/@louiebucc/soldier-field-7e27388042e2`);

// Function to toggle the menu display
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
