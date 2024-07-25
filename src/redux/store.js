import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../redux/home/homeSlice.js';
import aboutReducer from '../redux/about/aboutSlice.js';
import academicsReducer from '../redux/academics/academicsSlice.js';
import admissionsReducer from '../redux/admissions/admissionsSlice.js';
import facultyReducer from '../redux/faculty/facultySlice.js';
import studentsReducer from '../redux/students/studentsSlice.js';
import galleryReducer from '../redux/gallery/gallerySlice.js';

const store = configureStore({
    reducer: {
        home: homeReducer,
        about: aboutReducer,
        academics: academicsReducer,
        admissions: admissionsReducer,
        faculty: facultyReducer,
        students: studentsReducer,
        gallery: galleryReducer,
    },
});

export default store;
