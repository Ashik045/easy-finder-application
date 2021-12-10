import React from 'react';
import logo1 from '../../image/logo1.svg';
import logo2 from '../../image/logo2.svg';
import logo3 from '../../image/logo3.svg';
import logo4 from '../../image/logo4.svg';
import logo5 from '../../image/logo5.svg';
import logo6 from '../../image/logo6.svg';
import ExploreCard from '../ExploreCard/ExploreCard';
import './explore.css';

const ExploreData = [
    {
        id: 1,
        image: logo1,
        header: 'Travel Nursing',
        subHeader: 'ICU Nerse',
        bodyHeader: 'The Walt Disney Company',
        bodySubHeader: 'Iran (Islamic Republic of)',
        bTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat maiores placeat similique atque.',
        day: '2 Days ago',
        hour: '300-450/ hr',
    },
    {
        id: 2,
        image: logo2,
        header: 'Therapy',
        subHeader: 'Physical Therapist',
        bodyHeader: 'Bank of America',
        bodySubHeader: 'Sao Tome and Principe',
        bTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat maiores placeat similique atque.',
        day: '3 Days ago',
        hour: '150-300/ hr',
    },
    {
        id: 3,
        image: logo3,
        header: 'School Service',
        subHeader: 'School Psychologist',
        bodyHeader: 'The Walt Disney Company',
        bodySubHeader: 'Saint Barthelemy',
        bTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat maiores placeat similique atque.',
        day: '1 Day ago',
        hour: '250-550/ hr',
    },
    {
        id: 4,
        image: logo4,
        header: 'Social Work',
        subHeader: 'Social Worker',
        bodyHeader: 'Johnson & Johnson',
        bodySubHeader: 'Saudi Arabia',
        bTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat maiores placeat similique atque.',
        day: '4 Days ago',
        hour: '100-450/ hr',
    },
    {
        id: 5,
        image: logo5,
        header: 'LPN/LVN',
        subHeader: 'Long term care service',
        bodyHeader: 'The Walt Disney Company',
        bodySubHeader: 'Saint Barthelemy',
        bTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat maiores placeat similique atque.',
        day: '3 Days ago',
        hour: '400-650/ hr',
    },
    {
        id: 6,
        image: logo6,
        header: 'Allied Health',
        subHeader: 'Registred respiratory',
        bodyHeader: 'Bank of America',
        bodySubHeader: 'Palestine, State of',
        bTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat maiores placeat similique atque.',
        day: '6 Days ago',
        hour: ' 280-500/ hr',
    },
];

const Explore = () => (
    <section className="exploreSec" id="types">
        <div className="exploreHeader">
            <h1>Explore top healthcare jobs</h1>
            <h5 className="text-muted">
                At bravaa, we ensure your next step is a step forword. Thats why we build a jobs
                marketplace that serves healthcare.
            </h5>
        </div>

        <div className="cardSec container">
            <div className="cardRow">
                {ExploreData.map((exploreDatas) => (
                    <ExploreCard key={exploreDatas.id} exploreDatas={exploreDatas} />
                ))}
            </div>
        </div>

        <button type="button" className="centerBtn">
            Explore all jobs
        </button>
    </section>
);

export default Explore;
