import { loadModels } from '@/services/face-api';
import * as faceapi from 'face-api.js';
import { useEffect, useRef, useState } from 'react';

export const useFaceDetection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    };

    const detectFaces = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context && videoRef.current) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, detections);
        faceapi.draw.drawFaceLandmarks(canvas, detections);
      }
    };

    loadModels().then(() => {
      setLoading(false);
      startVideo();
      setInterval(detectFaces, 500);
    });
  }, []);

  return { videoRef, canvasRef, loading };
};
