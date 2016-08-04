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
        let location = this.props.params.location || "Current Location";
        console.log(location);
        this.props.requestWeather(location);
    }

   private renderLoader() {
      if (this.props.isLoading) {
          return <div className="loadingView"><h1>Loading Data (Please wait) ....</h1><br /><div className="loader"></div> </div>
      }
   }

    public render() {
        return <div>
            { this.renderLoader() }
            <h1>Aggregated weather for: <em>{this.props.location}</em></h1>
            <br />
            <table className='table'>
                <thead>
                    <th>Temprature</th>
                    <th>Wind Speed</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
            {this.props.tempInC ?
                <DataDisplay number={this.props.weather.temperatureC} delimiter="℃" />
                : <DataDisplay number={this.props.weather.temperatureF} delimiter="℉" /> }
            <ToggleButton
                inactiveLabel={'℉'}
                activeLabel={'℃'}
                colors={{
                    inactive: {
                        base: 'rgb(4, 85, 145)'
                    }
                }}
                value={ this.props.tempInC }
                onToggle={(value) => {
                    this.props.changeTemp();
                } } />
                        </td>
                        <td>
            {this.props.speedInMph ?
                <DataDisplay number={this.props.weather.windSpeedMph} delimiter="MPH" />
                : <DataDisplay number={this.props.weather.windSpeedKph} delimiter="KPH" /> }
            <ToggleButton
               colors={{
                   inactive: {
                       base: 'rgb(4, 85, 145)'
                    }
                }}
                inactiveLabel={'KPH'}
                activeLabel={'MPH'}
                value={ this.props.speedInMph }
                onToggle={(value) => {
                    this.props.changeSpeed();
                } } />
                        </td>
                    </tr>
                 </tbody>
            </table>

        
        </div>;
    }
}


const provider = provide(
    (state: ApplicationState) => state.weather, // Select which part of global state maps to this component
    WeatherState.actionCreators                 // Select which action creators should be exposed to this component
).withExternalProps<{ params: RouteParams }>();          // Also include a 'params' property on WeatherForecastProps
type WeatherProps = typeof provider.allProps;
export default provider.connect(Weather);