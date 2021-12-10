import React from 'react';
import NextFirst from '../NextFirst/NextFirst';
import NextSecond from '../NextSecond/NextSecond';
import NextThird from '../NextThird/NextThird';
import './nextJob.css';

const NextJob = () => (
    <section className="nextJob container" id="browse">
        <div className="nextJobHeader">
            <h1>The first track to your next Job</h1>
            <h6 className="text-muted">
                At Bravva, we ensure your next step is a step forward. That&apos;s why we <br />{' '}
                build a jobs marketplace that serves healthcare professionals first
            </h6>
        </div>

        <div className="nextJrows">
            <div className="nextFirst">
                <NextFirst />
            </div>

            <div className="nextSecond">
                <NextSecond />
            </div>

            <div className="nextThird">
                <NextThird />
            </div>
        </div>
    </section>
);

export default NextJob;
