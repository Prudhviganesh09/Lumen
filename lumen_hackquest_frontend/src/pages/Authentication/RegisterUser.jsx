import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import styles from '../../assets/styles/Login.module.css';

const RegisterUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        if (!/^[A-Za-z ]+$/.test(name)) {
            setError('Name can only contain letters and spaces.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            setError('Phone number must be 10 digits.');
            return;
        }

        if (!gender) {
            setError('Please select a gender.');
            return;
        }

        try {
            // API Call to register user
            const response = await axios.post('http://localhost:4000/api/user/register', {
                name,
                email,
                password,
                gender,
                phone,
            });

            console.log('Registration Successful:', response.data);
            alert('Registration successful! Please log in.');

            // Redirect to login page
            navigate('/login');
        } catch (err) {
            console.error('Registration Failed:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'An error occurred during registration.');
        }
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setGender('');
        setPhone('');
        setError('');
    };

    return (
        <div className={styles['login-container']}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                {error && <p className={styles['error-message']}>{error}</p>}
                <div className={styles['login-form-group']}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles['login-radio-input']}>
                    <label>Gender:</label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{10}"
                        required
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <button type="submit" className={styles['login-button']}>
                        Register
                    </button>
                    <button
                        type="button"
                        className={styles['login-button']}
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                    <button
                        type="button"
                        className={styles['login-button']}
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <div className={styles['login-form-group']}>
                <p>
                    Already have an account?{' '}
                    <Link to="/login" className={styles['login-link']}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterUser;
