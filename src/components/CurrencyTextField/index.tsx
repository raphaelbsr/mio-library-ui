import React from 'react';
import UnicefCurrencyTextField from '@unicef/material-ui-currency-textfield'
import ErrorMessage from "../ErrorMessage";
// import { Container } from './styles';

interface CurrencyTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  validationErrors?: any,
}

const obterErro = (name, validationErrors) => {
  if (!validationErrors) return false

  const { inner } = validationErrors
  if (!inner) return false
  const erroEncontrado = inner.find((item) => {
    const { path } = item
    return name === path
  })

  if (!erroEncontrado) return false

  return erroEncontrado.message
}

const CurrencyTextField: React.FC<CurrencyTextFieldProps> = React.forwardRef((props, ref?: React.Ref<HTMLInputElement>) => {
  const { name, validationErrors, ...rest } = props
  const validationMessage = obterErro(name, validationErrors)

  return <React.Fragment>
    <UnicefCurrencyTextField
      inputRef={ref}
      decimalCharacter=","
      digitGroupSeparator="."
      currencySymbol=""
      decimalPlaces={2}
      decimalPlacesShownOnFocus={2}
      variant="outlined"
      size="small"
      {...rest} />
    {validationMessage && <ErrorMessage error={validationMessage} />}
  </React.Fragment>

});

export default CurrencyTextField;
