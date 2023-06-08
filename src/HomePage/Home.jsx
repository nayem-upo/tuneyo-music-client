import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import JoinClassSectoin from './JoinClassSectoin';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <JoinClassSectoin></JoinClassSectoin>
        </div>
    );
};

export default Home;