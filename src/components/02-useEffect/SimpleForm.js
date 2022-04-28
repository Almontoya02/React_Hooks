import React, { useEffect,useState } from 'react'

import "./useEffect.css"
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name:"",
        email:""
    });
    const {name,email} = formState;
    //[] hac e que solo se ejecute una vez
    useEffect(()=>{
        //console.log("useEffect")
    },[]) 

    useEffect(()=>{
        //console.log("formState Cambió")
    },[formState]) 

    useEffect(()=>{
        //console.log("EMail Cambió")
    },[email]) 

    const handleInputChange = ({target})=>{
        setformState({
            ...formState,
            [target.name]:target.value

        })
    }

  return (
    <div>
        <h1>
            UseEffect
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
            {(name==="123") &&<Message></Message>}
        </div>
    </div>
  )
}
