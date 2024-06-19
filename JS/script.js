document.addEventListener('DOMContentLoaded', () => {
    fetchCatFact();

    // Event listener for fetching new cat fact
    document.getElementById('fetch-cat-fact').addEventListener('click', fetchCatFact);
});

/**
 * Fetch a random cat fact from the Cat Facts API
 */
function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            displayCatFact(data.fact);
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
            displayError();
        });
}

/**
 * Display the fetched cat fact in the UI
 * @param {string} fact - Cat fact
 */
function displayCatFact(fact) {
    const catFactContainer = document.getElementById('cat-fact');
    catFactContainer.innerHTML = `<p>${fact}</p>`;
}

/**
 * Display an error message in case of a failed fetch
 */
function displayError() {
    const catFactContainer = document.getElementById('cat-fact');
    catFactContainer.innerHTML = `<p>Sorry, we couldn't fetch a cat fact at this time. Please try again later.</p>`;
}
