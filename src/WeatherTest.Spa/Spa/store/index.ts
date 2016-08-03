import { ActionCreatorGeneric } from 'redux-typed';
import * as AccuWeather from './AccuWeather';

export interface ApplicationState {
    accuWeather: AccuWeather.AccuWeatherState
    
}

export const reducers = {
    accuWeather: AccuWeather.reducer
};


export type ActionCreator = ActionCreatorGeneric<ApplicationState>;