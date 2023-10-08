import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebaseConfig';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

  const [user, setUser] = useState();
  const [loading,setLoading]= useState(true)
  // observer when state change
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
        
    }) 

    return ()=>{
        unSubscribe()
    }
  },[])

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

// update user profile
const profileUpdate= (name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    })
}
// sinIn with email and password
const singInEmail =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// sing out user 
const logOut =()=>{
  setLoading(true)
  return signOut(auth)
}

// sing in user with google
const googleSingIn=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
}


  const authInfo = {
    user,
    loading,
    createUser,
    profileUpdate,
    singInEmail,
    logOut,
    googleSingIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes={
    children: PropTypes.node
}

export default AuthProvider;