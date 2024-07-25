import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  extracurricularActivities: [
    "Music",
    "Dance",
    "Art",
    "Sports",
    "Robotics",
    "Debate Club",
    "Science Club",
    "Drama"
  ],
  clubsAndSocieties: [
    "Literary Society",
    "Environmental Club",
    "Astronomy Club",
    "Coding Club"
  ],
  achievements: [
    { name: "John Smith", achievement: "National Level Math Olympiad Winner" },
    { name: "Sarah Lee", achievement: "Gold Medalist in State Swimming Championship" },
    { name: "Tech Innovators Club", achievement: "Winners of Inter-School Robotics Competition" }
  ],
  studentCouncil: {
    president: { name: "Amy Parker", grade: "Grade 12" },
    vicePresident: { name: "Rajiv Mehta", grade: "Grade 11" },
    secretary: { name: "Lisa Wong", grade: "Grade 10" }
  }
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {}
});

export const selectStudentsData = (state) => state.students;

export default studentsSlice.reducer;
