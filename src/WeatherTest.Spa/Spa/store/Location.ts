import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { browserHistory } from 'react-router';
import { ActionCreator } from './';

export interface LocationState {
    name: string;
}

@typeName("LOCATION_CHANGED")
class RequestLocation extends Action {
    constructor(public location: string) {
        super();
    }
}

@typeName("SHOW_DATA")
class ShowData extends Action {
}

export const actionCreators = {
    changeLocation: (newLocation: string): ActionCreator => (dispatch, getState) => {
        if (newLocation !== getState().location.name) {
            dispatch(new RequestLocation(newLocation));
        }
    },
    showData: (): ActionCreator => (dispatch, getState) => {
        browserHistory.push('/weather/' + getState().location.name);
    }
};

export const reducer: Reducer<LocationState> = (state, action) => {
    if (isActionType(action, RequestLocation)) {
        return { name: action.location };
    } 

    return state || { name: "" };
};
