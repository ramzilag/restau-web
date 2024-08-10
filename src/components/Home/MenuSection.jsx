import React from 'react';

// Import images directly
import SpringBurgerImg from '../../assets/burger.jpg';
import LightBreezeImg from '../../assets/dessert.jpg';
import SteakWithFriesImg from '../../assets/steak.jpg';

const MenuSection = () => {
  const menuItems = [
    {
      name: 'SPRING BURGER',
      price: '$15',
      originalPrice: '$20',
      image: SpringBurgerImg,
      menuType: 'Season Menu',
    },
    {
      name: 'LIGHT BREEZE',
      price: '$10',
      image: LightBreezeImg,
      menuType: 'Dessert Menu',
    },
    {
      name: 'STEAK WITH FRIES',
      price: '$25',
      image: SteakWithFriesImg,
      menuType: 'Steak Menu',
    },
  ];

  return (
    <section className="py-16 pt-40">
      <div className="container mx-auto text-center">
        <h2 className="font-greyqo text-red-500 text-5xl mb-2">Freshly Taste</h2>
        <h3 className="text-3xl font-bold mb-8">NEW IN OUR MENU</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-red-500 text-xl font-semibold mb-2">
                  {item.menuType}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.name}</h4>
                <div className="text-gray-500 text-lg">
                  <span className="line-through mr-2">{item.originalPrice}</span>
                  <span className="text-red-500">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
