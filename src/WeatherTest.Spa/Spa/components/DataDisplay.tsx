import * as React from 'react';


export default class DataDisplay extends React.Component<any, void> {


    public render() {
        return <div><span className="dataValue">{Math.ceil(this.props.number || 0) }</span><span>{this.props.delimiter}</span></div>;
        
    }
}
