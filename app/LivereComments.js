// components/LivereComments.js

import { useEffect } from 'react';

const LivereComments = () => {
  useEffect(() => {
    // Check if Livere script is already loaded
    const loadLivereScript = () => {
      if (typeof LivereTower !== 'function') {
        console.log("Loading Livere script...");
        const script = document.createElement('script');
        script.src = 'https://cdn-city.livere.com/js/embed.dist.js';
        script.async = true;

        // Append the script to the body
        document.body.appendChild(script);

        // Log when script is loaded
        script.onload = () => {
          console.log("Livere script loaded successfully.");
        };

        // Log if script fails to load
        script.onerror = () => {
          console.error("Failed to load Livere script.");
        };
      } else {
        console.log("Livere script is already loaded.");
      }
    };

    // Ensure the script is loaded on the client-side
    if (typeof window !== 'undefined') {
      loadLivereScript();
    }

    // Cleanup function to remove the script if needed
    return () => {
      const existingScript = document.querySelector(`script[src='https://cdn-city.livere.com/js/embed.dist.js']`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div id="lv-container" data-id="city" data-uid="MTAyMC81OTkxNy8zNjM4MA==">
      
    </div>
  );
};

export default LivereComments;
