import React,{useEffect,useState} from 'react'

export const Message = () => {

  const [coords, setcoords] = useState({x:0,y:0})
  const {x,y} = coords;

  const mouseMove = (e)=>{
    const coords = {x:e.x,y:e.y}
    setcoords(coords);
  }
  window.addEventListener("mousemove",mouseMove);

  useEffect(() => {
 
    return () => {
      window.removeEventListener("mousemove",mouseMove)
    }

  }, [])
  
  return (
    <div>
        <h1>Message</h1>
        <p>
          x:{x},y:{y}
        </p>
    </div>
  )
}
