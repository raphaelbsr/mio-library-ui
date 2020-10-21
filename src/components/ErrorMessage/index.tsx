import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { Container } from './styles';

const ErrorMessage = ({ error }) => (
  <Typography variant="body2" component="div" color="error">
    {error}
  </Typography>
);

export default ErrorMessage;
