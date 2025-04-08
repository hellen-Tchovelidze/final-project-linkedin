

'use client';
import React from 'react';
import { useStore } from '../../../store/store';  

interface ErrorMessageProps {
  message?: string; 
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const { error } = useStore();

  const errorMessage = message || error;  

  return errorMessage ? <p style={{ color: 'red' }}>{errorMessage}</p> : null;
};

export default ErrorMessage;
