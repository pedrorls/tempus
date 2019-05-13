import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = () => (
  <Dimmer active>
    <Loader content="Loading..." size="big" />
  </Dimmer>
);

export default Spinner;
