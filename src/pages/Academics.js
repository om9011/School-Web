import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faLaptop, faFlask, faCalculator, faUsers, faUniversity } from '@fortawesome/free-solid-svg-icons';

function Academics() {
  const { curriculum, teachingMethodologies, educationalResources } = useSelector((state) => state.academics);

  const subjectIcons = {
    English: faBook,
    Mathematics: faCalculator,
    Science: faFlask,
    'Social Studies': faUsers,
    'Computer Science': faLaptop,
    'Physical Education': faChalkboardTeacher,
    Art: faBook,
    Physics: faFlask,
    Chemistry: faFlask,
    Biology: faFlask,
    Accountancy: faCalculator,
    'Business Studies': faBook,
    Economics: faBook
  };

  const renderSubjectCards = (subjects) => {
    return subjects.map((subject, index) => (
      <div key={index} className="bg-white border p-4 sm:p-6 rounded-lg shadow-lg flex items-center mb-4">
        <FontAwesomeIcon icon={subjectIcons[subject]} className="text-2xl sm:text-3xl mr-4" />
        <span className="text-base sm:text-lg">{subject}</span>
      </div>
    ));
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary py-4 sm:py-8 text-center rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Academics</h1>
      </header>

      <section className="mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-4">Curriculum</h2>
        
        <div className="mt-8">
          <h3 className="text-primary mb-6 bg-btn-primary py-2 rounded-md justify-center text-lg sm:text-xl md:text-2xl font-bold flex items-center ">
            <FontAwesomeIcon icon={faUniversity} className="mr-2" /> Primary (Grades 1-5)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 ">
            {renderSubjectCards(curriculum.primary)}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-primary bg-btn-primary py-2 rounded-md justify-center text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center">
            <FontAwesomeIcon icon={faBook} className="mr-2" /> Secondary (Grades 6-10)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {renderSubjectCards(curriculum.secondary)}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-primary bg-btn-primary py-2 rounded-md justify-center text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" /> Senior Secondary (Grades 11-12)
          </h3>
          
          <div className="ml-4">
            <h4 className="text-lg sm:text-lg md:text-xl font-bold mb-2 text-center">Science Stream</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {renderSubjectCards(curriculum.seniorSecondary.scienceStream)}
            </div>
          </div>

          <div className="ml-4 mt-4">
            <h4 className="text-lg sm:text-lg md:text-xl font-bold mb-2 text-center">Commerce Stream</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {renderSubjectCards(curriculum.seniorSecondary.commerceStream)}
            </div>
          </div>
        </div>
      </section>

      <div className='bg-primary'>

      <section className="pt-6 mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-4">Teaching Methodologies</h2>
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg flex items-center">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl sm:text-4xl mr-4" />
          <p className="text-base sm:text-lg md:text-xl">{teachingMethodologies}</p>
        </div>
      </section>

      <section className="pb-6 mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-4">Educational Resources</h2>
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg flex items-center">
          <FontAwesomeIcon icon={faLaptop} className="text-2xl sm:text-4xl mr-4" />
          <p className="text-base sm:text-lg md:text-xl">{educationalResources}</p>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Academics;
