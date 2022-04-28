import React from 'react'

export const ShowIncrement = React.memo(({increment}) => { //react.memo no sirve de nada porque esto es una función que al llamarse genera el btn por eso se usa con callback
    console.log("Me están llamando ShowIncrement")
  return (
    <button
        className='btn btn-primary'
        onClick={()=>increment(5)}
    >
        Incrementar
    </button>
  )
}
)