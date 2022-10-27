import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();


  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // user login/sign up using google
  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // user login/sign up using facebook
  const facebookUser = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }

  // get currently logged in user
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  // update user
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {displayName: name});
  }

  // sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  console.log(user)
  const authInfo = {user, loading, createUser, signInUser, googleUser, facebookUser, updateUser, signOutUser};

  return (
    <div>
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    </div>
  );
};


export default AuthContext;