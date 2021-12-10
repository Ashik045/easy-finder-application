/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import './login.css';

const RegForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [invPass, setInvPass] = useState(false);
    const nevigator = useHistory();

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

    const onFormSubmit = (data) => {
        const { email, password } = data;
        axios
            .post('/users/login', {
                email,
                password,
            })
            .then((res) => {
                if (res.status === 200) {
                    nevigator.push('/');
                    Toast.fire({
                        icon: 'success',
                        titleText: `Login in successfully`,
                    });
                } else {
                    //
                }
            })
            .catch((err) => {
                console.log(err);
                setInvPass(true);
            });
    };

    return (
        <div className="mainloginForm">
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
                {invPass && (
                    <p className="mb-3" style={{ color: 'red', marginLeft: '40px' }}>
                        password does not matched.
                    </p>
                )}
                <input type="submit" className="form-control mb-1" value="Login" />
                <Link to="/register">Dont have Account? Please sign in hare.</Link>
            </form>
        </div>
    );
};

export default RegForm;
