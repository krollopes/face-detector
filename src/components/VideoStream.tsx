'use client';

import { useFaceDetection } from '@/hooks/useFaceDetection';

const VideoStream = () => {
  const { videoRef, canvasRef, faceCount, loading } = useFaceDetection();

  return (
    <div className='relative w-full max-w-lg mx-auto'>
      {loading && <p className='text-center'>Loading AI models...</p>}
      <video
        ref={videoRef}
        autoPlay
        muted
        className='w-full rounded-lg shadow-lg'
      />
      <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full' />

      {/* Exibir contagem de rostos */}
      <div className='absolute top-2 right-2 bg-black text-white px-4 py-2 rounded-lg shadow-md'>
        Faces Detected: {faceCount}
      </div>
    </div>
  );
};

export default VideoStream;
