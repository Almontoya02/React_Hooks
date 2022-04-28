import React, {useState} from 'react'
import "../02-useEffect/useEffect.css"
import { useCounter } from './../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const {counter,increment} = useCounter(10)
    const [show, setShow] = useState(true)

    return (
    <div>
        <h1>Memorize</h1>
        <h4>Counter:<Small value={counter} /></h4>
        <hr/>
        <button 
            className='btn btn-primary m-1'
            onClick={increment}
        >+</button>
        <button
            className='btn btn-outline-primary m-1'
            onClick={()=>{
                setShow(!show)
            }}

        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
    )
}
