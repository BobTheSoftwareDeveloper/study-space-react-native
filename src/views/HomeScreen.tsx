import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Headline, Paragraph, TextInput, Button } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { login } from '../view-model/userAuth'
import { axiosInstance } from '../utils/axios'
import TopAppBar from '../components/TopAppBar'

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

type Props = NativeStackScreenProps<RootStackParamList, 'HomePage'>

const HomePage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <TopAppBar title="Home Page" />
      <DefaultPage>
        <Headline style={styles.headerText}>Welcome to the Study Space App!</Headline>
      </DefaultPage>
    </>
  )
}

export default HomePage
