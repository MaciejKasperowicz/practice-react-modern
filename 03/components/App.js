/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';

import { TextContext } from '../context';

const App = () => {
    const { Provider: TextProvider } = TextContext;
    return (
        <section>
            <Box />
            <TextProvider value="sibling">
                <Div />
            </TextProvider>
        </section>
    );
};

export default App;
