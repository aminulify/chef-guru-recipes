import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    // register 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const useMoreInfo = (userName, imgURL) =>{
        return updateProfile(auth.currentUser,{
            displayName: userName, photoURL: imgURL
        })
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
        })
        return ()=>{
            unSubscriber();
        }
    })

    const info = {
        user,
        setUser,
        createUser,
        useMoreInfo,
        loginUser,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;