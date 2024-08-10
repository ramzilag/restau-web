import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import img1 from '../../assets/ribs.jpg'; 
import img2 from '../../assets/breakfast.jpg';
import img3 from '../../assets/dessertt.jpg';
import img4 from '../../assets/salade.jpg';
import img5 from '../../assets/steaknew.jpg';

const images = [img1, img2, img3, img4, img5];

const MenuPage = () => {
  return (
    <div className="menu-page relative w-full h-screen">
      <AwesomeSlider
        className="absolute w-full h-full"
        cssModule={true}
        style={{ height: '80vh' }} // Adjust the height of the slider
      >
        {images.map((image, index) => (
          <div
            key={index}
            data-src={image}
            style={{ height: '90vh' }} // Adjust the height of each slide
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
              <h2 className="font-greyqo text-4xl font-bold">
                {index === 0 && 'Desserts Menu'}
                {index === 1 && 'Breakfast Menu'}
                {index === 2 && 'Desserts Menu'}
                {index === 3 && 'Salad Menu'}
                {index === 4 && 'Steak Menu'}
              </h2>
              <h1 className="text-6xl font-extrabold">
                {index === 0 && 'TROPICAL ICE CREAM'}
                {index === 1 && 'CLASSIC BREAKFAST'}
                {index === 2 && 'CHOCOLATE FUDGE CAKE'}
                {index === 3 && 'CAESAR SALAD'}
                {index === 4 && 'GRILLED STEAK'}
              </h1>
              <p className="text-lg mt-4">
                {index === 0 && 'Fantastic ice cream made by special recipe with adding mix of tropical fruits. Served in glass with chocolate.'}
                {index === 1 && 'Enjoy a hearty breakfast with eggs, toast, and bacon. Served with fresh orange juice.'}
                {index === 2 && 'Decadent chocolate cake with rich fudge icing. Served with a scoop of vanilla ice cream.'}
                {index === 3 && 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese. Topped with grilled chicken.'}
                {index === 4 && 'Perfectly grilled steak with a side of mashed potatoes and seasonal vegetables. Served with a rich gravy.'}
              </p>
              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </AwesomeSlider>
      {/* Custom styling for arrows */}
      <style jsx>{`
        .aws-slider .aws-nav {
          color: black; /* Dark arrows */
        }
        .aws-slider .aws-nav .aws-prev,
        .aws-slider .aws-nav .aws-next {
          font-size: 24px;
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 1); /* Darker background for arrows */
        }
        .aws-slider .aws-nav .aws-prev:hover,
        .aws-slider .aws-nav .aws-next:hover {
          background: rgba(0, 0, 0, 0.9); /* Even darker background on hover */
        }
      `}</style>
    </div>
  );
};

export default MenuPage;
