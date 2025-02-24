'use client';

import { exportLogsToCSV } from '@/utils/exportCSV';
import { useEffect, useState } from 'react';

export default function LogsPage() {
  const [logs, setLogs] = useState<
    { timestamp: string; facesDetected: number }[]
  >([]);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = () => {
    const savedLogs = JSON.parse(
      localStorage.getItem('face-detection-logs') || '[]'
    );
    setLogs(savedLogs);
  };

  const handleExport = () => {
    exportLogsToCSV();
    setLogs([]); // Atualiza a UI após a limpeza dos logs
  };

  return (
    <main className='p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>Detection Logs</h1>

      <button
        onClick={handleExport}
        className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mb-4'
      >
        Export CSV & Clear Logs
      </button>

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
