import axios from 'axios'

const API_KEY = '62a0ab1238dcc7d9f9d1d4b0a4bc910f'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export async function getWeather(city){
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`)
        return response.data
    } catch (error) {
        throw new Error('Unable to fetch data')
    }
    
}
