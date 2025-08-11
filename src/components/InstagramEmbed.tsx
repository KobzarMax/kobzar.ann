'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    // Load Instagram script only once
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm?.Embeds?.process) {
      // If script already loaded, reprocess embeds
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div
      style={{ maxWidth: 540, margin: '0 auto' }}
      dangerouslySetInnerHTML={{
        __html: `
          <blockquote 
            class="instagram-media" 
            data-instgrm-permalink="${url}" 
            data-instgrm-version="14"
            style="margin: 1px auto; background: #FFF; border: 0; border-radius: 3px; box-shadow: 0 0 1px rgba(0,0,0,0.5),0 1px 10px rgba(0,0,0,0.15); width:100%;">
          </blockquote>
        `
      }}
    />
  );
}
