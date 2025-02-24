export const exportLogsToCSV = () => {
  const logs = JSON.parse(localStorage.getItem('face-detection-logs') || '[]');

  if (logs.length === 0) {
    alert('No logs available to export.');
    return;
  }

  const csvContent = [
    'Timestamp,Faces Detected',
    ...logs.map(
      (log: { timestamp: string; facesDetected: number }) =>
        `${new Date(log.timestamp).toLocaleString()},${log.facesDetected}`
    ),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `face-detection-logs-${
    new Date().toISOString().split('T')[0]
  }.csv`;
  a.click();

  URL.revokeObjectURL(url);
};
