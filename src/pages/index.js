import { useState } from 'react';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const quotes =   [{
      "id": 1,
      "quoteEs": "El conocimiento es poder",
      "quoteEn": "Knowledge is power",
      "author": "Peter Baelish",
      "prompt": "Visual representation of the phrase 'Knowledge is Power', expressed through a luminous, ethereal library that stretches infinitely, with books glowing like treasures in a fantastical realm. Incorporate detailed, intricate patterns on the book spines, symbolizing the wealth of knowledge contained within. The light emanating from the books should cast a warm, empowering glow across the scene, creating a tranquil yet majestic atmosphere. Add in ethereal, floating particles to enhance the magical vibe, and ensure the overall tone is inspiring and profound. Render this in a high-resolution, ultra-detailed digital painting style, capturing the richness and depth of the scene. –v 5 –ar 16:9 –q 2 –uplight",
      "quoteImage": "https://cdn.midjourney.com/bfa94f2b-1a6a-403e-ae31-5e4ed13d9d5e/0_3.webp",
      "promptImage": "https://cdn.midjourney.com/240073b3-62c6-4d1e-9047-e71ec6de5bdb/0_2.webp"}];
  // Assuming you want to show the first quote as an example
  const quote = quotes[0];
  return {
    props: {
      quote
    }
  };
}

export default function Home({ quote }) {
  const [flip, setFlip] = useState(false);

  const handleImageClick = () => {
    setFlip(!flip);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(quote.prompt).then(() => {
      alert('Prompt copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
      <div className={styles.container}>
        <h1>{quote.quoteEn}</h1>
        <img
            src={flip ? quote.promptImage : quote.quoteImage}
            alt="Flip Image"
            onClick={handleImageClick}
            className={styles.flipImage}
        />
        <button onClick={handleCopyClick}>Copy Prompt</button>
      </div>
  );
}
