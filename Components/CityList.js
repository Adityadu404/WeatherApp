import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getWeather } from '../Util/WeatherData';
import { Colors } from '../Constants/Colors';

const predefinedCities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];

export default function CityList() {
  const [loading, setLoading] = useState(false);
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    async function fetchCitiesWeather() {
      setLoading(true);
      try {
        const weatherData = await Promise.all(
          predefinedCities.map((city) => getWeather(city))
        );
        setCityWeather(weatherData);
      } catch (err) {
        console.error('Error fetching the weather data for the cities');
      }
      setLoading(false);
    }
    fetchCitiesWeather();
  }, []);

  const renderHeader = () => (
    <View style={[styles.row, styles.header]}>
      <Text style={[styles.cell, styles.headerCell]}>City Name</Text>
      <Text style={[styles.cell, styles.headerCell]}>Temperature</Text>
      <Text style={[styles.cell, styles.headerCell]}>Description</Text>
    </View>
  );

  const renderRow = ({ item,index }) => (
    <View style={[styles.row, index%2==0 ? styles.evenRow : styles.oddRow]}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.main.temp}°C</Text>
      <Text style={styles.cell}>{item.weather[0].description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Cities</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.table}>
          {renderHeader()}
          <FlatList
            data={cityWeather}
            keyExtractor={(item) => item.name}
            renderItem={renderRow}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    padding: 10,
    marginBottom:20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 8,
    overflow: 'hidden',
    elevation:4,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.primary800,
  },
  header: {
    backgroundColor: Colors.primary200,
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: Colors.primary800,
  },
  headerCell: {
    fontSize:15,
    fontWeight: 'bold',
  },
  evenRow: {
    backgroundColor: '#e6f7ff', 
  },
  oddRow: {
    backgroundColor: '#ffffff', 
  }
});
