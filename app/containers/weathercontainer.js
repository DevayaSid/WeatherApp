import { connect } from "react-redux";
import { fetchingWeatherApi } from "../actions";
import { Weather } from "../components";

const mapStateToProps = state => ({
    weatherData: state.weatherReducer
})

const mapDispatchToProps = dispatch => ({
    loadWeather: () => dispatch(fetchingWeatherApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Weather)