import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, ScrollView, View, Dimensions } from 'react-native'
import { Headline } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import TopAppBar from '../components/TopAppBar'
import { StudySpaceType } from '../types/apiReponse'
import CardItem from '../components/CardItem'
import { getAllStudySpace, handleSearchTerm } from '../view-model/studySpace'
import DefaultTextInput from '../components/DefaultTextInput'

const screenWidth = Dimensions.get('window').width

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
    marginTop: 20,
  },
  topViewSection: {
    flex: 1,
    flexBasis: screenWidth,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
  },
})

type Props = NativeStackScreenProps<RootStackParamList>

const SearchPage: React.FC<Props> = ({ navigation }) => {
  const [studySpaces, setStudySpaces] = useState<StudySpaceType[]>([])
  const [filteredStudySpaces, setFilteredStudySpaces] = useState<StudySpaceType[]>([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllStudySpace()
        setStudySpaces(data)
        setFilteredStudySpaces(data)
      } catch (err) {
        const error = err as Error
        Alert.alert(error.message)
      }
    }
    getData()
  }, [])

  return (
    <>
      <TopAppBar title="Search Page" />
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
          <>
            <View style={styles.topViewSection}>
              <Headline style={styles.headlineText}>Please select the filters below:</Headline>
              <DefaultTextInput
                style={styles.textInput}
                mode="outlined"
                label="Search Term:"
                value={searchText}
                onChangeText={(text) => handleSearchTerm(text, setSearchText, studySpaces, setFilteredStudySpaces)}
              />
            </View>
            {filteredStudySpaces.map((studySpaceObj) => (
              <CardItem key={studySpaceObj._id} data={studySpaceObj} navigation={navigation} />
            ))}
          </>
        </ScrollView>
      </DefaultPage>
    </>
  )
}

export default SearchPage
