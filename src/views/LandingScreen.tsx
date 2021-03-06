import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Headline, Paragraph, TextInput, Button } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { login } from '../view-model/userAuth'

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

type Props = NativeStackScreenProps<RootStackParamList, 'LandingPage'>

const LandingScreen = ({ navigation, route }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      await login(email, password)
      alert('Login successful!')
      navigation.navigate('HomePage')
    } catch (err) {
      const error = err as Error
      alert(`Login failed: ${error.message}`)
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
          navigation.navigate('ForgotPasswordPage')
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
          navigation.navigate('SignUpPage')
        }}
      >
        {`Don't have an account? Sign Up!`}
      </Paragraph>
    </DefaultPage>
  )
}

export default LandingScreen
