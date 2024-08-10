import React from 'react';
import dessert from '../../assets/dessertt.jpg'
const DessertMenu = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              <span className="font-greyqo text-pink-600 font-cursive">Sweet & Delightful</span> DESSERT MENU
            </h2>
            <div className="space-y-6">
              {/* Dessert Item 1 */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">STRAWBERRY LAVA CAKE</h3>
                  <p className="text-sm text-gray-600">
                    Rich and gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$12</span>
                  <span className="text-pink-600 text-xl font-semibold ml-2">$10</span>
                  <p className="text-sm text-gray-600">150g</p>
                </div>
              </div>
              {/* Dessert Item 2 */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">TIRAMISU</h3>
                  <p className="text-sm text-gray-600">
                    Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$15</span>
                  <span className="text-pink-600 text-xl font-semibold ml-2">$13</span>
                  <p className="text-sm text-gray-600">200g</p>
                </div>
              </div>
              {/* Dessert Item 3 */}
              <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                <div>
                  <h3 className="text-lg font-bold">CHEESECAKE</h3>
                  <p className="text-sm text-gray-600">
                    Creamy cheesecake with a buttery graham cracker crust, topped with fresh berries.
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">$14</span>
                  <span className="text-pink-600 text-xl font-semibold ml-2">$11</span>
                  <p className="text-sm text-gray-600">180g</p>
                </div>
              </div>
              {/* Add more dessert items here */}
            </div>
          </div>
          <div className="relative">
            <img
              src={dessert} // Replace with your image path
              alt="Desserts"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertMenu;
