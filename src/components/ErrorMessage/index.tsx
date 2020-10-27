import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { Container } from './styles';

interface ErrorMessageProps {
  error: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <Typography variant="body2" component="div" color="error">
    {error}
  </Typography>
);

export default ErrorMessage;
