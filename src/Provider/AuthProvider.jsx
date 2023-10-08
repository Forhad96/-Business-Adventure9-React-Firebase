import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebaseConfig';

 const auth = getAuth(app);

 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  // observer when state change
  useEffect((),[])
  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes={
    children: PropTypes.node
}

export default AuthProvider;