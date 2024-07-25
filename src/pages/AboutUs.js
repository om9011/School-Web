import React from 'react';
import { useSelector } from 'react-redux';
import campus from "../assets/images/campus.jpg"

function AboutUs() {
    const { aboutUsText } = useSelector((state) => state.about);

    return (
        <div className="min-h-screen">
            <section className="container mx-auto">
            <header className="bg-primary mb-4 py-4 sm:py-8 text-center rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
      </header>
                <div className="flex justify-center items-center">
                    <img
                        src={campus}
                        alt="campus_iamge"
                        className="object-fit shadow-md w-full lg:h-96 rounded-lg"
                    />
                </div>
            </section>
            <section className="rounded-xl shadow-md bg-primary mt-8 container mx-auto p-4 sm:p-6 lg:p-8">
                    <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">VISION & MISSION</h2>
            <div className="p-8">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2">Vision</h3>
                    <p className="text-base xs:text-lg sm:text-xl mb-4">{aboutUsText.vision}</p>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2">Mission</h3>
                    <p className="text-base xs:text-lg sm:text-xl mb-4">{aboutUsText.mission}</p>
                </div>
            </section>

            <section className="rounded-xl shadow-md mt-8 container mx-auto p-4 sm:p-6 lg:p-8">
                <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">OUR HISTORY</h2>
                <div className="p-8">
                    <p className="text-base xs:text-lg sm:text-xl">{aboutUsText.history}</p>
                </div>
            </section>

            <section className="rounded-xl shadow-md bg-primary mt-8 container mx-auto p-4 sm:p-6 lg:p-8">
                <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">PRINCIPAL's MESSAGE</h2>
                <div className="p-8">
                    <p className="text-base xs:text-lg sm:text-xl">{aboutUsText.principalMessage}</p>
                </div>
            </section>

            <section className="rounded-xl shadow-md mt-8 container mx-auto p-4 sm:p-6 lg:p-8">
                <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">INFRASTRUCTURE & FACILITIES</h2>
                <div className="p-8">
                    <ul className="list-disc list-inside text-base xs:text-lg sm:text-xl">
                        {aboutUsText.infrastructure.map((item, index) => (
                            <li key={index} className="mt-2">{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

        </div>
    );
}

export default AboutUs;
