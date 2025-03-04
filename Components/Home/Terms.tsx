import Link from 'next/link';
import React from 'react';

const Terms = () => {
  const destinations = [
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Indonesia', flag: '🇮🇩' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Europe', flag: '🇪🇺' },
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Cambodia', flag: '🇰🇭' },
    { name: 'Maldives', flag: '🇲🇻' },
    { name: 'Hong Kong', flag: '🇭🇰' },
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'Jordan', flag: '🇯🇴' },
  ];

  return (
    <>
      <div className='bg-white p-10'>
        <div className="max-w-[1200px] mx-auto p-6 border-3 border-red-100 rounded-lg">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-red-600">Terms & Conditions</h2>
              <p className="text-orange-400 mt-1">Earn Maharaja Points with Commbitz</p>
            </div>
            <div className="text-right">
              <p className="mb-2 text-black">Not a Maharaja Club member?</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                Click here to join
              </button>
            </div>
          </div>

          <ul className="list-disc pl-6 text-black space-y-3">
            <li>You must have a valid Maharaja Club membership number to avail of this offer.</li>
            <li>Points will be awarded to customers for each and every qualifying purchase.</li>
            <li>Points will be credited to the Maharaja Club account within 7 Working Days of purchase.</li>
          </ul>
        </div>
      </div>

      <div className='bg-white p-10'>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-black mb-2 font-bold">Connect Anywhere, Anytime – Your eSIM, Your Way</h3>
            <h2 className="text-2xl font-bold text-black">eSIM Destinations</h2>
          </div>

          <div className="relative mb-8 text-black max-w-[600px] mx-auto">
            <div className="relative flex items-center">
              <span className="absolute left-3 z-10">🔍</span>
              <input
                type="text"
                placeholder="Search Destination"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 pl-10"
              />
              <button className="absolute right-2 bg-red-600 text-white px-6 py-2 rounded-md">
                Explore
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {destinations.map((destination, index) => (
              <div key={index} className="flex flex-col items-center p-4 text-black bg-[#F9F4EC73] rounded-lg hover:shadow-md transition-shadow">
                <Link href="/payment">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <span className="text-2xl">{destination.flag}</span>
                  </div>
                  <p className="text-sm text-center">{destination.name}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-2 border border-[#F1B46B] text-black rounded-md hover:border-gray-400">
              See All <span className="ml-2">⏳</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
