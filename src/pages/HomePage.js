import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector } from 'react-redux';
import { FaUniversity, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

function HomePage() {
  const { schoolName, introduction, carouselHighlights } = useSelector((state) => state.home);
  const { aboutUsImage, aboutUsText } = useSelector((state) => state.about);

  return (
    <div className="min-h-screen">
      <header className="pb-4 sm:py-8 lg:py-12 text-center bg-primary h-[55vh] lg:h-[95vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-btn-primary">{schoolName}</h1>
        <p className="mt-4 text-base xs:text-lg sm:text-xl lg:text-2xl">{introduction}</p>

        <section className="mt-8 mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel-container">
            {carouselHighlights.map((highlight, index) => (
              <div key={index} className="relative ">
                <img
                  src={highlight.img}
                  alt={highlight.text}
                  className="object-fit h-56 sm:h-72 md:h-80 lg:h-[68vh] w-full rounded-lg shadow-lg"
                />
                <p className="legend text-xs xs:text-sm sm:text-lg absolute bottom-0 bg-opacity-70 p-2 rounded-b-lg w-full text-center">
                  {highlight.text}
                </p>
              </div>
            ))}
          </Carousel>
        </section>
      </header>

      <section className="mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 text-btn-primary">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {/* Image Column */}
          <div className="relative flex justify-center items-center">
            <img
              src=
              "https://media.istockphoto.com/id/1756562035/photo/university-campus.webp?b=1&s=170667a&w=0&k=20&c=y1T0bSXoIjeaDaazxJfr6WmtBRv_GDHg4Vw1Pn3E4q4="
              alt={aboutUsImage.alt}
              className="object-cover w-10/12 h-full rounded-lg shadow-lg"
            />
          </div>
          {/* Text Column */}
          <div className="flex flex-col justify-center items-center p-8">
            <p className="text-base xs:text-lg sm:text-xl mb-4"><strong className='text-lg xs:text-xl sm:text-2xl'>Vision<br /></strong> {aboutUsText.vision}</p>
            <p className="text-base xs:text-lg sm:text-xl mb-4"><strong className='text-lg xs:text-xl sm:text-2xl'>Mission<br /></strong> {aboutUsText.mission}</p>
            <a href="/about-us" className="bg-btn-primary text-white rounded-full py-2 px-4 hover:text-black transition-colors">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary mt-8 container mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 text-btn-primary">Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <FaUniversity className="text-blue-600 text-2xl xs:text-3xl sm:text-4xl" />
            </div>
            <h2 className="text-center text-xl xs:text-2xl sm:text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-sm xs:text-base sm:text-lg">Learn more about our history, vision, and values.</p>
            <ul className="text-left mt-4 text-sm xs:text-base sm:text-lg">
              <li className="mt-2">- Founded in 1985, with a rich history of excellence in education.</li>
              <li className="mt-2">- Vision to foster holistic development in students.</li>
              <li className="mt-2">- Values rooted in integrity, respect, and perseverance.</li>
            </ul>
            <a href="/about-us" className="text-blue-600 border-b-2 hover:underline mt-4 inline-block">Read More</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <FaBook className="text-blue-600 text-2xl xs:text-3xl sm:text-4xl" />
            </div>
            <h2 className="text-center text-xl xs:text-2xl sm:text-3xl font-semibold mb-4">Academics</h2>
            <p className="text-sm xs:text-base sm:text-lg">Explore our curriculum and teaching methodologies.</p>
            <ul className="text-left mt-4 text-sm xs:text-base sm:text-lg">
              <li className="mt-2">- Comprehensive curriculum spanning STEM, arts, and humanities.</li>
              <li className="mt-2">- Innovative teaching methodologies including project-based learning.</li>
              <li className="mt-2">- Emphasis on critical thinking and problem-solving skills.</li>
            </ul>
            <a href="/academics" className="text-blue-600 border-b-2 hover:underline mt-4 inline-block">Learn More</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <FaChalkboardTeacher className="text-blue-600 text-2xl xs:text-3xl sm:text-4xl" />
            </div>
            <h2 className="text-center text-xl xs:text-2xl sm:text-3xl font-semibold mb-4">Faculty</h2>
            <p className="text-sm xs:text-base sm:text-lg">Meet our experienced and dedicated faculty members.</p>
            <ul className="text-left mt-4 text-sm xs:text-base sm:text-lg">
              <li className="mt-2">- Qualified educators with a passion for teaching.</li>
              <li className="mt-2">- Ongoing professional development and training.</li>
              <li className="mt-2">- Commitment to student success and well-being.</li>
            </ul>
            <a href="/faculty" className="text-blue-600 border-b-2 hover:underline mt-4 inline-block">Discover More</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
              <FaChalkboardTeacher className="text-blue-600 text-2xl xs:text-3xl sm:text-4xl" />
            </div>
            <h2 className="text-center text-xl xs:text-2xl sm:text-3xl font-semibold mb-4">Gallery</h2>
            <p className='text-sm xs:text-base sm:text-lg'>Take a glimpse into our vibrant school life.</p>
            <ul className="text-left mt-4 text-sm xs:text-base sm:text-lg">
              <li className="mt-2">- Photos and videos of school events and activities.</li>
              <li className="mt-2">- Showcases of student projects and achievements.</li>
              <li className="mt-2">- Virtual tours of our campus and facilities.</li>
            </ul>
            <a href="/gallery" className="text-blue-600 hover:underline mt-4 inline-block">View Gallery</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
