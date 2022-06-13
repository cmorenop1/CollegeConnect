import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/LoginForm.module.css'

const LoginForm = () => {

    const initialState = {
        id: null,
        username: '',
        password: '',
    }

    const [form, setForm] = useState(initialState);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    const onChange = () => {
        let fields = form
        fields = {
            id: null,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(fields)
        setForm(fields)
    }

    const onClick = () => {
        console.log(setForm)
        router.push('/lobby')
    }

    return (
        <div className={styles.loginform}>
            <img class="scale-75 p-10" src='navbar-logo.png' alt='Lorem-Ipsum' />
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                onChange={onChange}
                ref={usernameRef}
            />
            <br />
            <input
                class="shadow appearance-none border   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                ref={passwordRef}
            />

            <button className={styles.btnlogin} onClick={onClick}>Login</button>
            <a href='/signup'>need an account?</a>

            <div className="text-3xl font-bold underline" />

        </div>
    );
};

export default LoginForm;