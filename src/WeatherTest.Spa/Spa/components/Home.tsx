import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { provide } from 'redux-typed';
import { Link } from 'react-router';
import { ApplicationState }  from '../store';
import * as LocationStore from '../store/Location';
import * as CounterStore from '../store/Counter';


class Home extends React.Component<LocationProps, void> {


    public render() {
        return <div>
            <h1>Weather Test</h1>
            <h2>Enter Location: </h2>
            <input onChange={ (event) => this.props.changeLocation(event.target.value) }  />
            <button onClick={ () => this.props.showData() }>Go!</button>
        </div>;
    }
}

const provider = provide(
    (state: ApplicationState) => state.location, // Select which part of global state maps to this component
    LocationStore.actionCreators                 // Select which action creators should be exposed to this component
);

type LocationProps = typeof provider.allProps;
export default provider.connect(Home);

