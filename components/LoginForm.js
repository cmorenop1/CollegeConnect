import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/LoginForm.module.css'
import axios from 'axios';

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
        // const url = 'http://10.0.0.24:3001/users'
        // axios
        //     .post(url, form)
        //     .then((res) => {
        //         if (res.status === 201) {
        //             localStorage.setItem('username', form.username)
        //             router('/home')
        //         }
        //     })
        //     .catch((error) => {
        //         alert('probably the backend is down')
        //         console.log(error)
        //     })
        router.push('/home')
    }

    return (
        <div className={styles.loginform}>
            <img src='collegeconnect.jpg' className={styles.logo} />
            <input type="text" name="username" placeholder='user' onChange={onChange} ref={usernameRef} className={styles.inputform}/>
            <input type="password" name="password" placeholder='password' onChange={onChange} ref={passwordRef} className={styles.inputform} />
            <button className={styles.btnlogin} onClick={onClick}>Login</button>
            <a href='/signup'>need an account?</a>
        </div>
    );
};

export default LoginForm;