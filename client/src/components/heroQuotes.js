import React, { useEffect, useState } from 'react';
import '../index.css';

const quotes = [
  {
    text: "We don’t just weld metal. We bring ideas to life — one spark at a time.",
    author: "Wicked Fabrication"
  },
  {
    text: "Signs don’t just point the way — they make a statement",
    author: "Wicked Fabrication"
  },
  {
    text: "Your vision. Our tools. Wicked results ",
    author: "Wicked Fabrication"
  },
  {
    text: "Wicked cool. Wicked custom. Wicked fabrication.",
    author: "Wicked Fabrication"
  },
];

const HeroQuotes = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="relative h-40 flex flex-col items-center justify-center text-white transition-all duration-2000 ease-in-out"
    >
      {quotes.map((quote, i) => (
        <div
          key={i}
          className={`absolute text-center max-w-xl px-4 transition-opacity duration-[1500ms] animated-gradient-text ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-3xl md:text-4xl italic">“{quote.text}”</p>
          <p className="text-lg mt-2">— {quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroQuotes;