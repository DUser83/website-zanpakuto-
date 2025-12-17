function updateOnlineStatus() {
    const counterElement = document.getElementById('online-count');
    if(counterElement) {
        counterElement.innerText = Math.floor(Math.random() * (45 - 12 + 1) + 12);
    }
}
setInterval(updateOnlineStatus, 4000);
updateOnlineStatus();