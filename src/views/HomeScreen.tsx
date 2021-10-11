import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, ScrollView } from 'react-native'
import { Headline, Paragraph, TextInput, Button, Card } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { login } from '../view-model/userAuth'
import { axiosInstance } from '../utils/axios'
import TopAppBar from '../components/TopAppBar'
import { StudySpaceType } from '../types/apiReponse'
import CardItem from '../components/CardItem'

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

type Props = NativeStackScreenProps<RootStackParamList, 'HomePage'>

const HomePage = () => {
  const [studySpaces, setStudySpaces] = useState<StudySpaceType[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = (await axiosInstance.get('/study-space')).data
        setStudySpaces(data)
      } catch (err) {
        const error = err as Error
        Alert.alert(error.message)
      }
    }
    getData()
  }, [])

  return (
    <>
      <TopAppBar title="Home Page" />
      <DefaultPage
        styles={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: 0,
          flexWrap: 'wrap',
          flex: 1,
        }}
      >
        <ScrollView contentContainerStyle={styles.content}>
          {studySpaces.map((studySpaceObj) => (
            // <Card mode="outlined" key={studySpaceObj._id} style={styles.card}>
            //   <Card.Title title={studySpaceObj.name} />
            // </Card>
            <CardItem key={studySpaceObj._id} data={studySpaceObj} />
          ))}
        </ScrollView>
      </DefaultPage>
    </>
  )
}

export default HomePage
