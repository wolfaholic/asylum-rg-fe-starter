import { useState, useEffect } from 'react';

// Handler function for downloading the CSV file to the desktop
const useHandleDownload = (
  filename = 'mydata.csv',
  urlPath = '/data/COW2021001887-I589Data.csv'
) => {
  const [csvData, setCSVData] = useState('');

  useEffect(() => {
    fetch(urlPath)
      .then(response => response.text())
      .then(data => setCSVData(data));
  }, [urlPath]);

  const handleDownload = () => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return handleDownload;
};

export default useHandleDownload;
