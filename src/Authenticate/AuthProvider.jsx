import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    }
    const userLogOut = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                console.log(error);
            });
    }

    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        googleLogin,
        userLogOut,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;