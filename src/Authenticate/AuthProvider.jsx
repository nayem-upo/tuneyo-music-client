import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [allUsers, setAllUsers] = useState([]);
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(JSON.parse(savedTheme));
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    useEffect(() => {
        fetch('https://tuneyo-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [user])
    const filteredUser = allUsers.find(userr => userr.email === user?.email)

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
        filteredUser,
        theme,
        toggleTheme
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