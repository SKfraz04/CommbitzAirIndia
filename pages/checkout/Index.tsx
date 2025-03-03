import { useState } from 'react';
import Header from '../../Components/Headers/Header';
import Footer from '../../Components/Footer/Footer';

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Header />
      <div className="min-h-screen text-black bg-gray-100 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Package Options */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Package options</h2>
            
            {/* SIM Card Validity */}
            <div className="mb-6">
              <h3 className="text-gray-600 mb-3">SIM card validity</h3>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 30].map((days) => (
                  <button
                    key={days}
                    className={`px-4 py-2 rounded-md ${
                      days === 2
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>

            {/* Data Package */}
            <div className="mb-6">
              <h3 className="text-gray-600 mb-3">Data package</h3>
              <div className="flex flex-wrap gap-2">
                {['500MB', '1GB', '5GB', '10GB', '20GB', 'Unlimited'].map((data) => (
                  <button
                    key={data}
                    className={`px-4 py-2 rounded-md ${
                      data === '1GB'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {data}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-gray-600 mb-3">Quantity</h3>
              <div className="flex items-center p-4 border rounded-lg">
                <div className="flex items-center gap-2">
                  <img src="/south-korea-flag.png" alt="South Korea" className="w-8 h-8 rounded-full" />
                  <span>South Korea</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-gray-400 line-through">$99</span>
                  <span className="text-xl font-semibold">$70</span>
                  <div className="flex items-center gap-2 ml-4">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-red-500 text-white w-8 h-8 rounded-md"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-red-500 text-white w-8 h-8 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Summary */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Plan Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Data</span>
                <span>1GB</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span>2 Days</span>
              </div>
              
              <hr className="my-4" />
              
              <h3 className="font-semibold">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$70</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$0.50</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$70.50</span>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 mb-2">
                  Enter Maharaja Membership ID
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Membership ID"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button className="px-4 py-2 bg-orange-200 rounded-md">
                    Submit
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-4">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-600">
                  I confirm that my device is eSIM compatible and network - unlocked.
                  <span className="text-red-500"> Learn More</span>
                </label>
              </div>

              <button className="w-full bg-red-500 text-white py-3 rounded-md mt-4">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
