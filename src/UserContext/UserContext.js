import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const loginWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = () => {
            onAuthStateChanged(auth, currentUSer=>{
                setUser(currentUSer)
            })
        }
        return unsubscribe();
    })

    return (
        <AuthContext.Provider value={{
            loginWithGoogle,
            loginWithEmail,
            logOut,
            loading

        }}>
        {
            children
        }
        </AuthContext.Provider>
    );
};

export default UserContext;