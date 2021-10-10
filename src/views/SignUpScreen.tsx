import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Headline, Paragraph, TextInput, Button } from 'react-native-paper'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { signUp } from '../view-model/userAuth'

const styles = StyleSheet.create({
  headerText: {
    marginTop: 40,
  },
  signInText: {
    marginTop: 20,
  },
  textInput: {
    marginTop: 20,
    alignSelf: 'baseline',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
  },
  signUpButton: {
    marginTop: 30,
    width: '100%',
  },
  forgetPasswordText: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  signUpText: {
    marginTop: 40,
  },
})

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSignUp = async () => {
    try {
      // Check if the password matches
      if (password.trim() === '' || password !== passwordConfirmation) {
        alert('Password confirmation does not match. Please try again.')
        return
      }

      await signUp(name, email, password)
      alert('Sign up successful!')
    } catch (err) {
      const error = err as Error
      alert(`Sign up failed: ${error.message}`)
    }
  }

  return (
    <DefaultPage>
      <Headline style={styles.headerText}>Sign Up</Headline>
      <DefaultTextInput
        style={styles.textInput}
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        right={<TextInput.Icon name="account-circle" />}
      />
      <DefaultTextInput
        style={styles.textInput}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        right={<TextInput.Icon name="account" />}
      />
      <DefaultTextInput
        style={styles.textInput}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            onPress={() => {
              setShowPassword((old) => !old)
            }}
          />
        }
      />
      <DefaultTextInput
        style={styles.textInput}
        mode="outlined"
        label="Password Confirm"
        value={passwordConfirmation}
        onChangeText={(text) => setPasswordConfirmation(text)}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            onPress={() => {
              setShowPassword((old) => !old)
            }}
          />
        }
      />
      <Button mode="contained" style={styles.signUpButton} onPress={() => handleSignUp()}>
        Create Account
      </Button>
    </DefaultPage>
  )
}

export default SignUpScreen
