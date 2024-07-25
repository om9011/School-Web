import { createSlice } from '@reduxjs/toolkit';
import logo from '../../assets/images/logo.png'
import fest from '../../assets/images/fest.jpg'
import science from '../../assets/images/2.jpg'

const initialState = {
    schoolName: 'Springdale Public School',
    logo: logo,
    introduction: 'Welcome to Springdale Public School, where we nurture young minds for a brighter future.',
    carouselHighlights: [
        { img: 'https://scontent.fpnq13-4.fna.fbcdn.net/v/t1.6435-9/35963518_1066063440211035_6965406600047624192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=JNNiGIb1kbgQ7kNvgENu4Tu&_nc_ht=scontent.fpnq13-4.fna&oh=00_AYAbiJF6nNrdXPWVC0emqu3DXRu-Fb_L9-72urXmCCPmcQ&oe=66C97EF6', text: 'Annual Sports Day - Celebrating Excellence in Sports' },
        { img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/10/Desk/2021_10$largeimg_1931317500.jpeg', text: 'Science Exhibition - Showcasing Student Innovations' },
        { img: fest, text: 'Cultural Fest - Embracing Diversity and Creativity' },
    ],
    aboutUsImages: [
        { src: 'https://via.placeholder.com/1200x400?text=Cultural+Fest', alt: 'Description 1', caption: 'Caption 1' },
        { src: 'https://via.placeholder.com/1200x400?text=Cultural+Fest', alt: 'Description 2', caption: 'Caption 2' },
      ]
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
});

export default homeSlice.reducer;
