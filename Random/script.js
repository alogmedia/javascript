const apiUrl = 'https://cors-anywhere.herokuapp.com/http://vejr.eu/api.php?location=Odense&degree=C';

fetch(apiUrl, {
  headers: {
    'Origin': 'X', // Replace with your actual website URL
    'X-Requested-With': 'XMLHttpRequest',
  },
})
  .then(response => response.json())
  .then(data => {
    const locationName = data.LocationName;
    const temperature = data.CurrentData.temperature;

    console.log(`Lokation: ${locationName}`);
    console.log(`Temperatur: ${temperature}°C`);
  })
  .catch(error => {
    console.error('Der opstod en fejl:', error);
  });
