// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';

export default class Home extends React.Component<any, void> {
    public render() {
        return <div>
            <h1>Hello, world!2</h1>
        </div>;
    }
}
