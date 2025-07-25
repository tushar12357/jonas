import React from "react";

interface EnquireNowProps {
  scrollToContact: () => void;
}

const EnquireNow: React.FC<EnquireNowProps> = ({ scrollToContact }) => {
  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-4 text-red-600 border-red-600 border-2 right-4 bg-[#ecf86e] px-6 py-3 rounded-full text-lg font-bold tracking-wider transition-colors duration-300 hover:bg-yellow-500 z-50"
    >
      ENQUIRE NOW
    </button>
  );
};

export default EnquireNow;
