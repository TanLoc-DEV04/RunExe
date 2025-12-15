import React from 'react';

interface VideoEmbedProps {
  url: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url }) => {
  const getEmbedUrl = (inputUrl: string) => {
    try {
      const urlObj = new URL(inputUrl);
      let videoId = '';

      if (urlObj.pathname.includes('/shorts/')) {
        videoId = urlObj.pathname.split('/shorts/')[1];
      } else if (urlObj.searchParams.has('v')) {
        videoId = urlObj.searchParams.get('v') || '';
      }

      if (!videoId) return null;

      return `https://www.youtube.com/embed/${videoId}`;
    } catch (e) {
      console.error('Invalid URL', e);
      return null;
    }
  };

  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) return null;

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginBottom: '8px' }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;
