import React from 'react';
import '../JobType/jobtype.css';

const JobtypeCard = ({ datas }) => {
    const { icon, header, text } = datas;

    return (
        <div className="Jcard">
            <p>
                <span>{icon}</span>
            </p>
            <h2>{header}</h2>
            <h5 className="text-muted">{text}</h5>

            <a href="some">learn more</a>
        </div>
    );
};
export default JobtypeCard;
