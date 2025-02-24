import * as faceapi from 'face-api.js';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { loadFaceApiModels } from '../../services/face-api';

export default function FaceDetectionPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [facesDetected, setFacesDetected] = useState(0);

  useEffect(() => {
    const initFaceDetection = async () => {
      await loadFaceApiModels();
      // Acessar a câmera após carregar os modelos
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          detectFaces();
        })
        .catch((err) => console.error('Camera error:', err));
    };

    initFaceDetection();
  }, []);

  const detectFaces = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const detect = () => {
      if (videoRef.current && ctx) {
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Processar a imagem com face-api.js
        const detections = faceapi.detectAllFaces(canvas);
        detections.then((faces) => {
          setFacesDetected(faces.length);

          // Desenhar as caixas ao redor dos rostos detectados
          faces.forEach((face) => {
            faceapi.draw.drawDetections(canvas, [face]);
          });
          return faces;
        });
      }

      requestAnimationFrame(detect);
    };

    detect();
  };

  return (
    <div>
      <h1>Face Detection</h1>
      <video ref={videoRef} autoPlay width='640' height='480' />
      <div>Faces detected: {facesDetected}</div>
      {facesDetected > 0 && toast.success(`Detected ${facesDetected} face(s)!`)}
    </div>
  );
}
