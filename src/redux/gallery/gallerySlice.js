import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [
    { src: 'sports_day.jpg', alt: 'Students participating in various sports events.' },
    { src: 'science_exhibition.jpg', alt: 'Students presenting their science projects.' },
    { src: 'cultural_fest.jpg', alt: 'Students performing in the cultural fest.' },
    { src: 'classroom.jpg', alt: 'A glimpse of our interactive classrooms.' },
    { src: 'library.jpg', alt: 'Students reading and studying in the school library.' }
  ],
  videos: [
    { src: 'school_tour.mp4', alt: 'Virtual tour of Springdale Public School.' },
    { src: 'annual_function.mp4', alt: 'Highlights from the Annual Function 2023.' }
  ]
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {}
});

export const selectGallery = (state) => state.gallery;

export default gallerySlice.reducer;
