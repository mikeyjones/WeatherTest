import { fetch, addTask } from 'domain-task';
import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { ActionCreator } from './';

export interface WeatherState {
    isLoading: boolean;
    weather: Weather;
    location: string;
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

const defaultState = { isLoading: false, weather: undefined, location: '' };

export const actionCreators = {
    requestWeather: (location: string): ActionCreator => (dispatch, getState) => {
        if (location !== getState().weather.location) {
            //dispatch(new RequestWeather(location));
        }
    }
};

export const reducer: Reducer<WeatherState> = (state, action) => {
    if (isActionType(action, RequestWeather)) {
        return state || defaultState;

    }

    return state || defaultState;
};
