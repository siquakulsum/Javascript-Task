function updateCountdown() {
    const now = new Date();
    const birthday = new Date(now.getFullYear(), 8, 7); // September is month 9 (0-based index)

    if (now > birthday) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }

    const timeDiff = birthday - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    const messageElement = document.getElementById('message');
    const today = new Date();
    if (today.getMonth() === 8 && today.getDate() === 7) {
        messageElement.innerHTML = `<p>🎉 Happy Birthday, Zarmeen! 🎉</p>
                                    <p>You light up every room you enter, and today, we celebrate the sparkle you bring into our lives.</p>`;
        messageElement.style.animation = 'sparkle 1.5s infinite';
    }
}


setInterval(updateCountdown, 1000);


