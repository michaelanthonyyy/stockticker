import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase'

const FirebaseContext = React.createContext()

export function useAuth() {
    return useContext(FirebaseContext)
}

export function AuthProvider( { children } ) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

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
                setLoading(false)
                
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
            {!loading && children}
        </FirebaseContext.Provider>
    )
}