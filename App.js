import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import SearchWeather from './Components/SearchWeather';
import CityList from './Components/CityList';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
      <>
      <LinearGradient colors={['#C2E9FB','#A1C4FD']} style={styles.container}>
      <StatusBar style="auto" />
      <SearchWeather/>
      <CityList/>
      </LinearGradient>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
