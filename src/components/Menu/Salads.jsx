import React from 'react';
import salade from '../../assets/salade.jpg'
const SaladMenu = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              <span className="font-greyqo text-green-600 font-cursive">Healthy & Fresh </span> SALAD MENU
            </h2>
            <div className="space-y-6">
              {/* Repeat this block for each menu item */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">GREEK SALAD</h3>
                  <p className="text-sm text-gray-600">
                    A classic Greek salad with tomatoes, cucumber, red onion, feta cheese, and olives. Drizzled with olive oil.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$15</span>
                  <span className="text-green-600 text-xl font-semibold ml-2">$12</span>
                  <p className="text-sm text-gray-600">200g</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">CAESAR SALAD</h3>
                  <p className="text-sm text-gray-600">
                    Crisp romaine lettuce, croutons, and parmesan cheese tossed in a creamy Caesar dressing.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$20</span>
                  <span className="text-green-600 text-xl font-semibold ml-2">$17</span>
                  <p className="text-sm text-gray-600">250g</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">COBB SALAD</h3>
                  <p className="text-sm text-gray-600">
                    Mixed greens topped with grilled chicken, bacon, avocado, blue cheese, and a hard-boiled egg.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$18</span>
                  <span className="text-green-600 text-xl font-semibold ml-2">$15</span>
                  <p className="text-sm text-gray-600">300g</p>
                </div>
              </div>
              {/* Add more salad items here following the same structure */}
            </div>
          </div>
          <div className="relative">
            <img
              src={salade} // Replace with your image path
              alt="Salads"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaladMenu;
