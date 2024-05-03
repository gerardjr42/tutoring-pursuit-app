import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: {},
  signUp: () => {},
  login: () => {},
  logout: () => {},
  resetPassword: () => {},
});

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function logout() {
    return signOut(auth);
  }
  async function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const ctxValue = {
    currentUser,
    signUp,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
