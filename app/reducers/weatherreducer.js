import {WEATHER_FETCHING, WEATHER_FETCHING_SUCCESS, WEATHER_FETCHING_FAILURE} from '../constants'

const initialState = {
    loading: false,
    error: null,
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_FETCHING:
                return {
                    ...state,
                    loading: true,
                    error: null,
                    data: []
                }
        case WEATHER_FETCHING_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    data: action.data
                }

        case WEATHER_FETCHING_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                    data: []
                }
    
        default:
            return state;
    }
}