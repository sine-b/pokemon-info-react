import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import './Fallback.scss';

const Fallback: React.FunctionComponent<{}> = () => {
  return (
    <div className="loading">
      <LinearProgress color="secondary" />
      <div className="skeleton">
        <Skeleton variant="text" />
        <Skeleton variant="rect" height={300} />
        <Skeleton variant="text" />
      </div>
    </div>
  );
};

export default Fallback;
