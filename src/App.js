import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import store from './redux/store';
import { Provider } from 'react-redux';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <MainLayout />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/students" element={<Students />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
