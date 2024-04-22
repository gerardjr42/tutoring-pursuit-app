import { db } from "../firebase-config"
import {collection,doc,getDoc,getDocs,addDoc,updateDoc,deleteDoc} from "firebase/firestore"
import { createContext, useContext, useState, useEffect } from 'react'

const ProfileContext = createContext()

export default function ProfileContextProvider({ children }) {
  
  const [profiles,setProfiles] = useState([])
  
  async function createUser(newProfile) {
    try {
      const colRef = collection(db, "profiles");
      const profile = await addDoc(colRef,newProfile)
      console.log(profile)
    } catch (error) {
      console.log(error)
    }
  }
  
  const newUser = {
    name: 'antonio',
    cohort:"10.6"
  }
  // createUser(newUser)
  
  const ctxValue = {
    createProfile,
    getProfileById,
    getProfiles,
    updateProfile,
    updateProfilePhoto,
    deleteProfile
  }
  return (
    <ProfileContext.Provider value={ctxValue}>{ children}</ProfileContext.Provider>
    )
  }
  
  export const useProfile = ()=> useContext(ProfileContext)