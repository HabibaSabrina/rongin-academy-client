import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { app } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    // sign in for google
    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            // get and set token
            if(loggedUser){
                axios.post('http://localhost:5000/jwt', {email: loggedUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;