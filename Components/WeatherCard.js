import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'

export default function WeatherCard({weatherData}) {
  return (
    <View style={styles.weatherCard}>
    <Text style={styles.title}>{weatherData.name}</Text>
    <Text style={styles.text}>Temperature: {weatherData.main.temp}°C</Text>
    <Text style={styles.text}>Humidity: {weatherData.main.humidity}%</Text>
    <Text style={styles.text}>Description: {weatherData.weather[0].description}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    weatherCard:{
        margin: 8,
        padding: 18,
        backgroundColor:Colors.primary200,
        width: '80%',
        borderRadius:10,
        elevation:8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
    },
    title:{
        padding:2,
        fontSize:20,
        color : Colors.primary800,
        fontWeight:'bold',
    },
    text:{
        padding:3,
        fontSize:15,
        color : Colors.primary800,
    }
})