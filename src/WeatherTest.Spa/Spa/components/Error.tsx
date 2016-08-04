import * as React from 'react';


export default class Error extends React.Component<any, void> {


    public render() {
        return <div>
            <h1>Error: Web services are not available</h1>
            <div>
                Please try again later
             </div>
        </div>;

    }
}