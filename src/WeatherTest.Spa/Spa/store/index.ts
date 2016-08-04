import { ActionCreatorGeneric } from 'redux-typed';
import * as AccuWeather from './AccuWeather';
import * as Location from './Location';
import * as Counter from './Counter';


export interface ApplicationState {
    accuWeather: AccuWeather.AccuWeatherState,
    location: Location.LocationState
    
}

export const reducers = {
    accuWeather: AccuWeather.reducer,
    location: Location.reducer
};


export type ActionCreator = ActionCreatorGeneric<ApplicationState>;