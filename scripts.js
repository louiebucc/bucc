const map = L.map('map').setView([50.0, 10.0], 2); // New Line

// Using CartoDB's Dark Matter tiles for a dark theme map
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

// Custom white icon using your PNG without shadow, adjusted size
const whiteIcon = new L.Icon({
    iconUrl: 'white-marker.png',  // Ensure this path is correct (same directory)
    iconSize: [20, 16], // Set the size of your custom marker
    iconAnchor: [10, 16], // Center the anchor point (width/2)
    popupAnchor: [0, -16] // Popup position above the marker
});

function addPin(lat, lng, title, url) {
    L.marker([lat, lng], { icon: whiteIcon }).addTo(map)
        .bindPopup(`<a href="${url}" target="_blank">${title}</a>`);
}

// Example pins - replace with your actual blog post data
addPin(22.40217, 58.80121, '22.40217° N, 58.80121° E', 'https://medium.com/@louiebucc/22-40217-n-58-80121-e-d06aeb4c2a33');
addPin(51.51, -0.1, 'Blog Post 2', 'https://example.com/blog-post-2');