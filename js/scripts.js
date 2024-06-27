document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    performSearch(query);
});

function performSearch(query) {
    // Simulación de resultados de búsqueda
    const results = [
        'Resultado 1 para ' + query,
        'Resultado 2 para ' + query,
        'Resultado 3 para ' + query
    ];

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result;
        resultsContainer.appendChild(resultItem);
    });
}
