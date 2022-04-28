import React, {useState} from 'react'
import "../02-useEffect/useEffect.css"
import { MultipleCustomGHooks } from './../03-examples/MultipleCustomGHooks';
export const RealExampleRef = () => {

  const [show, setShow] = useState(false)
  
  return (
    <div>
        <h1>
            RealExampleRef
        </h1>
        <hr/>
        {show && <MultipleCustomGHooks/>}
        <button
          className='btn btn-primary mt-5'
          onClick={()=>{
              setShow(!show);
          }}
        >
          Show/Hide
        </button>
    </div>
  )
}
