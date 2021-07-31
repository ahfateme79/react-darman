import { FormLogin, LoginInput, LoginSubmit } from './loginstyle'
import React, { useState } from 'react'



const LoginForm = () => {
    const [formdata, setFormData] = useState < { username: string; password: string } > ({
        username: "",
        password: ""
    })
    const Loginarrr = [
        {
            value: formdata.username,
            type: 'text',
            name: 'username'
        },
        {
            value: formdata.password,
            type: 'password',
            name: 'password'
        },

    ]
    const[obj,setObj]=useState()


    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setFormData({ ...formdata, [name]: value })
    }

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    sessionStorage.setItem('auth',result.token)
                }else{
                    alert("error")
                }
            })
    }
    return (
        <FormLogin onSubmit={handlesubmit}>
            {
                Loginarrr.map(n => {
                    return (
                        <LoginInput type={n.type} name={n.name} value={n.value} onChange={handlechange} />
                    )
                })
            }
            <LoginSubmit>submit</LoginSubmit>
        </FormLogin>
    )
};

export default LoginForm