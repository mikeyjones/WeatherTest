import * as React from 'react';

export interface LayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {
    public render() {
        return <div className='container-fluid'>
           
            <div className='col-sm-9'>
                { this.props.body }
            </div>
        </div>;
    }
}