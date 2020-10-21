import React from 'react';

import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";

interface MaskedTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string,
  beforeMaskedValueChange: any
}

const MaskedTextField: React.FC<MaskedTextFieldProps> = ({
  mask,
  value,
  onChange,
  onBlur,
  beforeMaskedValueChange,
  disabled,
  ...rest
}) => {

  return (
    <InputMask
      disabled={disabled}
      mask={mask}
      onChange={onChange}
      onBlur={onBlur}
      beforeMaskedValueChange={beforeMaskedValueChange}
      value={value} >
      {
        ({ inputProps }) => <TextField {...inputProps}  {...rest} />
      }
    </InputMask>
  );
}

export default MaskedTextField;
