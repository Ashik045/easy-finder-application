import React from 'react';
import { useHistory } from 'react-router-dom';
import './signupSec.css';

const SignupSec = () => {
    const history = useHistory();

    const handleClilck = () => {
        history.push('/register');
    };

    return (
        <section className="singUpSec">
            <div className="containn container">
                <h1>Sign up and get matched with thousands of jobs that meet your needs</h1>

                <button type="button" className="signBtn" onClick={handleClilck}>
                    Sign up now
                </button>
            </div>
        </section>
    );
};
export default SignupSec;
