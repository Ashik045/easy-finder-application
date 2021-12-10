/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import Brand from '../../image/logo.png';
import './navbar.css';

const Menu = () => (
    <>
        <a href="#home">Home</a>
        <a href="#browse">Browse Job</a>
        <a href="#types">Job Types</a>
        <a href="#help">Need Help</a>
    </>
);

const Navbar = () => {
    const history = useHistory();
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        history.push('/register');
    };

    const handleClickTwo = () => {
        history.push('/login');
    };

    return (
        <div className="navbar">
            <div className="brand">
                <img src={Brand} alt="" />
                <h6>EASY FINDER</h6>
            </div>

            <div className="nav_menu">
                <Menu />
            </div>

            <div className="nav_register">
                <button onClick={handleClick} type="button">
                    Sign Up
                </button>
                <button onClick={handleClickTwo} type="button">
                    Log In
                </button>
            </div>

            <div className="res_nav">
                {toggle ? (
                    <BiX size={30} onClick={() => setToggle(false)} />
                ) : (
                    <BiMenu size={30} onClick={() => setToggle(true)} />
                )}
                {toggle && (
                    <div className="res_nav_menu">
                        <div className="res_menu_items">
                            <Menu />

                            <div className="res_nav_register">
                                <button onClick={handleClick} type="button">
                                    Sign Up
                                </button>
                                <button onClick={handleClickTwo} type="button">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
