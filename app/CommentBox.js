import { useEffect } from 'react';

function CommentBox() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.commentBox('5685847600922624-proj', {
        sortOrder: 'newest', // specify the default comment sort order ("best", "newest", "oldest")
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  return <div className="commentbox" />;
}

export default CommentBox;
