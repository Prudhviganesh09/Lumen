import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../assets/styles/Login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState('User'); // Default to 'User'

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/user/login', {
                username,
                password,
                loginType,
            });

            console.log('Login Success:', response.data);
            // Handle success, e.g., save token or redirect
        } catch (error) {
            console.error('Login Failed:', error.response?.data || error.message);
            // Handle error, e.g., display an error message to the user
        }
    };

    return (
        <div className={styles['login-container']}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles['login-form-group']}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    />
                </div>
                <div className={styles['login-radio-input']}>
                    <input
                        type="radio"
                        id="user-type"
                        name="LoginType"
                        value="User"
                        checked={loginType === 'User'}
                        onChange={(e) => setLoginType(e.target.value)}
                    />
                    <label htmlFor="user-type">User</label>

                    <input
                        type="radio"
                        id="staff-type"
                        name="LoginType"
                        value="Staff"
                        checked={loginType === 'Staff'}
                        onChange={(e) => setLoginType(e.target.value)}
                    />
                    <label htmlFor="staff-type">Staff</label>

                    <input
                        type="radio"
                        id="manager-type"
                        name="LoginType"
                        value="Manager"
                        checked={loginType === 'Manager'}
                        onChange={(e) => setLoginType(e.target.value)}
                    />
                    <label htmlFor="manager-type">Manager</label>

                    <input
                        type="radio"
                        id="administrator-type"
                        name="LoginType"
                        value="Administrator"
                        checked={loginType === 'Administrator'}
                        onChange={(e) => setLoginType(e.target.value)}
                    />
                    <label htmlFor="administrator-type">Administrator</label>
                </div>
                <div className={styles['login-form-group']}>
                    <button type="submit" className={styles['login-button']}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
