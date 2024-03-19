document.addEventListener('DOMContentLoaded', function() {
    fetch('https://us-central1-cbbbot-413503.cloudfunctions.net/post_sports_odds_webpage', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => response.text())
...
