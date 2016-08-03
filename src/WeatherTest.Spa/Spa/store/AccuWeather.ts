import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { ActionCreator } from './';

export interface AccuWeatherState {
    isLoading: boolean;
}

@typeName("REQUEST_WEATHER_ACCU")
class RequestWeatherForecasts extends Action {
    constructor(public location: string) {
        super();
    }
}

export const actionCreators = {
    Loaded: (): ActionCreator => (dispatch, getState) => {
        dispatch(new RequestWeatherForecasts("Temp"));
    }
};

export const reducer: Reducer<AccuWeatherState> = (state, action) => {
    if (isActionType(action, RequestWeatherForecasts)) {
        return { isLoading: true };

    }

    return state || { isLoading: false };
};
