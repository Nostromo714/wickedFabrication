import React, { useState} from "react"; 

const FaqCard = ({ question , answer }) => { const [open, setOpen] = useState(false);

    return (
        <div className="flex-1 p-4 border flex flex-col bg-gray-800">
    {/* Question Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{question}</h1>

        {/* Toggle Icon */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Hide answer' : 'Show answer'}
          className="text-white text-xl"
        >
          <i className={`bi bi-chevron-${open ? 'up' : 'down'} transition-transform duration-200`} />
        </button>
      </div>

      {/* Answer */}
      {open && (
        <p className="mt-4 text-gray-300 transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqCard;    
    