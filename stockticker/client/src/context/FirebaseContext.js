import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase'

const FirebaseContext = React.createContext()

export function useAuth() {
    return useContext(FirebaseContext)
}

export function AuthProvider( { children } ) {
    const [currentUser, setCurrentUser] = useState()
    const [userLogin, setUserLogin] = useState(true)

    const value = {
        currentUser,
        signup,
        login,
        signout
    }

    function signout() {
        return auth.signOut()
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }


    // auth.onAuthStateChanged built into firebase
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
                setCurrentUser(user)
                setUserLogin(false)
                
            })
        return unsubscribe
    },[])


    return (
        <FirebaseContext.Provider value={value}>
            {!userLogin && children}
        </FirebaseContext.Provider>
    )
}