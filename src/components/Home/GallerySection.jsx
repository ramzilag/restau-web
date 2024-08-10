import React from 'react';
import wineImage from '../../assets/wine.jpg';  // Update the path to your images
import cookingImage from '../../assets/COOKING.jpg';
import saladImage from '../../assets/vegetarian.jpg';

const NewsSection = () => {
    const newsItems = [
        {
            image: wineImage,
            date: '25 APR',
            title: 'HOW TO SELECT WINE',
            description: 'In this article we will teach you to choose the best wine. At first we must learn to determine which wine is suitable for what kind of dishes. We will start...',
            link: '#'
        },
        {
            image: cookingImage,
            date: '23 APR',
            title: 'MASTER CLASS',
            description: 'In this video master class you will learn how to create a tasty and awesome meal in your own kitchen. Our chef will explain to you some secrets of cooking and serve...',
            link: '#'
        },
        {
            image: saladImage,
            date: '22 APR',
            title: 'NEW VEGETARIAN MENU',
            description: 'We love all our clients. So we had decided to add this new menu for our clients, who prefer a vegetarian meal instead of meat. This new menu will...',
            link: '#'
        }
    ];

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-greyqo text-5xl font-extrabold text-center mb-8">Fresh News</h2>
                <h3 className="text-2xl text-center mb-12">What is going on</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex justify-center items-center">
                                    <span className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full -mt-10 shadow-lg">{item.date}</span>
                                </div>
                                <h4 className="text-xl font-bold mt-4 mb-2 text-center">{item.title}</h4>
                                <p className="text-gray-600 text-center">{item.description}</p>
                                <div className="mt-4 flex justify-center">
                                    <a href={item.link} className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700">Learn More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
