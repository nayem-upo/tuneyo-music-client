import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import JoinClassSectoin from './JoinClassSectoin';
import AboutUsSection from './AboutUsSection';
import AchievementSection from './AchievementSection';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <JoinClassSectoin></JoinClassSectoin>
            <AboutUsSection></AboutUsSection>
            <AchievementSection></AchievementSection>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;