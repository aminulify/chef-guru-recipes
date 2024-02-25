import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from 'react-router-dom';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const [snipper, setSnipper] = useState(true);
    // const navigation = useNavigation()
    // {
    //     snipper ? navigation.state === 'loading' ?  <BeatLoader color="#ef2853" size={20} /> : '' : ''
    // }
    // register 
    const createUser = (email, password) =>{
        setSnipper(false);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const useMoreInfo = (userName, imgURL) =>{
        return updateProfile(auth.currentUser,{
            displayName: userName, photoURL: imgURL
        })
    }

    const loginUser = (email, password)=>{
        setSnipper(false);
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    const logOut = () =>{
        setSnipper(false);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, loggedUser=>{
            
            setUser(loggedUser);
            setSnipper(false);
        })
        return ()=>{
            unSubscriber();
            setSnipper(false);
        }
    })

    const info = {
        user,
        snipper,
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