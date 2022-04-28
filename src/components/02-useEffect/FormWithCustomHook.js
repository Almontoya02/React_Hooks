import React, { useEffect,useState } from 'react'

import "./useEffect.css"
import { Message } from './Message';
import { useForm } from '../../hooks/useForm';
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:"",
        email:"",
        password:""
    });
    
    const {name,email,password} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues)
    }

    useEffect(()=>{
        console.log("email cambió")
    },[email])
  return (
    <form onSubmit={handleSubmit}>
        <h1>
            FormWithCustomHook
        </h1>
        <hr/>
        <div className='form-group'>
            <input
                type="text"
                    name='name'
                    className='form-control'    
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            >
            </input>
        </div>
        <div className='form-group'>
            <input
                type="email"
                name='email'
                className='form-control'
                placeholder='Tu email'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
            >
            </input>
        </div>
        <div className='form-group'>
            <input
                type="password"
                name='password'
                className='form-control'
                placeholder='********'
                autoComplete='off'
                value={password}
                onChange={handleInputChange}
            >
            </input>
            {(name==="123") &&<Message></Message>}
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </div>
    </form>
  )
}
