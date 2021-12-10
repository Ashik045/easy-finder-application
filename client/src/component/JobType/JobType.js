import React from 'react';
import { BiBookmark, BiBriefcaseAlt2, BiCommand } from 'react-icons/bi';
import JobtypeCard from '../JobtypeCard/JobtypeCard';
import './jobtype.css';

// cardData
const cardData = [
    {
        id: 1,
        icon: <BiCommand />,
        header: 'Permanent positions',
        text: 'Find a stady job near your home to settle into',
    },
    {
        id: 2,
        icon: <BiBookmark />,
        header: 'Travel contracts',
        text: 'Top destination and greate pay? We have got you covered',
    },
    {
        id: 3,
        icon: <BiBriefcaseAlt2 />,
        header: 'Per diem and local',
        text: 'Find the right gig to fit your already busy schedule',
    },
];

const JobType = () => (
    <section className="jobType">
        <div className="jTypeHeader">
            <h1>
                We provide different <br /> type of health job type
            </h1>
            <h5 className="pt-3 px-5">
                Set your specialty and preferred locations to find the perfect <br />
                match. Backing gamification buzz non-disclosure
            </h5>
        </div>

        <div className="container">
            <div className="cardRow">
                {cardData.map((datas) => (
                    <JobtypeCard key={datas.id} datas={datas} />
                ))}
            </div>
        </div>
    </section>
);

export default JobType;
