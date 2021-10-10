import React, { useState, useEffect, createContext } from 'react'
import { firebase, firebaseAuth } from '../utils/firebase'

type AuthContextType = {
  currentUser: firebase.User | null
  isLoggedIn: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoggedIn: false,
  isLoading: true,
})

const AuthProvider: React.FC = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((newUser) => {
      setCurrentUser(newUser)
      setIsLoggedIn(!!newUser)
      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  const obj: AuthContextType = {
    currentUser,
    isLoggedIn,
    isLoading,
  }

  const { children } = props

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
