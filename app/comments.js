// pages/comments.js
import Script from 'next/script';
import Head from 'next/head';

const CommentsPage = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      
      <div id="lv-container" data-id="city" data-uid="MTAyMC81OTkxNy8zNjM4MA=="></div>
      <noscript>라이브리 댓글 작성을 위해 JavaScript를 활성화 해주세요</noscript>
      
      <Script 
        strategy="afterInteractive" // Ensures the script is loaded after the page is interactive
        src="https://cdn-city.livere.com/js/embed.dist.js"
      />

      <Script id="livere-tower">
        {`(function(d, s) {
            var j, e = d.getElementsByTagName(s)[0];

            if (typeof LivereTower === 'function') { return; }

            j = d.createElement(s);
            j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
            j.async = true;

            e.parentNode.insertBefore(j, e);
          })(document, 'script');`}
      </Script>
    </div>
  );
};

export default CommentsPage;

