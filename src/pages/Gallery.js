import React from 'react';
import { useSelector } from 'react-redux';
import { selectGallery } from '../redux/gallery/gallerySlice';

function Gallery() {
  const { photos, videos } = useSelector(selectGallery);

  return (
    <div className="bg-gray-100">
      <header className="bg-primary py-6 sm:py-8 text-center rounded-b-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Gallery</h1>
      </header>

      <section className="mx-auto py-8">
        {/* Videos Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                <video
                  src={video.src}
                  controls
                  className="w-full h-64"
                  title={video.alt}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Photos Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </section>
    </div>
  );
}

export default Gallery;
