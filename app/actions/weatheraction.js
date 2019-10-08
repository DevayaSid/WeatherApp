import {WEATHER_FETCHING, WEATHER_FETCHING_SUCCESS, WEATHER_FETCHING_FAILURE} from '../constants'
import  axios  from 'axios'

const fetchingWeatherApi = () => (
    dispatch => {
        dispatch(weatherFetching())
        axios.post('http://samples.openweathermap.org/data/2.5/forecast?zip=122001&appid=b6907d289e10d714a6e88b30761fae22',{operation: 'paging', page:1})
        .then( json => {
            dispatch(weatherFetchingSuccess(json.data))
        }).catch(error => {
            dispatch(weatherFetchingFailure(error.message))
        })
    }
)

const weatherFetching = () => ({
    type: WEATHER_FETCHING
})

const weatherFetchingSuccess = (data) => ({
    type: WEATHER_FETCHING_SUCCESS,
    data: data
})

const weatherFetchingFailure = (error) => ({
    type: WEATHER_FETCHING_FAILURE,
    error: error
})

export default  fetchingWeatherApi;
