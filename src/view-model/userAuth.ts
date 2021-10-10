import { firebaseAuth, firebase } from '../utils/firebase'

const login = async (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  const loginResult = await firebaseAuth.signInWithEmailAndPassword(email, password)
  return loginResult
}

const signUp = async (name: string, email: string, password: string): Promise<firebase.auth.UserCredential> => {
  const signUpResult = await firebaseAuth.createUserWithEmailAndPassword(email, password)
  return signUpResult
}

export { login, signUp }
