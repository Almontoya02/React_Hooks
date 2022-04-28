import React,{memo} from 'react'

export const Small = memo(({value}) => { //para que no se llame más veces de lo necesario la info
    console.log("Llamada a Small");
  return (
    <small>
        {value}
    </small>
  )
})
