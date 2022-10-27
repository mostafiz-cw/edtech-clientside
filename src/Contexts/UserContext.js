import React from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    };

    // log out
    const logOut = () =>{
      return signOut(auth);
    };

    // current log in user
    useEffect(() => {
      const unSubscrib = onAuthStateChanged(auth, currentUser => {
        console.log('current user inside state change',currentUser);
        setUser(currentUser);
      })

      return () => unSubscrib();
    },[])

// googleSignInProvider
    const googleLogInProvider = (provider) =>{
      return signInWithPopup(auth, provider);
    };

  const authInfo = {user, createUser,logIn, logOut, googleLogInProvider};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
