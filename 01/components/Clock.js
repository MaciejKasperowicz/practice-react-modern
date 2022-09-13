import React from 'react';
import PropTypes from 'prop-types';

import ClockTime from './ClockTime';
import ClockDate from './ClockDate';
// eslint-disable-next-line func-names, react/function-component-definition
const Clock = ({ date }) => (
    <>
        <ClockTime date={date} />
        <ClockDate date={date} />
    </>
);

Clock.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default Clock;
