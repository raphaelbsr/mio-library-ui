import React, { useState, useEffect, useRef } from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import _ from "lodash";
import PropTypes from 'prop-types';

var isActive = true

const AutoComplete = ({
  renderOption,
  onChange,
  onSearch,
  extraParams,
  time,
  inputProps,
  ...rest
}) => {
  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    debouncedSearch.current(inputValue, extraParams)
  }, [extraParams, inputValue, onSearch])

  const search = async (query, params) => {
    if (isActive) {
      const result = await onSearch(query, params)
      setOptions(result)
    } else {
      isActive = true
    }
    setLoading(false);
  }

  const change = (e, newValue) => {
    isActive = false
    onChange(e, newValue)
  }

  const debounced = _.debounce(search, time, extraParams)
  const debouncedSearch = useRef(debounced)

  return <Autocomplete
    onChange={change}
    onInputChange={(event, newValue) => {
      setInputValue(newValue)
    }}
    options={options}
    getOptionLabel={renderOption}
    renderInput={(params) => (
      <TextField
        {...params}
        {...inputProps}
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <React.Fragment>
              {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </React.Fragment>
          ),
        }}
      />
    )}
    {...rest}
  />
};

AutoComplete.propTypes = {
  onChange: PropTypes.func,
  renderOption: PropTypes.func,
  renderGroup: PropTypes.func,
  groupBy: PropTypes.func,
  inputProps: PropTypes.object,
  onSearch: PropTypes.func.isRequired,
  time: PropTypes.number,
  extraParams: PropTypes.any,
  multiple: PropTypes.bool
}

AutoComplete.defaultProps = {
  inputProps: { label: "Label", margin: "normal", variant: "outlined" },
  renderOption: ((option) => option),
  onChange: () => { },
  time: 500,
  extraParams: undefined,
  multiple: false
}

export default AutoComplete;
