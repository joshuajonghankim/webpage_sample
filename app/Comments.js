import dynamic from 'next/dynamic';

const Commento = dynamic(
  () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.commento.io/js/commento.js';
      script.defer = true;
      script.onload = () => {
        resolve(() => <div id="commento" />);
      };
      document.body.appendChild(script);
    });
  },
  { ssr: false } // This will only load the component on client side
);

export default function Comments() {
  return <Commento />;
}
