import { typeName, isActionType, Action, Reducer } from 'redux-typed';
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
        dispatch(new ShowData());
    }
};

export const reducer: Reducer<LocationState> = (state, action) => {
    if (isActionType(action, RequestLocation)) {
        return { name: action.location };
    } else if (isActionType(action, ShowData)) {
        console.log("show data2 " + state.name);
    }

    return state || { name: "" };
};
