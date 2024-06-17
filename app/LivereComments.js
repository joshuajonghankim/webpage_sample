'use client';
import { useEffect } from 'react';

const LivereComments = () => {
  useEffect(() => {
    const loadLivereScript = () => {
      // Check if the Livere script is already present
      if (!document.querySelector('script[src="https://cdn-city.livere.com/js/embed.dist.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://cdn-city.livere.com/js/embed.dist.js';
        script.async = true;
        script.onload = () => {
          // Initialize Livere after the script has loaded
          window.LivereTower && window.LivereTower.reload();
        };
        document.body.appendChild(script);
      } else {
        // If script is already present, just initialize Livere
        window.LivereTower && window.LivereTower.reload();
      }
    };

    // Call the function to load the script
    loadLivereScript();
  }, []);

  return (
    <div id="lv-container" data-id="city" data-uid="MTAyMC81OTkxNy8zNjM4MA==">
    </div>
  );
};

export default LivereComments;
