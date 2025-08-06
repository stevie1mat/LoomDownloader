import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const fetchLoomDownloadUrl = async (id: string) => {
  try {
    console.log('Calling Loom API for ID:', id);
    const { data } = await axios.post(`https://www.loom.com/api/campaigns/sessions/${id}/transcoded-url`);
    console.log('Loom API response:', data);
    return data.url;
  } catch (error: any) {
    console.error('Loom API error:', error.response?.data || error.message);
    throw new Error(`Failed to get download URL: ${error.response?.data?.message || error.message}`);
  }
};

const extractId = (url: string) => {
  url = url.split('?')[0];
  return url.split('/').pop() || '';
};

export async function POST(request: NextRequest) {
  try {
    const { url, filename } = await request.json();
    
    console.log('Received download request:', { url, filename });
    
    if (!url) {
      console.log('No URL provided');
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }
    
    const videoId = extractId(url);
    console.log('Extracted video ID:', videoId);
    
    const downloadUrl = await fetchLoomDownloadUrl(videoId);
    console.log('Got download URL:', downloadUrl);
    
    const outputFilename = filename || `${videoId}.mp4`;
    
    console.log(`Getting download URL for video ${videoId}`);
    
    return NextResponse.json({
      success: true,
      filename: outputFilename,
      videoId: videoId,
      downloadUrl: downloadUrl
    });
    
  } catch (error: any) {
    console.error('Download error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 