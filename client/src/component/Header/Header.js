/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import bgDown from '../../image/bgDown.png';
import './header.css';

const Header = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const history = useHistory();

    const handleProfile = () => {
        const path = `/register`;
        history.push(path);
    };

    return (
        <section className="header" id="home">
            <div className="container">
                <div className="textSide">
                    <h1>
                        Take the first step <br /> to finding your next <br /> healthcare job
                    </h1>
                    <h4 className="text-muted">
                        Explore thousands of job opportunities with <br /> all the information you
                        need.
                    </h4>

                    <button type="button" className="cprofile" onClick={handleProfile}>
                        Create a Profile
                    </button>
                </div>

                <div className="imgSide">
                    <div className="bgDown">
                        <h4>Choose your favourite jobs</h4>
                        <img src={bgDown} alt="aa" />
                    </div>

                    {/* form */}
                    <div className="headerForm">
                        <p>
                            <span style={{ paddingRight: '7px' }}>
                                <BiSearchAlt2 />
                            </span>
                            Search by keywords
                        </p>
                        <hr />
                        <form className="hForm" onSubmit={handleSubmit}>
                            <label htmlFor="fselect" className="mt-2 mb-1">
                                Job Types
                            </label>
                            <select className="form-select">
                                <option value="1">Travel Nurse</option>
                                <option value="2">Arcitecture</option>
                                <option value="3">Wev developer</option>
                            </select>

                            <label htmlFor="fselect" className="mt-2 mb-1">
                                Locations
                            </label>
                            <select className="form-select">
                                <option value="1">America</option>
                                <option value="2">Africa</option>
                                <option value="3">Asia</option>
                            </select>

                            <label htmlFor="fselect" className="mt-2 mb-1">
                                City
                            </label>
                            <select className="form-select mb-4">
                                <option value="1">London</option>
                                <option value="2">Mumbai</option>
                                <option value="3">New Work</option>
                            </select>

                            <input
                                style={{ backgroundColor: ' #d99585' }}
                                type="submit"
                                value="Submit"
                                className="form-control my-3"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
