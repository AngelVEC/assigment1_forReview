import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Login(props) {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [login_status, setLogin_Status] = useState("");

    function aHandler(e) {
        setA(e.target.value);
    }

    function bHandler(e) {
        setB(e.target.value);
    }

    function testing1()
    {
        let data = JSON.stringify({
            "username": "john",
            "password": "123"
          });
          
                let config = {
                    method: 'post',
                            maxBodyLength: Infinity,
                                url: 'https://message-project-nine.vercel.app/auth/',
                                headers: { 
                             'Content-Type': 'application/json', 
                        },
                        data : data
                };
        
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));setLogin_Status("Login Success!");localStorage.setItem('authentication', response.data.token);
                })
                .catch((error) => {
                    console.log(error);
                    setLogin_Status("Username or password is wrong!")

                });
    }

    return (
        <div>
            <h1>Login Page</h1>
                    <p>Username: <input id={"username"} type={'text'} onChange={aHandler}/></p>
            <p>Password: <input id={"password"} type={'password'} onChange={bHandler} /></p>
                    <p><button id={"loginbtn"} onClick={testing1}>Login</button></p>
            <p id={'login_status'}>{login_status}</p>
        </div>
    );
}

export default Login;