import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import IconButton from './UI/IconButton'
import WeatherCard from './WeatherCard'
import { getWeather } from '../Util/WeatherData'
import { Colors } from '../Constants/Colors'

export default function SearchWeather() {

    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState('')

    async function searchHandler(){
      if(!city) return
      setLoading(true)
      setWeatherData(null)
      try{
        const weatherInfo = await getWeather(city)
        setWeatherData(weatherInfo)
        setError('')
      }catch(err){
        setError('City not found or Unable to fetch data')
      }
      setLoading(false)
    }
  return (
    <View style={styles.screen}>
        <View style={[styles.container,styles.input]}>
        <TextInput
        value={city}
        onChangeText={(text)=>{setCity(text)}}
        placeholder='Enter a City ...' 
        />
        <IconButton name='search' size={25} color='black' onPress={searchHandler}/>
        </View>
        {loading && <ActivityIndicator size="large" color={Colors.primary800}/>}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {weatherData && <WeatherCard weatherData={weatherData}/>}
    </View>
  )
}

const styles = StyleSheet.create({ 
    screen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    container: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    elevation: 4
  },
  input:{
    minWidth:200,
    padding:8,
    margin:8,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:Colors.primary200,
    borderRadius:15,
    color:Colors.primary800
  },
  errorText:{
    color: 'red',
    marginTop: 10,
  }
})