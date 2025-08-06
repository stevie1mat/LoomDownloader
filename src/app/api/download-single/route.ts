import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const fetchLoomDownloadUrl = async (id: string) => {
  try {
    console.log('Calling Loom API for ID:', id);
    const { data } = await axios.post(`https://www.loom.com/api/campaigns/sessions/${id}/transcoded-url`);
    console.log('Loom API response:', data);
    return data.url;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const axiosError = error as { response?: { data?: { message?: string } } };
    const responseMessage = axiosError.response?.data?.message;
    console.error('Loom API error:', axiosError.response?.data || errorMessage);
    throw new Error(`Failed to get download URL: ${responseMessage || errorMessage}`);
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
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Download error:', error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 