import { db } from "../firebase-config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";

const UsersContext = createContext({
  users: [],
  tutors: [],
  students: [],
  userData: {},
  getUsers: () => {},
  createUser: () => {},
  updateProfile: () => {},
  deleteUser: () => {},
  setLoggedinUserData: () => {},
});

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [students, setStudents] = useState([]);
  const [userData, setUserData] = useState({});

  async function createUser(newUser) {
    try {
      const colRef = collection(db, "users");
      const profile = await addDoc(colRef, newUser);
    } catch (error) {
      throw error;
    }
  }
  async function updateProfile(profile) {
    try {
      const docRef = doc(db, "users", profile.id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        delete profile.id;
        await updateDoc(docRef, profile);
        return { id: docSnapshot.id, ...docSnapshot.data() };
      } else {
        throw Error("Profile not found.");
      }
    } catch (error) {
      throw error;
    }
  }
  async function deleteUser(id) {
    try {
      const docRef = doc(db, "users", id);
      const response = await deleteDoc(docRef);
      return response
    } catch (error) {
      throw error;
    }
  }

  async function getUsers() {
    try {
      const colRef = collection(db, "users");
      const snapshot = await getDocs(colRef);
      const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers([...users]);
      setTutors(users.filter((ele) => ele.isTutor));
      setStudents(users.filter((ele) => !ele.isTutor));
    } catch (error) {
      console.log(error);
    }
  }

  async function setLoggedinUserData(email) {
    const q = query(collection(db, "users"), where("email", "==", email));
    try {
      const docSnapshot = await getDocs(q);
      if (docSnapshot.empty) {
        throw Error("User does not exist");
      }
      setUserData({
        id: docSnapshot.docs[0].id,
        ...docSnapshot.docs[0].data(),
      });
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  const ctxValue = {
    users,
    tutors,
    students,
    userData,
    getUsers,
    createUser,
    updateProfile,
    setLoggedinUserData,
    deleteUser
    // getProfileById,
    // updateProfile,
    // updateProfilePhoto,
  };
  return (
    <UsersContext.Provider value={ctxValue}>{children}</UsersContext.Provider>
  );
}

export const useUsers = () => useContext(UsersContext);
