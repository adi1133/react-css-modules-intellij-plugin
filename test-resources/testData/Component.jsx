import * as React from 'react';
const styles = require("./Component.css");

export class Component1 extends React.Component {
    render() {
        return (
            <div styleName="<caret>"></div>
        );
    }
}