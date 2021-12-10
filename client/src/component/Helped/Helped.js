import RateReviewIcon from '@mui/icons-material/RateReview';
import React from 'react';
import Build from '../../image/helped2-removebg-preview.png';
import './helped.css';

const Helped = () => (
    <section className="helpedSec">
        <div className="helpLeft">
            <h1>Already we help 15000+ people all over the world</h1>
            <h6 className="text-muted">
                At Bravva, we ensure your next step is a step forward. Thats why we build a jobs
                marketplace that serves healthcare professionals first
            </h6>

            <button type="button" className="helpBtn">
                Browse all jobss
            </button>
        </div>

        <div className="helpRIght">
            <div className="helpRightBox">
                <p>
                    <RateReviewIcon />
                </p>
                <div className="boxTxts">
                    <p>Travel Nursing</p>
                    <small className="text-muted">Marin health care nurse</small>
                </div>
            </div>
            <div className="bgImgss">
                <img src={Build} alt="ss" />
            </div>
        </div>
    </section>
);

export default Helped;
