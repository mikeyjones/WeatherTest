import * as React from 'react';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store';
import * as WeatherState from '../store/Weather';
import DataDisplay from './DataDisplay';
import ToggleButton from 'react-toggle-button';

interface RouteParams {
    location: string;
}

class Weather extends React.Component<WeatherProps, void> {

   componentWillMount() {
        // This method runs when the component is first added to the page 
        let location = this.props.params.location || "Home";
        console.log(location);
        this.props.requestWeather(location);
    }

    public render() {
        return <div>
            <h1>Hello, from weather!</h1>
            <p>Temprature</p>
            {this.props.tempInC ?
                <DataDisplay number={this.props.weather.temperatureC} delimiter="℃" />
                : <DataDisplay number={this.props.weather.temperatureF} delimiter="℉" /> }
            <ToggleButton
                value={ this.props.tempInC }
                onToggle={(value) => {
                    this.props.changeTemp();
                } } />


            <p>Wind speed</p>
            {this.props.speedInMph ?
                <DataDisplay number={this.props.weather.windSpeedMph} delimiter="MPH" />
                : <DataDisplay number={this.props.weather.windSpeedKph} delimiter="KPH" /> }
            <ToggleButton
                value={ this.props.speedInMph }
                onToggle={(value) => {
                    this.props.changeSpeed();
                } } />


        </div>;
    }
}


const provider = provide(
    (state: ApplicationState) => state.weather, // Select which part of global state maps to this component
    WeatherState.actionCreators                 // Select which action creators should be exposed to this component
).withExternalProps<{ params: RouteParams }>();          // Also include a 'params' property on WeatherForecastProps
type WeatherProps = typeof provider.allProps;
export default provider.connect(Weather);