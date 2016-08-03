import * as React from 'react';
export class Layout extends React.Component {
    render() {
        return <div className='container-fluid'>
            <div className='col-sm-9'>
                {this.props.body}
            </div>
        </div>;
    }
}
//# sourceMappingURL=Layout.jsx.map