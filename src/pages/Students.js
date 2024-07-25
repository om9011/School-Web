import React from 'react';
import { useSelector } from 'react-redux';
import { selectStudentsData } from '../redux/students/studentsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faTheaterMasks, faPalette, faRunning, faRobot, faGavel, faAtom, faBook, faLeaf, faStar, faCode, faTrophy } from '@fortawesome/free-solid-svg-icons';

const iconMapping = {
  "Music": faMusic,
  "Dance": faTheaterMasks,
  "Drama": faTheaterMasks,
  "Art": faPalette,
  "Sports": faRunning,
  "Robotics": faRobot,
  "Debate Club": faGavel,
  "Science Club": faAtom,
  "Literary Society": faBook,
  "Environmental Club": faLeaf,
  "Astronomy Club": faStar,
  "Coding Club": faCode
};

function Students() {
  const { extracurricularActivities, clubsAndSocieties, achievements, studentCouncil } = useSelector(selectStudentsData);

  return (
    <div className="min-h-screen">
      <header className="bg-primary py-4 sm:py-8 text-center rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Life at Springdale</h1>
      </header>

      <section className="container mx-auto p-4 sm:px-6 lg:px-8">
        {/* Extracurricular Activities */}
        <div className="bg-white border p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurricularActivities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center hover:bg-gray-200 transition duration-300"
              >
                <FontAwesomeIcon 
                  icon={iconMapping[activity]} 
                  className="text-3xl mr-4 text-blue-600" 
                />
                <p className="text-lg font-medium text-gray-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs and Societies */}
        <div className="bg-white border p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Clubs and Societies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubsAndSocieties.map((club, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center hover:bg-gray-200 transition duration-300"
              >
                <FontAwesomeIcon 
                  icon={iconMapping[club]} 
                  className="text-3xl mr-4 text-green-600" 
                />
                <p className="text-lg font-medium text-gray-700">{club}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white border p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-gray-200 transition duration-300"
              >
                <FontAwesomeIcon 
                  icon={faTrophy} 
                  className="text-4xl mb-4 text-yellow-600" 
                />
                <h3 className="text-lg font-semibold text-gray-800">{achievement.name}</h3>
                <p className="text-base text-gray-700 mt-2">{achievement.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Council */}
        <div className="bg-white border p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Student Council</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-gray-200 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">{studentCouncil.president.name}</h3>
              <p className="text-base text-gray-700 mt-2">President</p>
              <p className="text-base text-gray-700 mt-2">{studentCouncil.president.grade}</p>
            </div>
            <div 
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-gray-200 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">{studentCouncil.vicePresident.name}</h3>
              <p className="text-base text-gray-700 mt-2">Vice President</p>
              <p className="text-base text-gray-700 mt-2">{studentCouncil.vicePresident.grade}</p>

            </div>
            <div 
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-gray-200 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">{studentCouncil.secretary.name}</h3>
              <p className="text-base text-gray-700 mt-2">Secretary</p>
              <p className="text-base text-gray-700 mt-2">{studentCouncil.secretary.grade}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Students;
