import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  curriculum: {
    primary: [
      'English', 
      'Mathematics', 
      'Science', 
      'Social Studies', 
      'Art', 
      'Physical Education'
    ],
    secondary: [
      'English', 
      'Mathematics', 
      'Science', 
      'Social Studies', 
      'Computer Science', 
      'Physical Education', 
      'Art'
    ],
    seniorSecondary: {
      scienceStream: [
        'Physics', 
        'Chemistry', 
        'Biology', 
        'Mathematics', 
        'Computer Science', 
        'English'
      ],
      commerceStream: [
        'Accountancy', 
        'Business Studies', 
        'Economics', 
        'Mathematics', 
        'English'
      ]
    }
  },
  teachingMethodologies: "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
  educationalResources: "Digital classrooms, interactive learning modules, and access to online educational platforms."
};

const academicsSlice = createSlice({
  name: 'academics',
  initialState,
  reducers: {
    // Add reducers if you plan to have actions to update the state
  },
});

export default academicsSlice.reducer;
