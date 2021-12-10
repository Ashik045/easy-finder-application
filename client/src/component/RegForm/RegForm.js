/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import './refForm.css';

const RegForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const nevigator = useHistory();
    const [conPassError, setConPassError] = useState(false);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
        background: 'honeydew',
        width: '22rem',
    });

    const onFormSubmit = async (data) => {
        const { email, password, rePassword, firstName, lastName, agree, country } = data;

        if (password !== rePassword) {
            setConPassError(true);
        } else {
            await Axios.post('users/signup', {
                email,
                password,
                firstName,
                lastName,
                agree,
                country,
            })
                .then((res) => {
                    console.log(res.data.message);
                })
                .catch((err) => {
                    console.log(err);
                });

            Toast.fire({
                icon: 'success',
                titleText: `hello ${data.firstName}. You have signed in successfully`,
            });

            nevigator.push('/login');
        }
    };

    return (
        <div className="mainForm">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="input-group">
                    <span className="pe-3">
                        <EmailIcon />
                    </span>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        {...register('email', { required: true })}
                    />
                </div>
                {errors.email && (
                    <p style={{ color: 'red', marginLeft: '40px' }} className="mb-3">
                        this field is required
                    </p>
                )}

                <div className="input-group mt-4">
                    <span className="pe-3">
                        <LockIcon />
                    </span>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 5,
                                message: 'Password should be 5 character long & strong (@as#n12s)',
                            },
                        })}
                    />
                </div>
                {errors.password && (
                    <p className="mb-3" style={{ color: 'red', marginLeft: '40px' }}>
                        {errors.password.message ? (
                            errors.password.message
                        ) : (
                            <span>this field is required</span>
                        )}
                    </p>
                )}

                <div className="input-group mt-4">
                    <span className="pe-3">
                        <LockIcon />
                    </span>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Re-Type Password"
                        {...register('rePassword', { required: true })}
                    />
                </div>
                {conPassError && (
                    <p style={{ color: 'red', marginLeft: '40px' }} className="mb-3">
                        password dosen not match
                    </p>
                )}

                <div className="input-group fandl">
                    <div className="input-group mt-2">
                        <span className="pe-sm-3 pe-none">
                            <PersonIcon />
                        </span>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                            {...register('firstName', { required: true })}
                        />
                    </div>

                    <div className="input-group mt-2">
                        <span className="pe-sm-3 pe-none">
                            <PersonIcon />
                        </span>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                            {...register('lastName', { required: true })}
                        />
                    </div>
                </div>
                {errors.lastName && errors.firstName && (
                    <p style={{ color: 'red', marginLeft: '40px' }} className="">
                        firstName and lastName are required
                    </p>
                )}

                {/* redio */}
                <div className="input-group mb-2 my-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="Checkbox1"
                            value="male"
                            required
                        />
                        <label className="form-check-label" htmlFor="Checkbox1">
                            Male
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="inlineCheckbox2"
                            value="female"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                            Female
                        </label>
                    </div>
                </div>

                {/* select */}
                <select
                    {...register('country', { required: true })}
                    className=" my-2 w-100"
                    style={{
                        border: '1px solid gainsboro',
                        padding: '5px 4px',
                        borderRadius: '5px',
                    }}
                >
                    <option disabled>Select Your Country</option>
                    <option value="America">America</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Malaysiya">Malaysiya</option>
                    <option value="Pakistan">Pakistan</option>
                </select>

                {/* checkBox */}
                <div className="form-check form-check-inline my-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="agree"
                        {...register('agree', { required: true })}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                        I ageree with terms and condition
                    </label>
                </div>

                <input type="submit" className="form-control mb-1" value="Sign Up" />
                <Link to="/login">Already have an Account? Login here</Link>
            </form>
        </div>
    );
};

export default RegForm;
