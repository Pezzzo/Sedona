const videoPlayer = document.querySelector('.video-content__video');
const repeat = document.querySelector('.repeat-control');
const fullScreenButton = document.querySelector('.fullscreen-control');
const fullScreen = document.querySelector('.video-content-wrapper');
const controlsWrapper = document.querySelector('.video-controls');
const durationBar = document.querySelector('.durationBar');
const positionBar = document.querySelector('.positionBar');
const displayStatus = document.querySelector('.displayStatus');

// видео
const onEscapeKeydown = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 32) {
      evt.preventDefault();
      videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
    }
  });
};

const onClickPlay = () => {
  videoPlayer.addEventListener('click', () => {
    videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
  });
};

const playVideo = () => {
  onEscapeKeydown();
  onClickPlay();
};

playVideo();

videoPlayer.addEventListener('timeupdate', () => {
  positionBar.style.left = (videoPlayer.currentTime / videoPlayer.duration * 100)  + "%";
  displayStatus.innerHTML = (Math.round(videoPlayer.currentTime*100)/100).toFixed(1) + " сек";
});

repeat.addEventListener('click', () => {
  videoPlayer.play();
  videoPlayer.currentTime = 0;
  console.log('click3')
});

fullScreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    controlsWrapper.style.width = '100%';
    controlsWrapper.style.left = '0';
    durationBar.style.width = '65%';
    durationBar.style.left = '14%';
  } else {
    durationBar.style.width = '65%';
    durationBar.style.left = '12%';
    controlsWrapper.style.width = '100%';
    videoPlayer.style.width = '100%';
    videoPlayer.style.height = '100%';
    fullScreen.requestFullscreen();
  }
});
