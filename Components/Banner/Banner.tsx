import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/Images/Banner.png" 
          alt="Woman in flowing pink dress by the water"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Communication with Commbitz<br />
          is now even more rewarding.
        </h1>
        <p className="text-xl mb-6">
          Earn 17 Maharaja Points on every INR 100 spent with Commbitz.
        </p>
        <div className="flex gap-6 text-lg">
          <span>• eSIMs</span>
          <span>• SIMs</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
