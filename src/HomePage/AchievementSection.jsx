import React, { useState } from 'react';

const AchievementSection = () => {
    const [achievements, setAchievements] = useState([])
    fetch('achievement.json')
        .then(res => res.json())
        .then(data => setAchievements(data))
    return (
        <div className='flex md:flex-row flex-col justify-between gap-10 text-center bg-[#F0F0F0] px-20 my-20 py-14 w-[93%] rounded-md mx-auto'>
            {
                achievements.map(achievement =>
                    <div className='flex flex-col justify-center items-center gap-2' key={achievement.id}>
                        <img className='w-[55px]' src={achievement.imageLink} alt="" />
                        <h1 className='text-3xl font-semibold'>{achievement.number}</h1>
                        <p className='text-[#9D9D9D]'>{achievement.text}</p>
                    </div>
                )
            }
        </div>
    );
};

export default AchievementSection;