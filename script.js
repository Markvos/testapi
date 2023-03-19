const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://zoeken.oba.nl/api/v1/search/?q=1984&authorization=ffbc1ededa6f23371bc40df1864843be&output=json';

async function fetchData() {
  const response = await fetch(PROXY_URL + API_URL, {
    headers: {
      'Origin': '*'
    }
  });
  const data = await response.json();
  return data;
}

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  
  data.results.map(result => {
    const title = result.titles.short_title;
    const coverImageURL = result.coverimages.coverimage[0].url;

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `
      <h2>${title}</h2>
      <img src="${coverImageURL}" alt="${title}">
    `;

    resultsDiv.appendChild(resultDiv);
  });
}

fetchData().then(data => displayResults(data));
