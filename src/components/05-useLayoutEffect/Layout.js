import React, { useLayoutEffect, useRef,useState } from 'react'
import "./layout.css"
import { useFetch } from './../../hooks/useFetch';
import { useCounter } from './../../hooks/useCounter';

export const Layout = () => {

  const {counter,increment,decrement} = useCounter(1);
  const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {quote} = (!loading && data.length>0) && data[0];//Si tenemos data extrae la data en la posición 0
  
  const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})
  
  useLayoutEffect(() => {
    console.log("hey")
  
    return () => {
        setBoxSize(pTag.current.getBoundingClientRect())
    };
  }, [quote])

  return (
    <div>
        <h1>LayoutEffect</h1>
        <h3>Breaking Bad API</h3>
        <hr/>
        <blockquote className='blockquote text-end'>
            <p 
            className='m-3'
            ref={pTag}
            >
                {quote}
            </p>
        </blockquote> 
        <pre>
            {JSON.stringify(boxSize,null,3)}
        </pre>

        <div className='containerButtons'>
          <button className={!loading?"btn btn-primary":"btn btn-secondary disable"} onClick={decrement}>PREVIOUS</button> 
          <button className={!loading?"btn btn-primary":"btn btn-secondary disable"} onClick={increment}>NEXT</button>
        </div>



    </div>
  )
}
