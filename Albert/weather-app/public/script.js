// Function to fetch weather data and update the HTML
async function fetchWeather(location) {
    try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = `https://vejr.eu/api.php?location=${location}&degree=C`;

        const response = await fetch(proxyUrl + apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const { LocationName, CurrentData } = data;

        // Update the HTML with fetched data
        document.getElementById('location').textContent = LocationName;
        document.getElementById('temperature').textContent = CurrentData.temperature;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Fetch weather data when the page loads
fetchWeather('Odense'); // Default location

// Add event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', () => {
    const locationInput = document.getElementById('locationInput').value;
    if (locationInput) {
        fetchWeather(locationInput);
    }
});
