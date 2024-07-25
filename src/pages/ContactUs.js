import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      setFormError('Please fill in all fields.');
      return;
    }

    setFormError('');
    
    // Here you would usually handle form submission, e.g., send data to an API
    // For demonstration, we'll just show a success message
    setFormSuccess('Your message has been sent successfully!');

    // Clear form data after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-primary py-6 sm:py-10 text-center rounded-b-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Us</h1>
      </header>

      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4"><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Phone:</strong> <a href="tel:+11234567890" className="text-blue-600 hover:underline">+1 (123) 456-7890</a></p>
          <p className="text-lg text-gray-700 mb-4"><strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-600 hover:underline">info@springdale.edu</a></p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Contact Form</h2>
          {formError && <p className="text-red-500 mb-4">{formError}</p>}
          {formSuccess && <p className="text-green-500 mb-4">{formSuccess}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              disabled
              className={`${formData.email && formData.name && formData.message ? 'bg-btn-primary text-white' : 'bg-primary text-black' }  py-2 px-4 rounded-md shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer`}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Maps Integration */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.468756608366!2d73.86553901478886!3d18.516726487539847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c254d07405b3%3A0x4600c27c29999b6a!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1634206183095!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
