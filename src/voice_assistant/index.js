// Get the microphone button
const startButton = document.querySelector('.talk');

// Get the output div
const outputDiv = document.getElementById('output');

// Initialize speech recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

// Event listeners for speech recognition
recognition.onstart = () => {
    startButton.textContent = 'Listening...';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript;
};

recognition.onend = () => {
    startButton.textContent = 'Start Voice Input';
};

// Event listener for clicking the microphone button
startButton.addEventListener('click', () => {
    recognition.start();
});
