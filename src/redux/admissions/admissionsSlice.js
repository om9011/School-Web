import { createSlice } from '@reduxjs/toolkit';

const admissionsSlice = createSlice({
  name: 'admissions',
  initialState: {
    process: 'Admission forms are available for download. Submit the completed form along with required documents at the school office.',
    criteria: 'Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.',
    importantDates: {
      formAvailability: 'March 1st',
      lastDateForSubmission: 'March 31st',
      entranceTest: 'April 15th',
      announcementOfResults: 'April 30th'
    }
  },
  reducers: {},
});

export const selectAdmissions = (state) => state.admissions;

export default admissionsSlice.reducer;
