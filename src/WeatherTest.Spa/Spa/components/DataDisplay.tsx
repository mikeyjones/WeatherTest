﻿import * as React from 'react';


export default class DataDisplay extends React.Component<any, void> {


    public render() {
        return <div><span>{this.props.number}</span><span>{this.props.delimiter}</span></div>;
        
    }
}