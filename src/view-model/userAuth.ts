import { firebaseAuth, firebase } from '../utils/firebase'

const login = async (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  const loginResult = await firebaseAuth.signInWithEmailAndPassword(email, password)
  return loginResult
}

const signUp = async (name: string, email: string, password: string): Promise<firebase.auth.UserCredential> => {
  const signUpResult = await firebaseAuth.createUserWithEmailAndPassword(email, password)
  return signUpResult
}

const signOut = async () => {
  await firebaseAuth.signOut()
}

const resetPassword = async (email: string): Promise<void> => {
  await firebaseAuth.sendPasswordResetEmail(email)
}

export { login, signUp, signOut, resetPassword }
