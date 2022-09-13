// ./src/components/App.js
import React from 'react';
import Box from './Box';

import { TextContext } from "../context";

class App extends React.Component {
    // static contextType = TextContext
    state = {
        text: 'React HelloWorld Modern!',
    };

    render() {
        const { Provider } = TextContext;
        const { text } = this.state;

        // return <Box text={text} />;
        return (
            <Provider value={text}>
                <Box />
            </Provider>
        )
    }
}

App.contextType = TextContext

export default App;
