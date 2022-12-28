import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [getTask, setGetTask] = useState([])    
    const [finishedTask, setFinishedTask] = useState([]);
    const [refetch, setRefetch] = useState(false)
    const [theme, setTheme] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const loginWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = () => {
            onAuthStateChanged(auth, currentUSer=>{
                setUser(currentUSer)
                setLoading(false);
            })
        }
        return unsubscribe();
    })

    return (
        <AuthContext.Provider value={{
            loginWithGoogle,
            loginWithEmail,
            logOut,
            singUp,
            user,
            loading,
            getTask,
            setGetTask,
            refetch,
            setRefetch,
            finishedTask,
            setFinishedTask,
            theme,
            setTheme

        }}>
        {
            children
        }
        </AuthContext.Provider>
    );
};

export default UserContext;