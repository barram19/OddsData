document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        // Assuming 'data' is an array of objects
        let table = '<table>';
        table += '<tr><th>Key</th><th>Value</th></tr>'; // Table headers
        Object.entries(data).forEach(([key, value]) => {
            table += `<tr><td>${key}</td><td>${value}</td></tr>`;
        });
        table += '</table>';
        document.getElementById('apiResponse').innerHTML = table;
    })
    .catch(error => console.error('Error:', error));
});
