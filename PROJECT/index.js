function updateScores() {
    // Simulate getting the scores (you can replace this with actual data retrieval)
    const score = "3-0";

    // Update the scores in the HTML
    const scoresText = document.querySelector('.score-text');
    scoresText.textContent = `${score}`;
}

// Function to update the countdown timer
function updateCountdown() {
    // Simulate getting the next fixture time (you can replace this with actual data retrieval)
    const nextFixtureTime = new Date('2024-01-21T15:00:00');
    
    // Calculate the time difference between now and the next fixture
    const currentTime = new Date();
    const timeDifference = nextFixtureTime - currentTime;

    // Calculate hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown timer in the HTML
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (nextFixtureTime < currentTime){
alert('Its on')
 }
return alert
}

// Call the update functions initially
updateScores();
updateCountdown();

// Set up interval to update the countdown every second
setInterval(updateCountdown, 1000);

 