"use client";

import { useEffect } from 'react';

const LivereComments = () => {
  useEffect(() => {
    const checkLivereTowerInitialization = () => {
      if (typeof window.LivereTower === 'function') {
        console.log("LivereTower initialized successfully.");
        // Additional logic to execute once LivereTower is initialized can go here.
        return true;
      }
      return false;
    };

    const loadLivereScript = () => {
      // Set Livere options before script loading
      window.livereOptions = {
        refer: 'lsy-khe.vercel.app/',
      };

      // Create and append the Livere script
      const script = document.createElement('script');
      script.src = 'https://cdn-city.livere.com/js/embed.dist.js';
      script.async = true;

      script.onload = () => {
        console.log('Livere script loaded successfully.');
        // Start polling to check for LivereTower initialization
        const interval = setInterval(() => {
          if (checkLivereTowerInitialization()) {
            clearInterval(interval);
          }
        }, 100); // Check every 100ms
      };

      script.onerror = () => {
        console.error('Failed to load Livere script.');
      };

      document.body.appendChild(script);

      // Clean up the script when the component is unmounted
      return () => {
        document.body.removeChild(script);
        console.log('Livere script removed on cleanup.');
      };
    };

    // Check if LivereTower is already loaded to avoid reloading
    if (!checkLivereTowerInitialization()) {
      loadLivereScript();
    }
  }, []);

  return (
    <div id="lv-container" data-id="city" data-uid="MTAyMC81OTkxNy8zNjM4MA==">
      {/* Comments will be loaded here by Livere */}
    </div>
  );
};

export default LivereComments;