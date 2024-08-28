 // Initialize the map
 const map = L.map('map').setView([20.5937, 78.9629], 4); // Initial view centered on India

 // Add OpenStreetMap tiles
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // Marker variable
 let marker;

 // Function to show location based on city name
 function showLocation(city) {
     let coords;
     let popupText;

     switch(city) {
         case 'Mumbai':
             coords = [19.0760, 72.8777];
             popupText = 'Mumbai, Maharashtra';
             break;
         case 'Bhopal':
             coords = [23.2599, 77.4126];
             popupText = 'Bhopal, Madhya Pradesh';
             break;
         case 'Indore':
             coords = [22.7196, 75.8577];
             popupText = 'Indore, Madhya Pradesh';
             break;
         case 'Kanpur':
             coords = [26.4499, 80.3319];
             popupText = 'Kanpur, Uttar Pradesh';
             break;
         case 'Patna':
             coords = [25.5941, 85.1376];
             popupText = 'Patna, Bihar';
             break;
         case 'Gorakhpur':
             coords = [26.7606, 83.3732];
             popupText = 'Gorakhpur, Uttar Pradesh';
             break;
         case 'Noida':
             coords = [28.5355, 77.3910];
             popupText = 'Noida, Uttar Pradesh';
             break;
         case 'Prayagraj':
             coords = [25.4358, 81.8463];
             popupText = 'Prayagraj, Uttar Pradesh';
             break;
         case 'Haryana':
             coords = [29.0588, 76.0856];
             popupText = 'Haryana, India';
             break;
         case 'New Delhi':
             coords = [28.6139, 77.2090];
             popupText = 'New Delhi, India';
             break;
         case 'Dwarka':
             coords = [22.2395, 68.9677];
             popupText = 'Dwarka, Gujarat';
             break;
         case 'Kota':
             coords = [25.2138, 75.8648];
             popupText = 'Kota, Rajasthan';
             break;
         case 'Gwalior':
             coords = [26.2183, 78.1828];
             popupText = 'Gwalior, Madhya Pradesh';
             break;
         case 'Kolkata':
             coords = [22.5726, 88.3639];
             popupText = 'Kolkata, West Bengal';
             break;
         case 'Bardhaman':
             coords = [23.2324, 87.8615];
             popupText = 'Bardhaman, West Bengal';
             break;
         default:
             coords = [20.5937, 78.9629];
             popupText = 'India';
     }

     // Set map view to new coordinates
     map.setView(coords, 12);

     // Remove existing marker if any
     if (marker) {
         map.removeLayer(marker);
     }

     // Add new marker
     marker = L.marker(coords).addTo(map).bindPopup(popupText).openPopup();
 }

 // Initial location
 showLocation('New Delhi');