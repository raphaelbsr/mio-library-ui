import React from 'react';

import InputMask, { InputState, MaskOptions } from "react-input-mask";
import TextField from "@material-ui/core/TextField";

export interface IValidation {
  ehValido: boolean;
  mensagemDeErro: string;
}

interface MaskedTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string | Array<(string | RegExp)>;
  onChange?: { (e: React.ChangeEvent<HTMLInputElement>): void };
  onBlur?: { (e: React.FocusEvent<HTMLInputElement>): void };
  disabled?: boolean;
  validation?: IValidation;
  beforeMaskedValueChange?: {
    (
      newState: InputState,
      oldState: InputState,
      userInput: string,
      maskOptions: MaskOptions): InputState
  };
  ref?: React.Ref<HTMLInputElement>;
  // rest: any
}
const MaskedTextField: React.FC<MaskedTextFieldProps> = React.forwardRef((props, ref?: React.Ref<HTMLInputElement>) => {
  // (props) => {
  const {
    mask,
    value,
    onChange,
    onBlur,
    beforeMaskedValueChange,
    disabled,
    validation,
    name,
    ...rest
  } = props

  return (
    <InputMask
      inputRef={ref}
      disabled={disabled}
      mask={mask}
      onChange={onChange}
      onBlur={onBlur}
      beforeMaskedValueChange={beforeMaskedValueChange}
      value={value}
      name={name} >
      {
        ({ inputProps }) => <TextField
          // inputRef={ref}
          {...inputProps}
          {...rest} />
      }
    </InputMask>
  )
})

MaskedTextField.defaultProps = {
  disabled: false
}

export default MaskedTextField;
