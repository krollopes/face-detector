import VideoStream from '@/components/VideoStream';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Face Detector AI</h1>
      <VideoStream />
      <Link href='/logs' className='mt-4 text-blue-600 underline'>
        View Detection Logs
      </Link>
    </main>
  );
}
