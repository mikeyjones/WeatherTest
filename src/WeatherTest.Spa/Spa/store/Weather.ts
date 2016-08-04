import { fetch, addTask } from 'domain-task';
import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { browserHistory } from 'react-router';
import { ActionCreator } from './';

export interface WeatherState {
    isLoading: boolean;
    weather: Weather;
    location: string;
    tempInC: boolean;
    speedInMph: boolean;
}

export interface Weather {
    temperatureC: number;
    temperatureF: number;
    location: string;
    windSpeedKph: number;
    windSpeedMph: number;
}

@typeName("REQUEST_WEATHER")
class RequestWeather extends Action {
    constructor(public location: string) {
        super();
    }
}

@typeName("RECEIVE_WEATHER")
class RecieveWeather extends Action {
    constructor(public weatherUpdate: Weather) {
        super();
    }
}

@typeName("TOGGLE_TEMP_IN_C")
class ToggleTempInC extends Action {

}

@typeName("TOGGLE_SPEED_IN_MPH")
class ToggleSpeedInMph extends Action {

}

const defaultState = { isLoading: false, weather: {}, location: '', tempInC: true, speedInMph: true };

export const actionCreators = {
    requestWeather: (location: string): ActionCreator => (dispatch, getState) => {
        if (location !== getState().weather.location) {
            let fetchData = fetch(`/api/Weather/${location}`)
                .then(response => response.json())
                .then((data: Weather) => {
                    dispatch(new RecieveWeather(data));
                })
                .catch((error) => {
                    browserHistory.push('/error');
                });  
            dispatch(new RequestWeather(location));
        }
    },

    changeTemp: (): ActionCreator => (dispatch, getState) => {
        dispatch(new ToggleTempInC());
    },

    changeSpeed: (): ActionCreator => (dispatch, getState) => {
        dispatch(new ToggleSpeedInMph());
    },
};

export const reducer: Reducer<WeatherState> = (state, action) => {
    if (isActionType(action, RequestWeather)) {
        return {
            isLoading: true, location: action.location, weather: state.weather, tempInC: state.tempInC, speedInMph: state.speedInMph
        };
    } else if (isActionType(action, RecieveWeather)) {
        return {
            isLoading: false, location: state.location, weather: action.weatherUpdate, tempInC: state.tempInC, speedInMph: state.speedInMph
        };
    } else if (isActionType(action, ToggleTempInC)) {
        return {
            isLoading: state.isLoading, location: state.location, weather: state.weather, tempInC: !state.tempInC, speedInMph: state.speedInMph
        };
    } else if (isActionType(action, ToggleSpeedInMph)) {
        return {
            isLoading: state.isLoading, location: state.location, weather: state.weather, tempInC: state.tempInC, speedInMph: !state.speedInMph
        };
    }

    return state || defaultState;
};
