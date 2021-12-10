import React from 'react';
import connect from '../../image/connect.png';
import RegForm from '../RegForm/RegForm';
import './register.css';

const Register = () => (
    <section className="register">
        <div className="singUpForm">
            <div className="formLeft">
                <img src={connect} alt="ss" />
            </div>

            <div className="formRight">
                <RegForm />
            </div>
        </div>
    </section>
);

export default Register;
