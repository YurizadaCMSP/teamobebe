const videos = [
    'src/video1.mp4',
    'src/video2.mp4',
    'src/video3.mp4',
    'src/video4.mp4',
    'src/video5.mp4',
    'src/video6.mp4',
    'src/video7.mp4',
    'src/video8.mp4',
];

let currentVideoIndex = 0;

const videoElement = document.getElementById('video');
const messageElement = document.getElementById('message');
const audioElement = document.getElementById('background-music');

function checkHeadphones() {
    if (navigator.mediaDevices.enumerateDevices) {
        navigator.mediaDevices.enumerateDevices().then(devices => {
            const hasHeadphones = devices.some(device => device.kind === 'audiooutput' && device.label.toLowerCase().includes('headphone'));
            if (!hasHeadphones) {
                alert("Para uma melhor experiência, por favor, coloque seus fones de ouvido.");
            }
        });
    }
}

function playNextVideo() {
    if (currentVideoIndex < videos.length) {
        videoElement.src = videos[currentVideoIndex];
        videoElement.play();
        currentVideoIndex++;
    } else {
        endVideos();
    }
}

function endVideos() {
    messageElement.style.display = 'block';
    audioElement.play();
}

videoElement.onended = playNextVideo;

checkHeadphones();
playNextVideo();
