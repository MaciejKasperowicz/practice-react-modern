/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import ReactDOM from 'react-dom';
import SpeedTest from './SpeedTest';

const App = () => {
    return <SpeedTest />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
