import React, {useMemo, useState} from 'react'
import "../components/02-useEffect/useEffect.css"
import { procesoPesado } from '../helpers/procesoPesado';
import { useCounter } from './useCounter';

export const MemoHook = () => {

    const {counter,increment} = useCounter(5000)
    const [show, setShow] = useState(true);

    const memoProcesoPesado= useMemo(() => procesoPesado(counter), [counter]);

    return (
    <div>
        <h1>Memo Hook</h1>
        <h4>Counter: <small>{counter}</small></h4>
        <hr/>
        <p>
            {memoProcesoPesado}
        </p>
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
