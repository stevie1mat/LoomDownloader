'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('https://www.loom.com/share/video-id');
  const [format, setFormat] = useState('mp4');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const extractVideoId = (url: string) => {
    url = url.split('?')[0];
    return url.split('/').pop() || '';
  };

  const validateLoomUrl = (url: string) => {
    const loomPattern = /^https?:\/\/(www\.)?loom\.com\/share\/[a-zA-Z0-9]+/;
    return loomPattern.test(url);
  };

  const downloadSingle = async () => {
    if (!url || url === 'https://www.loom.com/share/video-id') {
      setError('Please enter a Loom video URL');
      return;
    }

    if (!validateLoomUrl(url)) {
      setError('Please enter a valid Loom video URL');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setProgress(0);
      setDownloadLink(null);

      const videoId = extractVideoId(url);
      setProgress(25);

      const response = await fetch('/api/download-single', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          filename: `${extractVideoId(url)}.${format}`
        })
      });

      setProgress(50);

      if (!response.ok) {
        let errorMessage = 'Download failed';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || 'Download failed';
        } catch (e) {
          try {
            const text = await response.text();
            errorMessage = text || 'Download failed';
          } catch (textError) {
            errorMessage = `HTTP ${response.status}: ${response.statusText}`;
          }
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();
      setProgress(100);
      setDownloadLink(result.downloadUrl);

    } catch (error: any) {
      setError(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} sticky top-0 z-50 shadow-sm`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold text-blue-600">loom.fo</a>
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <span>{isDarkMode ? '🌞' : '🌙'}</span>
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 text-blue-500 text-2xl">⭐</div>
            <div className="absolute top-1/2 left-1/6 text-red-500 text-2xl">🎵</div>
            <div className="absolute top-1/3 right-1/6 text-blue-400 text-2xl">▶️</div>
            <div className="absolute top-1/4 right-1/4 text-red-500 text-2xl">📺</div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 relative inline-block">
            Loom Video Downloader
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Try this unique tool for quick, hassle-free downloads from Loom. Transform your offline video collection with this reliable and efficient downloader.
          </p>
        </div>

        
        <div className={`max-w-4xl mx-auto rounded-2xl p-8 shadow-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex gap-4 items-center bg-gray-50 border-2 border-gray-200 rounded-xl p-2 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="px-4 py-3 bg-white border-none rounded-lg font-medium text-gray-700 cursor-pointer min-w-[100px]"
            >
              <option value="mp4">MP4</option>
              <option value="webm">WEBM</option>
              <option value="mov">MOV</option>
            </select>
            
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.loom.com/share/video-id"
              className="flex-1 px-4 py-3 bg-transparent border-none text-lg outline-none"
            />
            
            <button
              onClick={downloadSingle}
              disabled={isLoading}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  📥 Download
                </>
              )}
            </button>
          </div>
        </div>

        {/* Warning Section */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-black text-white p-6 rounded-lg text-center font-semibold uppercase tracking-wide">
            WE DO NOT ALLOW/SUPPORT THE DOWNLOAD OF COPYRIGHTED MATERIAL!
          </div>
        </div>

        {/* Progress Bar */}
        {isLoading && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="max-w-4xl mx-auto mt-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          </div>
        )}

        {/* Download Link */}
        {downloadLink && (
          <div className="max-w-4xl mx-auto mt-4">
            <a
              href={downloadLink}
              download
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📥 Download Video
            </a>
          </div>
        )}

        {/* About Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4 relative inline-block">
            What is loom.fo
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            loom.fo is one of the most popular downloader tools on the internet. With this tool, you can download and convert videos from Loom.com quickly and efficiently. Our platform provides a simple, user-friendly interface for downloading high-quality videos with support for multiple formats and bulk downloads.
          </p>
        </div>
      </div>
    </div>
  );
}
