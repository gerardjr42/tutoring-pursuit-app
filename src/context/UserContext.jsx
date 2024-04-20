import {createContext,useContext,useState,useEffect, Children} from 'react'

const UserContext = createContext()

export function useFirestore() {
  return useContext(FirestoreContext)
}


export default function UserContextProvider({ children }) {

   const [currentUser, setCurrentUser] = useState({})
      
  
  function getUserById(id) {
     
   }
  
  
  


  const ctxValue = {
    currentUser,
  
}
  
  return (
    <UserContext.Provider value={ ctxValue}>{ children}</UserContext.Provider>
  )
}
