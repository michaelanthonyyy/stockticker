import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase'

const FirebaseContext = React.createContext()

export function useAuth() {
    return useContext(FirebaseContext)
}

export function AuthProvider( { children } ) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInUserWithEmailandPassword(email, password)
    }


    // auth.onAuthStateChanged built into firebase
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
                setCurrentUser(user)
            })
        return unsubscribe
    },[])
    


    const value = {
        currentUser,
        signup,
        login
    }

    return (
        <FirebaseContext.Provider value={value}>
            {children}
        </FirebaseContext.Provider>
    )
}