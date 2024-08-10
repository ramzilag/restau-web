import React from 'react';
import { FaUtensils, FaUsers, FaTruck, FaGlassCheers, FaClock, FaMusic } from 'react-icons/fa';


const Benefits = () => {
    const benefits = [
        {
            icon: <FaUtensils className="text-red-600 text-6xl" />,
            title: "FRESHLY COOKED",
            description: "Our steaks are always fresh and perfect, because we use only the best meat from proven suppliers."
        },
        {
            icon: <FaUsers className="text-red-600 text-6xl" />,
            title: "PROFESSIONAL TEAM",
            description: "We understand how to best serve our customers through tried and true service principles."
        },
        {
            icon: <FaTruck className="text-red-600 text-6xl" />,
            title: "QUICK DELIVERY",
            description: "Quick and quality delivery. You may be sure that your order will be fresh, just like from the fire."
        },
        {
            icon: <FaGlassCheers className="text-red-600 text-6xl" />,
            title: "WIDE RANGE DRINKS",
            description: "No matter what you prefer: strong whiskey, light beer, or tasty wine. We have all of this and more."
        },
        {
            icon: <FaClock className="text-red-600 text-6xl" />,
            title: "SAVE YOUR TIME",
            description: "We know the cost of time, so we cook for you really fast, but always with the best quality."
        },
        {
            icon: <FaMusic className="text-red-600 text-6xl" />,
            title: "LIVE MUSIC",
            description: "Every evening you can enjoy not only perfect steaks but also wonderful lounge live music."
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-greyqo text-red-600 text-6xl font-bold mb-4">Why We</h3>
                <h2 className=" text-4xl font-extrabold mb-12">OUR BENEFITS</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {benefit.icon}
                            <h4 className="text-xl font-bold mt-4 mb-2">{benefit.title}</h4>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Benefits;
