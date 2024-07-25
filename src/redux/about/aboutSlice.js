import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aboutUsImage: {
    src: 'https://images.pexels.com/photos/2228741/pexels-photo-2228741.jpeg',
    alt: 'About Us Image'
  },
  aboutUsText: {
    history: 'Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.',
    vision: 'To create a learning environment that fosters academic excellence, critical thinking, and ethical values.',
    mission: 'To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.',
    principalMessage: 'At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.',
    infrastructure: [
      'State-of-the-art science and computer labs',
      'Spacious and well-equipped classrooms',
      'Library with a vast collection of books and digital resources',
      'Sports facilities including a playground, gymnasium, and swimming pool'
    ]
  }
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
  },
});

export default aboutSlice.reducer;
