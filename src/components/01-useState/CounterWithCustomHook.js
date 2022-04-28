import React from 'react'
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const {state,increment, decrement,reset} = useCounter()
  return (
    <div>
        <h1>
            CounterWithCustomHook {state}
        </h1>
        <hr/>
        <div className='containerbuttons'>
        <button className='btn btn-primary' onClick={()=>increment(10)}>+ 1</button>
        <button className='btn btn-danger' onClick={()=>decrement(10)}>- 1</button>
        <button className='btn btn-secundary' onClick={reset}>Reset</button>
        </div>

    </div>
  )
}
