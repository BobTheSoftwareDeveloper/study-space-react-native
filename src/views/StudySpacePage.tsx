import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useEffect, useContext } from 'react'
import { Alert, Dimensions, Image, StyleSheet, Text } from 'react-native'
import { Headline, Paragraph, TextInput, Button, Card } from 'react-native-paper'
import { LineChart } from 'react-native-chart-kit'
import { RootStackParamList } from '../navigation/navigator'
import DefaultPage from '../components/DefaultPage'
import DefaultTextInput from '../components/DefaultTextInput'
import { login } from '../view-model/userAuth'
import { axiosInstance } from '../utils/axios'
import TopAppbar from '../components/TopAppBar'
import { StudySpaceType } from '../types/apiReponse'
import CardItem from '../components/CardItem'
import { AuthContext } from '../contexts/AuthContext'

const screenWidth = Dimensions.get('window').width

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
})

interface StudySpacePageProps {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const StudySpacePage: React.FC<StudySpacePageProps> = ({ navigation }) => {
  const AuthObj = useContext(AuthContext)
  const currentStudySpace = AuthObj.currentStudySpace

  return (
    <>
      <TopAppbar title={currentStudySpace?.name ?? ''} />
      <DefaultPage>
        <Image
          style={styles.image}
          source={{
            uri: currentStudySpace?.images?.[0] ?? '',
          }}
        />
        <Text style={styles.occupancyLevelText}>Occupancy Level:</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text style={styles.occupancyLevelText}>Noise Level:</Text>
        <Button
          mode="contained"
          onPress={() => {
            navigation.goBack()
          }}
        >
          Go Back
        </Button>
      </DefaultPage>
    </>
  )
}

export default StudySpacePage
