var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { typeName, isActionType, Action } from 'redux-typed';
let RequestWeatherForecasts = class RequestWeatherForecasts extends Action {
    constructor(location) {
        super();
        this.location = location;
    }
};
RequestWeatherForecasts = __decorate([
    typeName("REQUEST_WEATHER_ACCU")
], RequestWeatherForecasts);
export const actionCreators = {
    Loaded: () => (dispatch, getState) => {
        dispatch(new RequestWeatherForecasts("Temp"));
    }
};
export const reducer = (state, action) => {
    if (isActionType(action, RequestWeatherForecasts)) {
        return { isLoading: true };
    }
    return state || { isLoading: false };
};
//# sourceMappingURL=AccuWeather.js.map