import React from 'react';
import grill from '../../assets/burger.jpg'
const GrillBurgerMenu = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              <span className="font-greyqo text-red-600 font-cursive">Delicious Menu</span> GRILL AND BURGER
            </h2>
            <div className="space-y-6">
              {/* Repeat this block for each menu item */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">RIBS BARBECUE</h3>
                  <p className="text-sm text-gray-600">
                    Pork ribs in a traditional marinade, baked on the coals. Served with cherry tomatoes, special sauce and greens.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$70</span>
                  <span className="text-red-600 text-xl font-semibold ml-2">$55</span>
                  <p className="text-sm text-gray-600">600/100/50g</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">GRILLED SAUSAGES</h3>
                  <p className="text-sm text-gray-600">
                    Best companion for our craft beer. Hot, juicy, and crispy. Wide range of traditional sauces also available for you.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$30</span>
                  <span className="text-red-600 text-xl font-semibold ml-2">$25</span>
                  <p className="text-sm text-gray-600">200/50g</p>
                </div>
              </div>
              {/* Add more menu items here following the same structure */}
            </div>
          </div>
          <div className="relative">
            <img
              src={grill} // Replace with your image path
              alt="Grill and Burger"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrillBurgerMenu;
