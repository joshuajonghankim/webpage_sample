'use client';

import { useEffect } from 'react';

const LivereComments = () => {
  useEffect(() => {
    // LivereTower가 이미 로드된 경우, 다시 로드하지 않음
    if (typeof window.LivereTower === 'function') return;

    window.livereOptions = {
      refer: 'lsy-khe.vercel.app/',
    };

    // 라이브리 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    script.async = true;
    script.onload = () => {
      console.log('Livere script loaded successfully.');
    };
    script.onerror = () => {
      console.error('Failed to load Livere script.');
    };

    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="lv-container" data-id="city" data-uid="MTAyMC81OTkxNy8zNjM4MA==">
      
    </div>
  );
};

export default LivereComments;
