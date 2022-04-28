import React, { useCallback, useState } from 'react'
import "../02-useEffect/useEffect.css"
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    /**const increment = ()=>{
        setCounter(counter+1);
    }*/
    //devuelve una función memorizada que se ejecuta solo cuando la dependencia cambie
    const increment = useCallback((num)=>{
        setCounter(c=>c+num);
    },[setCounter])
    

    return (
        <div>
            <h1>useCallBack Hook</h1>
            <h4>contador {counter}</h4>
            <hr/>
            <ShowIncrement increment={increment}/>

        </div>
    )
}
