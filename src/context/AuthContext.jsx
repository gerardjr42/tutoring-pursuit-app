import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseAuthErrors from "./firebaseAuthErrors";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    token: "",
    expiresIn: "",
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user,'who is the user')
    });
  },[]);
  const ctxValue = {
    currentUser,
    signUp,
    login,
    firebaseAuthErrors,
  };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}
