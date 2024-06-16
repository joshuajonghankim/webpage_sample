// components/LivereComments.js

import { useEffect } from 'react';

const LivereComments = () => {
  useEffect(() => {
    // Check if Livere script is already loaded
    if (typeof LivereTower !== 'function') {
      const script = document.createElement('script');
      script.src = 'https://cdn-city.livere.com/js/embed.dist.js';
      script.async = true;

      const parentNode = document.getElementsByTagName('script')[0];
      parentNode.parentNode.insertBefore(script, parentNode);
    }
  }, []);

  return (
    <div id="lv-container" data-id="city" data-uid="MTAyMC81OTkxNy8zNjM4MA==">
      <noscript>라이브리 댓글 작성을 위해 JavaScript를 활성화 해주세요</noscript>
    </div>
  );
};

export default LivereComments;