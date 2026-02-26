const targetSites = [
  "www.reddit.com",
  "www.tumblr.com",
  "www.netflix.com",
  "www.crunchyroll.com",
  "www.linkedin.com",
  "www.youtube.com"
];

const audioFiles=[
  "/BlueLockAudio/BachiraSpeech.mp3",
  "/BlueLockAudio/IsagiSpeech.mp3",
  "/BlueLockAudio/RinSpeech.mp3",
  "/BlueLockAudio/SaeSpeech.mp3"
]

  
if(targetSites.some(site=>window.location.href.includes(site))){
  const blockerUrl = chrome.runtime.getURL('blocker.html?site=' + encodeURIComponent(window.location.href));
  window.location.href = blockerUrl;

}
    