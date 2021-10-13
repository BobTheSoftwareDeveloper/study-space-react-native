import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, ScrollView, View } from 'react-native'
import { Headline } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import TopAppBar from '../components/TopAppBar'
import { StudySpaceType } from '../types/apiReponse'
import CardItem from '../components/CardItem'
import { getFavouriteStudySpaces } from '../view-model/studySpace'

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
  headlineText: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
  },
  mainView: {
    backgroundColor: '#FEE1D8',
    flex: 1,
  },
})

type Props = NativeStackScreenProps<RootStackParamList>

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [studySpaces, setStudySpaces] = useState<StudySpaceType[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFavouriteStudySpaces()
        setStudySpaces(data)
      } catch (err) {
        const error = err as Error
        Alert.alert(error.message)
      }
    }
    getData()
  }, [])

  return (
    <View style={styles.mainView}>
      <TopAppBar title="Profile Page" />
      <Headline style={styles.headlineText}>Favourite Places:</Headline>
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
            <CardItem key={studySpaceObj._id} data={studySpaceObj} navigation={navigation} />
          ))}
        </ScrollView>
      </DefaultPage>
    </View>
  )
}

export default ProfileScreen
