import React from 'react';
import img1 from '../../assets/steaknew.jpg'
const SteakMenu = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img
              src={img1}// Replace with your image path
              alt="Steak Dish"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-8">
            <h2 className="text-5xl font-semibold text-gray-800 mb-4">
              <span className="font-greyqo text-red-600 font-cursive">Traditional </span>  STEAKS MENU
            </h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">BIG STEAK HOUSE</h3>
                  <p className="text-sm text-gray-600">
                    Very huge steak for good company with grilled potatoes, grilled corn, fresh greenery and sauce on your choice.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$70</span>
                  <span className="text-red-600 text-xl font-semibold ml-2">$55</span>
                  <p className="text-sm text-gray-600">600/200/50g</p>
                </div>
              </div>
              {/* Repeat the above block for each menu item */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">CHICAGO STEAK</h3>
                  <p className="text-sm text-gray-600">
                    Our firm steak made from perfect meat according to the company's recipe with unique sauce for fantastic taste.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$30</span>
                  <span className="text-red-600 text-xl font-semibold ml-2">$25</span>
                  <p className="text-sm text-gray-600">200/50g</p>
                </div>
              </div>
              {/* Add more steak items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteakMenu;
