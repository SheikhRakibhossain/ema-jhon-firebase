import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const userCreate =(email, password, confirmPassword)=>{
        return createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    };

    const userLogin =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };
    const logOut =()=>{
        return signOut(auth)
    };

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        } )
        return()=>{unsubscribe()}
    },[])

    const authInfo={
        user,
        userCreate,
        userLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;