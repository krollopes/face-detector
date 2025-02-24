'use client';

import { useEffect, useState } from 'react';

export default function LogsPage() {
  const [logs, setLogs] = useState<
    { timestamp: string; facesDetected: number }[]
  >([]);

  useEffect(() => {
    const savedLogs = JSON.parse(
      localStorage.getItem('face-detection-logs') || '[]'
    );
    setLogs(savedLogs);
  }, []);

  return (
    <main className='p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>Detection Logs</h1>
      {logs.length === 0 ? (
        <p>No logs available.</p>
      ) : (
        <ul className='space-y-2'>
          {logs.map((log, index) => (
            <li key={index} className='border p-2 rounded-md'>
              <strong>{new Date(log.timestamp).toLocaleString()}</strong> -
              Faces Detected: {log.facesDetected}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
