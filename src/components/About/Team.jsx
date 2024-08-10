import React from 'react';
import teamImage1 from '../../assets/abdou.jpg'; // Ensure correct paths
import teamImage2 from '../../assets/amine.jpeg';
import teamImage3 from '../../assets/wassim.jpg';

const ProfessionalTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'SCOTTY MASON',
      role: 'Sous-Chef',
      image: teamImage1,
    },
    {
      id: 2,
      name: 'BRITTNEY mflga',
      role: 'Fish Master',
      image: teamImage2,
    },
    {
      id: 3,
      name: 'JOHNNY j3layla',
      role: 'Desserts Master',
      image: teamImage3,
    },
  ];

  return (
    <section className="text-center py-16">
      <h3 className="font-greyqo text-red-500 text-5xl md:text-6xl   mb-4">Our Masters</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">PROFESSIONAL TEAM</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="w-80 bg-white shadow-lg">
            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h4 className="text-red-500 text-xl italic">{member.role}</h4>
              <h3 className="text-2xl font-bold">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <button className="bg-red-600 text-white py-2 px-4 rounded">LEARN MORE</button>
      </div>
    </section>
  );
}

export default ProfessionalTeam;
