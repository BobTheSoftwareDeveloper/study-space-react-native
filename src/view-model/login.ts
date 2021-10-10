import { firebaseAuth, firebase } from '../utils/firebase'

const login = async (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  const loginResult = await firebaseAuth.signInWithEmailAndPassword(email, password)
  return loginResult
}

export { login }
