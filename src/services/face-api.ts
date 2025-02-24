import * as faceapi from 'face-api.js';

const MODEL_URL = '/models';

export const loadFaceApiModels = async () => {
  try {
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    ]);
    console.log('Modelos carregados com sucesso!');
  } catch (error) {
    console.error('Erro ao carregar os modelos do FaceAPI:', error);
  }
};
