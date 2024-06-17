// Get our elements
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const backwardBtn = document.getElementById("backwardBtn");
const forwardBtn = document.getElementById("forwardBtn");
const seekBar = document.getElementById("seekBar");
const expandBtn = document.getElementById("expandBtn");
const compressBtn = document.getElementById("compressBtn");
const call = document.getElementById("call");
const videoContainer = document.getElementById("video-container");
const topBar = document.getElementById("top-bar");
const endCall = document.getElementById("end-call");
const speaker = document.getElementById("speaker");
const microphone = document.getElementById("microphone");
const noCall = document.getElementById("no-video-call");

//end call
endCall.addEventListener("click", () => {
  call.style.display = "none";
  videoContainer.style.position = "absolute";
  videoContainer.style.top = "0";
  videoContainer.style.left = "0";
  videoContainer.style.width = "100vw";
  videoContainer.style.height = "100vh";
  video.style.width = "calc(100vh)";
  video.style.height = "100%";
  expandBtn.style.display = "none";
  compressBtn.style.display = "block";
  topBar.style.gap = "14em";
});
speaker.addEventListener("click", () => {
  speaker.querySelector("img").src = "/assets/play-page/Pause.png";
});
// Play/Pause the video
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.querySelector("img").src = "/assets/play-page/Pause.png";
  } else {
    video.pause();
    playPauseBtn.querySelector("img").src = "/assets/play-page/Play.png";
  }
});

// Rewind the video by 10 seconds
forwardBtn.addEventListener("click", () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

// Fast forward the video by 10 seconds
backwardBtn.addEventListener("click", () => {
  const newTime = video.currentTime + 10;
  video.currentTime = Math.min(newTime, video.duration);
});

// Update the seek bar as the video plays
video.addEventListener("timeupdate", () => {
  seekBar.value = (video.currentTime / video.duration) * 100;
});

// Seek the video when the seek bar changes
seekBar.addEventListener("input", () => {
  const seekTo = video.duration * (seekBar.value / 100);
  video.currentTime = seekTo;
});

// Toggle expand/compress
expandBtn.addEventListener("click", () => {
  call.style.display = "none";
  videoContainer.style.position = "absolute";
  videoContainer.style.top = "0";
  videoContainer.style.left = "0";
  videoContainer.style.width = "100vw";
  videoContainer.style.height = "100vh";
  video.style.width = "calc(100vh)";
  video.style.height = "100%";
  expandBtn.style.display = "none";
  compressBtn.style.display = "block";
  topBar.style.gap = "14em";
});

compressBtn.addEventListener("click", () => {
  call.style.display = "contents";
  videoContainer.style.position = "relative";
  videoContainer.style.width = "100%";
  videoContainer.style.height = "100%";
  video.style.width = "calc(75vh)";
  video.style.height = "100%";
  expandBtn.style.display = "block";
  compressBtn.style.display = "none";
  topBar.style.gap = "8em";
});

// Lock functionality (example: just toggling a class for now)
lockBtn.addEventListener("click", () => {
  video.classList.toggle("locked");
});

// Toggle subtitles on/off
subtitlesBtn.addEventListener("click", () => {
  if (subtitleTrack.mode === "showing") {
    subtitleTrack.mode = "hidden";
  } else {
    subtitleTrack.mode = "showing";
  }
});

// Toggle playback speed between normal and double speed
speedBtn.addEventListener("click", () => {
  video.playbackRate = video.playbackRate === 1 ? 2 : 1;
});
