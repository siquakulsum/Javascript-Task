function updateCountdown() {
    const now = new Date();
    const birthday = new Date(now.getFullYear(), 8, 17); // September is month 9 (0-based index)

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
    if (today.getMonth() === 8 && today.getDate() === 17) {
        messageElement.innerHTML = `<p>🎉 Happy Birthday, Zaid! 🎉</p>
                                    <p>Wishing you a day filled with love, laughter, and happiness! You've always been a wonderful part of our family, and we're so grateful for everything you do. May this year bring you even more success, joy, and cherished moments. Here's to celebrating you today and always. Enjoy your special day to the fullest!</p>`;
        messageElement.style.animation = 'sparkle 1.5s infinite';
    }
}


setInterval(updateCountdown, 1000);


