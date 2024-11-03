const quotes = [
    "Believe in your inner unicorn.",
    "Dream big, but don’t forget to wake up.",
    "You are the architect of your own chaos.",
    "Chase your dreams, but don’t forget to catch your bus.",
    "Be a voice, not an echo.",
    "Success is just failure that hasn't happened yet.",
    "Stay positive, even if you’re in a negative situation.",
    "Life is short, but so is a good nap."
];

const images = [
    'image1.png',
    'image2.png',
    'image3.png'
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

document.getElementById('generateButton').addEventListener('click', function() {
    const backgroundImage = document.getElementById('backgroundImage');
    backgroundImage.style.backgroundImage = `url('${getRandomImage()}')`;
    backgroundImage.style.position = 'relative';

    const quoteDisplay = document.createElement('div');
    quoteDisplay.className = 'memeQuote';
    quoteDisplay.textContent = getRandomQuote();
    backgroundImage.appendChild(quoteDisplay);
});
