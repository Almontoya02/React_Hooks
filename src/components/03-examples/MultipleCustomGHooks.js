import React from 'react'
import "../02-useEffect/useEffect.css"
import { useFetch } from './../../hooks/useFetch';
import { useCounter } from './../../hooks/useCounter';

export const MultipleCustomGHooks = () => {

  const {counter,increment,decrement} = useCounter(1);
  const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author,quote} = (!loading && data.length>0) && data[0];//Si tenemos data extrae la data en la posición 0

  return (
    <div>
        <h1>Multiple Custom Hooks</h1>
        <h3>Breaking Bad API</h3>
        <hr/>
        {
          loading
          ?
          (
              <div className='alert alert-info text-venter'>
                loading...
              </div>
          )
          :
          (
            <blockquote className='blockquote text-end'>
              <p className='m-3'>
                  {quote}
              </p>
              <footer className='blockquote-footer'>{author}</footer>
            </blockquote> 
          )
        }

        <div className='containerButtons'>
          <button className={!loading?"btn btn-primary":"btn btn-secondary disable"} onClick={decrement}>PREVIOUS</button> 
          <button className={!loading?"btn btn-primary":"btn btn-secondary disable"} onClick={increment}>NEXT</button>
        </div>



    </div>
  )
}
