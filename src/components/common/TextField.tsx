import React from 'react';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const TextField = (props: TextFieldProps) => {
  return <input {...props} className={`text-field ${props.className || ''}`} />;
};

export default TextField;
