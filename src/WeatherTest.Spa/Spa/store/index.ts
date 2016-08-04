import { ActionCreatorGeneric } from 'redux-typed';
import * as Weather from './Weather';
import * as Location from './Location';


export interface ApplicationState {
    weather: Weather.WeatherState,
    location: Location.LocationState
    
}

export const reducers = {
    accuWeather: Weather.reducer,
    location: Location.reducer
};


export type ActionCreator = ActionCreatorGeneric<ApplicationState>;