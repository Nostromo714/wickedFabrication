
import react, { useEffect, useState } from 'react';

const quotes = [
    {
        text: "We don’t just weld metal. We bring ideas to life — one spark at a time.",
        author: "Wicked Fabrication"
          },
        {text: "Signs don’t just point the way — they make a statement",
        author: "Wicked Fabrication"
        },
        {text: "Your vision. Our tools. Wicked results ",
            author: "Wicked Fabrication"
         },
        {text: "Wicked cool. Wicked custom. Wicked fabrication. ",
            author: "Wicked Fabrication"
         },
];

const HeroSection = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);   }, 5000); // Change quote every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const { text, author } = quotes[currentQuoteIndex];

    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 pb-12">Wicked Fabrication</h1>

                <div className="transition-opacity duration-1000 ease-in-out max-w-3xl">
                    <p className="text-xl md:text-2xl italic mb-4">“{text}”</p>
                    <p className="text-lg md:text-xl">— {author}</p>
                </div>
            </div>
    );
};
export default HeroSection;