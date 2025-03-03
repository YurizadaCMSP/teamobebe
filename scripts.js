document.addEventListener('DOMContentLoaded', () => {
    const videoPaths = [
        'src/video1.mp4',
        'src/video2.mp4',
           'src/video3.mp4',
        'src/video4.mp4',
           'src/video5.mp4',
        'src/video6.mp4',
           'src/video7.mp4',
        'src/video8.mp4',
        // Adicione os caminhos dos outros vídeos
    ];

    const videoPlayer = document.getElementById('video-player');
    const message = document.getElementById('message');
    const backgroundMusic = document.getElementById('background-music');
    let currentVideoIndex = 0;

    function playNextVideo() {
        if (currentVideoIndex < videoPaths.length) {
            videoPlayer.src = videoPaths[currentVideoIndex];
            videoPlayer.play();
            currentVideoIndex++;
        } else {
            videoPlayer.classList.add('hidden');
            message.classList.remove('hidden');
            backgroundMusic.play();
        }
    }

    videoPlayer.addEventListener('ended', playNextVideo);
    playNextVideo();

    // Função para detectar fones de ouvido
    function checkHeadphones() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioContext.createMediaStreamSource(stream);
                const analyser = audioContext.createAnalyser();
                source.connect(analyser);
                
                // Aqui você pode implementar a lógica de detecção de fones de ouvido
                // e exibir uma mensagem se necessário
            })
            .catch(err => {
                console.error('Erro ao acessar áudio:', err);
            });
    }

    checkHeadphones();
});
