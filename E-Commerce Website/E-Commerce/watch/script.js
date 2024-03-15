
    document.addEventListener('DOMContentLoaded', function () {
        var countdownElement = document.getElementById('countdown');
    var countdownTime = 900; // 15 minutes in seconds

    function updateCountdown() {
            var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;

    // Add leading zeros if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.textContent = minutes + ':' + seconds;

            if (countdownTime > 0) {
        countdownTime--;
            } else {
        clearInterval(countdownInterval);
    countdownElement.textContent = "Time's up!";
            }
        }

    var countdownInterval = setInterval(updateCountdown, 1000);
    });

