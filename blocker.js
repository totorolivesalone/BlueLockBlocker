const urlParams = new URLSearchParams(window.location.search);
const blockedSite = urlParams.get('site');

if (blockedSite) {
    const siteUrl = new URL(blockedSite);
    document.getElementById('siteDisplay').textContent = ` ${siteUrl.hostname} is blocked`;
}

// Play random BlueLock audio
const audioFiles = [
    "/BlueLockAudio/BachiraSpeech.mp3",
    "/BlueLockAudio/IsagiSpeech.mp3",
    "/BlueLockAudio/RinSpeech.mp3",
    "/BlueLockAudio/SaeSpeech.mp3"
];

const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
const audio = new Audio(chrome.runtime.getURL(randomAudio));
audio.play().catch(e => console.log('Audio error:', e));