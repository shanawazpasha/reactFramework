import React from 'react';

export const CustomHelper = ({ text, maxLength }) => {
  const truncatedText = text.length > maxLength 
    ? text.substring(0, maxLength) + '...' 
    : text;
  
  return <span>{truncatedText}</span>;
};