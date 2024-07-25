import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faListAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Admissions() {
  const { process, criteria, importantDates } = useSelector((state) => state.admissions);
  const dates = [
    { notice: 'Admission Form Availability', date: importantDates.formAvailability },
    { notice: 'Last Date for Submission', date: importantDates.lastDateForSubmission },
    { notice: 'Entrance Test', date: importantDates.entranceTest },
    { notice: 'Announcement of Results', date: importantDates.announcementOfResults }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary py-4 sm:py-8 text-center rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Admissions</h1>
      </header>

      <section className="mt-12 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-8">
          {/* Process Card */}
          <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col justify-center items-center ">
              <div className="bg-blue-600 p-4 rounded-full">
                <FontAwesomeIcon icon={faFileAlt} className="text-3xl text-white" />
              </div>
              <div className="m-4">
                <h2 className="text-xl font-semibold text-blue-800 mb-2 text-center">Process</h2>
                <p className="text-gray-700">{process}</p>
              </div>
            </div>
          </div>

          {/* Criteria Card */}
          <div className="bg-gradient-to-r  from-green-100 via-green-200 to-green-300 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-green-600 p-4 rounded-full">
                <FontAwesomeIcon icon={faListAlt} className="text-3xl text-white" />
              </div>
              <div className="m-4">
                <h2 className="text-xl font-semibold text-green-800 mb-2 text-center">Criteria</h2>
                <p className="text-gray-700">{criteria}</p>
              </div>
            </div>
          </div>
          </div>
          {/* Important Dates Card */}
          <div className="text-xs lg:text-lg text-left">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-red-800 mb-4 text-center">Important Dates</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-red-600 text-white ">
                    <tr>
                      <th className="py-2 px-4 text-left">Sr. No.</th>
                      <th className="py-2 px-4 text-left">Notice</th>
                      <th className="py-2 px-4 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dates.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4">{index + 1}</td>
                        <td className="py-2 px-4">{item.notice}</td>
                        <td className="py-2 px-4">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
      </section>
    </div>
  );
}

export default Admissions;
