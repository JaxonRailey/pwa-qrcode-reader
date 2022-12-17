if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('assets/serviceWorker.js');
}

const scanner = new Instascan.Scanner({
    video: document.querySelector('video')
}).addListener('scan', function (content) {
    navigator.clipboard.writeText(content);
    if (confirm('Contenuto copiato negli appunti\n\r' + content + '\n\rVuoi aprire il collegamento?')) {
        window.open(content, '_blank');
    }
});

Instascan.Camera.getCameras().then(cameras => scanner.start(cameras[1] || cameras[0]));