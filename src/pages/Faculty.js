import React from 'react';
import { useSelector } from 'react-redux';
import { selectFacultyProfiles } from '../redux/faculty/facultySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Faculty() {
  const profiles = useSelector(selectFacultyProfiles);

  return (
    <div className="min-h-screen">
      <header className="bg-primary py-6 sm:py-8 text-center rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Faculty</h1>
      </header>

      <section className="mt-12 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className="bg-white border p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 object-cover shadow-md" 
                />
                <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl sm:text-3xl text-gray-400 mb-4" />
                <h2 className="text-lg sm:text-xl font-semibold text-primary-600 mb-2 text-center">{profile.name}</h2>
                <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2 text-center">{profile.title}</h3>
                <p className="text-sm sm:text-base text-gray-500 text-center italic">{profile.degree}</p>
                <p className="text-sm sm:text-base text-gray-700 text-center mt-4">{profile.experience}</p>
                <FontAwesomeIcon icon={faQuoteRight} className="text-2xl sm:text-3xl text-gray-400 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faculty;
