import VideoStream from '@/components/VideoStream';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Face Detector AI</h1>
      <VideoStream />
    </main>
  );
}
