document.addEventListener('DOMContentLoaded', function() {
    fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_web')
    .then(response => response.text()) // Assuming the server responds with HTML
    .then(html => {
        document.getElementById('apiResponse').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
});
