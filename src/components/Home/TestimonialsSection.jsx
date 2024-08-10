import React from 'react';
import img1 from '../../assets/64.jpg'
import img2 from '../../assets/67.jpg'
import img3 from '../../assets/79.jpg'
import img4 from '../../assets/34.jpg'
import img5 from '../../assets/43.jpg'
import img6 from '../../assets/15.jpg'
// Dummy data for testimonials
const testimonials = [
  {
    name: 'John Smith',
    image: img4, // Replace with actual path
    rating: 5,
    text: 'The Restbeef was one of the first restaurants I discovered upon moving to Chicago last summer. Perfect steaks, service on the highest level. I recommend it to all people who love tasty meat.',
  },
  {
    name: 'Megan Knight',
    image: img1, // Replace with actual path
    rating: 4,
    text: 'Love so much evening lounge music concert! It’s wonderful. But I’m vegetarian, so I don’t like meat, but there is a lot of salads and very tasty desserts, so I think everyone can find what to taste.',
  },
  {
    name: 'Dolores Ford',
    image: img5, // Replace with actual path
    rating: 5,
    text: 'Best service I’ve ever seen in Chicago. Very polite staff, beautiful serving and serving dishes. Love their burgers. At weekends they have special offers that are very affordable for me and very tasty!',
  },
  {
    name: 'Emmy Snow',
    image: img2, // Replace with actual path
    rating: 3,
    text: 'Very wide range of salads to select, but I don’t like places where people eat poor animals. But my boyfriend loves steaks and beer. That place has very skilled staff and fantastic salads. Desserts are also the best.',
  },
  {
    name: 'Frank Stewart',
    image: img6, // Replace with actual path
    rating: 5,
    text: 'Me and my girlfriend are in love with this place. Here we met at first time and go here every week to taste awesome steaks and drink some beer, listening to fantastic lounge music. Strongly recommend!',
  },
  {
    name: 'Angela Kelly',
    image: img3, // Replace with actual path
    rating: 4,
    text: 'Me and my friends like to spend weekend evenings in the Restbeef. Relaxing lounge music, wide range of wine card, perfect meat. What else do people need after a hard working week? Maybe just more action…',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="font-greyqo text-red-500 text-5xl font-semibold mb-2">Our Clients Say</h2>
        <h3 className="text-3xl font-bold mb-8">TESTIMONIALS</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
              </div>
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
              <div className="flex justify-center my-2">
                {[...Array(testimonial.rating)].map((star, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path d="M12 17.3l6.2 4.6-4.7-7.3L20 9.3h-8.3L12 2 11.3 9.3H3l6.5 5.3L5 21.9l6.2-4.6z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
