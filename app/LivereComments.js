// components/LivereComments.js
'use client';  // Next.js 13 이상에서 클라이언트 전용 컴포넌트로 지정

import { useEffect } from 'react';

const LivereComments = () => {
  useEffect(() => {
    window.livereOptions = {
      refer: 'lsy-khe.vercel.app/'
    };
    // 라이브리 설치 코드
    (function (d, s) {
      var j, e = d.getElementsByTagName(s)[0];
      /*
      */

      if (typeof LivereTower === 'function') { return; }

      j = d.createElement(s);
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
      j.async = true;

      e.parentNode.insertBefore(j, e);
    })(document, 'script');

  }, []);

  return (
    <div id="lv-container" data-id="city" data-uid="MTAyMC81OTkxNy8zNjM4MA==">
      <noscript>라이브리 댓글 작성을 위해 JavaScript를 활성화 해주세요</noscript>
    </div>
  );
};

export default LivereComments;
