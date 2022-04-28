import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

  const [user, setUser] = useState({});

  //<UserContext.Provider> permite contener el contexto general de la aplicacion para distribuirla en los componentes hijos
  return (

    <UserContext.Provider value={{
        user,
        setUser,
        temporal:123
    }}>
      <AppRouter/>
    </UserContext.Provider>
  )
}
