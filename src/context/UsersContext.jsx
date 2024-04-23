import { db } from "../firebase-config"
import {collection,doc,getDoc,getDocs,addDoc,updateDoc,deleteDoc} from "firebase/firestore"
import { createContext, useContext, useState, useEffect } from 'react'

const UsersContext = createContext()

export default function UsersContextProvider({ children }) {
  
  const [users, setUsers] = useState([])
  const [tutors, setTutors] = useState([])
  const [students, setStudents] = useState([])

 
  async function createUser(newUser) {
    try {
      const colRef = collection(db, "users");
      const profile = await addDoc(colRef, newUser)
      return profile
    } catch (error) {
      throw error
    }
  }
  
  
  async function getUsers() {
    try {
      const colRef = collection(db, "users");
      const snapshot = await getDocs(colRef);
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setUsers([...users])
      setTutors(users.filter(ele => ele.isTutor))
      setStudents(users.filter(ele => !ele.isTutor))
      console.log(users,'users')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  },[])
  
  

  
  const ctxValue = {
    users,
    tutors,
    students,
    getUsers,
    createUser,
    // getProfileById,
    // updateProfile,
    // updateProfilePhoto,
    // deleteProfile
  }
  return (
    <UsersContext.Provider value={ctxValue}>{children}</UsersContext.Provider>
    )
  }
  
  export const useUsers = ()=> useContext(UsersContext)