import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useEffect, useContext } from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import { Headline, Paragraph, TextInput, Button, Card } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { login } from '../view-model/userAuth'
import { axiosInstance } from '../utils/axios'
import TopAppBar from '../components/TopAppBar'
import { StudySpaceType } from '../types/apiReponse'
import CardItem from '../components/CardItem'
import { AuthContext } from '../contexts/AuthContext'

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 40,
  },
  card: {
    margin: 4,
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
})

type Props = NativeStackScreenProps<RootStackParamList, 'StudySpacePage'>

const StudySpacePage = () => {
  const AuthObj = useContext(AuthContext)
  const currentStudySpace = AuthObj.currentStudySpace

  return (
    <>
      <Text>{currentStudySpace?.name}</Text>
    </>
  )
}

export default StudySpacePage
