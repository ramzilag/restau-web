import React from 'react';
import halal from '../../assets/hlaal.jpg'
const HalalDrinksMenu = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              <span className="font-greyqo text-blue-600 font-cursive">Refreshing & Pure</span> HALAL DRINKS MENU
            </h2>
            <div className="space-y-6">
              {/* Halal Drink Item 1 */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">MINT LEMONADE</h3>
                  <p className="text-sm text-gray-600">
                    Freshly squeezed lemons with a hint of mint, perfect for a refreshing taste.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$8</span>
                  <span className="text-blue-600 text-xl font-semibold ml-2">$6</span>
                  <p className="text-sm text-gray-600">350ml</p>
                </div>
              </div>
              {/* Halal Drink Item 2 */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">MANGO LASSI</h3>
                  <p className="text-sm text-gray-600">
                    A traditional yogurt-based drink blended with sweet mangoes.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$10</span>
                  <span className="text-blue-600 text-xl font-semibold ml-2">$8</span>
                  <p className="text-sm text-gray-600">300ml</p>
                </div>
              </div>
              {/* Halal Drink Item 3 */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">ROSE SHARBAT</h3>
                  <p className="text-sm text-gray-600">
                    A fragrant and refreshing rose-flavored drink, served chilled.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$9</span>
                  <span className="text-blue-600 text-xl font-semibold ml-2">$7</span>
                  <p className="text-sm text-gray-600">300ml</p>
                </div>
              </div>
              {/* Add more halal drink items here */}
            </div>
          </div>
          <div className="relative">
            <img
              src={halal} // Replace with your image path
              alt="Halal Drinks"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalalDrinksMenu;
