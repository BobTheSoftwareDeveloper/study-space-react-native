import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Headline, Paragraph, TextInput, Button } from 'react-native-paper'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { login } from '../view-model/login'

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
  signInButton: {
    marginTop: 20,
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

const HomeScreen = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const userCred = await login(email, password)
      console.log('userCred', userCred)
    } catch (err) {
      console.error('error:', err)
    }
  }

  return (
    <DefaultPage>
      <Headline style={styles.headerText}>Welcome to the Study Space App!</Headline>
      <Paragraph style={styles.signInText}>Please sign in below</Paragraph>
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
      <Paragraph
        style={styles.forgetPasswordText}
        onPress={() => {
          alert('Forgot!')
        }}
      >
        Forgot Password
      </Paragraph>
      <Button mode="contained" style={styles.signInButton} onPress={() => handleLogin()}>
        Sign In
      </Button>
      <Paragraph
        style={styles.signUpText}
        onPress={() => {
          alert('Forgot')
        }}
      >
        {`Don't have an account? Sign Up!`}
      </Paragraph>
    </DefaultPage>
  )
}

export default HomeScreen
