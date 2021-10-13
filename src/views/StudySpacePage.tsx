import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useEffect, useContext } from 'react'
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native'
import { Headline, Paragraph, TextInput, Button, Card } from 'react-native-paper'
import { LineChart } from 'react-native-chart-kit'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { login } from '../view-model/userAuth'
import { axiosInstance } from '../utils/axios'
import TopAppbar from '../components/TopAppBar'
import { StudySpaceType } from '../types/apiReponse'
import CardItem from '../components/CardItem'
import { AuthContext } from '../contexts/AuthContext'

// @ts-ignore
const moment = extendMoment(Moment)

const screenWidth = Dimensions.get('window').width
const PADDING_SPACE = 40

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: screenWidth / 2,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  occupancyLevelText: {
    marginTop: 20,
    fontSize: 16,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

interface StudySpacePageProps {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const randomNumber = (min: number, max: number) => Math.random() * (max - min + 1) + min

const StudySpacePage: React.FC<StudySpacePageProps> = ({ navigation }) => {
  const AuthObj = useContext(AuthContext)
  const currentStudySpace = AuthObj.currentStudySpace

  const now = moment()
  const before = moment().subtract(1, 'day')
  const range = moment.range(before, now)
  const dateRange = []
  let counter = 0
  for (const hour of range.by('hour', { excludeEnd: true })) {
    if (counter === 0) {
      dateRange.push(hour.format('h a'))
    }
    counter += 1
    if (counter === 3) {
      counter = 0
    }
  }
  const dateRangeLength = dateRange.length

  const newArrayData = new Array(dateRangeLength)
  for (let i = 0; i < newArrayData.length; i += 1) {
    newArrayData[i] = randomNumber(40, 90)
  }

  return (
    <>
      <TopAppbar title={currentStudySpace?.name ?? ''} navigation={navigation} showBackButton />
      <DefaultPage styles={{}}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Image
            style={styles.image}
            source={{
              uri: currentStudySpace?.images?.[0] ?? '',
            }}
          />
          <Text style={styles.occupancyLevelText}>Occupancy Level (Past 24 hour):</Text>
          <LineChart
            data={{
              labels: dateRange,
              datasets: [
                {
                  data: newArrayData,
                },
              ],
            }}
            width={screenWidth - PADDING_SPACE} // from react-native
            height={220}
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'black',
              backgroundGradientFrom: 'rgba(255, 255, 255, 0.4)',
              backgroundGradientTo: 'rgba(255, 255, 255, 0.4)',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 38, 136, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Text style={styles.occupancyLevelText}>Noise Level (Past 24 hour):</Text>
          <LineChart
            data={{
              labels: dateRange,
              datasets: [
                {
                  data: newArrayData,
                },
              ],
            }}
            width={screenWidth - PADDING_SPACE} // from react-native
            height={220}
            yAxisSuffix=" dBA"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'black',
              backgroundGradientFrom: 'rgba(255, 255, 255, 0.4)',
              backgroundGradientTo: 'rgba(255, 255, 255, 0.4)',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 38, 136, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
                alignSelf: 'flex-start',
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ScrollView>
      </DefaultPage>
    </>
  )
}

export default StudySpacePage
