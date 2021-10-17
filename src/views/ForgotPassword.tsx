import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Headline, Paragraph, TextInput, Button } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { resetPassword } from '../view-model/userAuth'

const styles = StyleSheet.create({
  headerText: {
    marginTop: 40,
  },
  paragraph: {
    marginTop: 20,
  },
  textInput: {
    marginTop: 20,
    alignSelf: 'baseline',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
  },
  passwordResetButton: {
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

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordPage'>

const ForgotPasswordScreen = ({ navigation, route }: Props) => {
  const [email, setEmail] = useState('')

  const handlePasswordReset = async () => {
    try {
      await resetPassword(email)
      alert('The password reset email has been sent to your email address.')
    } catch (err) {
      const error = err as Error
      alert(`Login failed: ${error.message}`)
    }
  }

  return (
    <DefaultPage>
      <Headline style={styles.headerText}>Forgot Password</Headline>
      <Paragraph style={styles.paragraph}>Please enter your email address below to reset your password.</Paragraph>
      <DefaultTextInput
        style={styles.textInput}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        right={<TextInput.Icon name="account" />}
      />
      <Button mode="contained" style={styles.passwordResetButton} onPress={() => handlePasswordReset()}>
        Reset Password
      </Button>
    </DefaultPage>
  )
}

export default ForgotPasswordScreen
