import React, { useState,useContext } from 'react';
import { AlertMessagesContext } from 'react-alert-messages';
import { useNavigate } from 'react-router-dom'
import './Login.css';

const Login = () => {
    
    const { postAlertMessage } = useContext(AlertMessagesContext);
    const [inp, setInp] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInp(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // correct login is 'kminchelle' and password '0lelplR'

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: inp.username,
                    password: inp.password,
                })
            })

            if (!data.ok) {
               postAlertMessage({ text: 'User has not authority for login!' });
                throw new Error('Failed to login')
            }

            postAlertMessage({ text: 'User login successfuly!' });
            const dt = await data.json();
            const token = dt.token;

            localStorage.setItem('token', token);

            navigate('/product');
        } catch (error) {
            console.error('Login error:', error);
        }

    }

    return (
        <div className='login'>
            <form className="form" onSubmit={handleSubmit}>
                <h3 className='h3' >Login</h3>

                <div className="inp">
                    <div>
                        <input type="text" name="username" value={inp.username} onChange={handleChange} placeholder='Username' />
                    </div>
                    <br />
                    <div>
                        <input type="password" name="password" value={inp.password} onChange={handleChange} placeholder='Password' />
                    </div>
                </div>

                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
