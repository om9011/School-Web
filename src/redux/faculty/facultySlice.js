import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profiles: [
    { name: 'John Doe', title: 'Principal', degree: 'M.Ed', experience: '20 years of experience in educational administration.', image: 'https://picsum.photos/seed/john/200/200' },
    { name: 'Jane Smith', title: 'Vice Principal', degree: 'M.Sc. in Physics', experience: '15 years of teaching experience.', image: 'https://picsum.photos/seed/jane/200/200' },
    { name: 'Emily Johnson', title: 'English Teacher', degree: 'M.A. in English', experience: '10 years of teaching experience.', image: 'https://picsum.photos/seed/emily/200/200' },
    { name: 'Michael Brown', title: 'Mathematics Teacher', degree: 'M.Sc. in Mathematics', experience: '8 years of teaching experience.', image: 'https://picsum.photos/seed/michael/200/200' },
    { name: 'Sophia Davis', title: 'Science Teacher', degree: 'M.Sc. in Chemistry', experience: '12 years of teaching experience.', image: 'https://picsum.photos/seed/sophia/200/200' },
    { name: 'David Wilson', title: 'Computer Science Teacher', degree: 'B.Tech in Computer Science', experience: '5 years of teaching experience.', image: 'https://picsum.photos/seed/david/200/200' },
  ]
};

const facultySlice = createSlice({
  name: 'faculty',
  initialState,
  reducers: {}
});

export const selectFacultyProfiles = (state) => state.faculty.profiles;
export default facultySlice.reducer;
