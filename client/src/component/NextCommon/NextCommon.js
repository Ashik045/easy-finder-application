import React from 'react';
import { useHistory } from 'react-router-dom';
import './nextCommon.css';

const NextCommon = ({ header, mutedTxt, btnTxt }) => {
    const history = useHistory();
    const handleClick = () => {
        if (btnTxt === 'Create Profile') {
            history.push('/register');
        }
    };

    return (
        <div className="nextCommon">
            <h1>{header}</h1>

            <p className="text-muted">{mutedTxt}</p>

            <button
                className="btn btn-outline-danger px-4 btn-lg"
                type="button"
                onClick={handleClick}
            >
                {btnTxt}
            </button>
        </div>
    );
};
export default NextCommon;
