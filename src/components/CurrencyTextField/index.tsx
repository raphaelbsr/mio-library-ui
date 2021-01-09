import React from 'react';
import UnicefCurrencyTextField from '@unicef/material-ui-currency-textfield'
// import { Container } from './styles';

interface CurrencyTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const CurrencyTextField: React.FC<CurrencyTextFieldProps> = ({ ...rest }) => {
  return <UnicefCurrencyTextField
    decimalCharacter=","
    digitGroupSeparator="."
    currencySymbol=""
    decimalPlaces={2}
    decimalPlacesShownOnFocus={2}
    variant="outlined"
    size="small"
    {...rest} />
};

export default CurrencyTextField;
