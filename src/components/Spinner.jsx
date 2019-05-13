import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = ({ message }) => (
  <Dimmer active>
    <Loader content={message} size="big" />
  </Dimmer>
);

Spinner.defaultProps = {
  message: 'Loading...',
};

Spinner.propTypes = {
  message: PropTypes.string,
};

export default Spinner;
