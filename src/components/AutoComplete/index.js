import React, { useState, useEffect, useRef } from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import _ from "lodash";
import PropTypes from 'prop-types';

var isActive = true

const AutoComplete = (props) => {
  const {
    onChange,
    renderOptions,
    inputProps,
    onSearch,
    time } = props
  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    debouncedSearch.current(inputValue)
  }, [inputValue, onSearch])


  const search = async (query) => {
    if (isActive) {
      console.log('Searching Active')
      const result = await onSearch(query)
      setOptions(result)
    } else {
      isActive = true
    }
    setLoading(false);
  }

  const change = (e, newValue) => {
    isActive = false
    onChange(newValue)
  }

  const debounced = _.debounce(search, time)
  const debouncedSearch = useRef(debounced)

  return <Autocomplete
    onChange={change}
    onInputChange={(event, newValue) => {
      setInputValue(newValue)
    }}
    options={renderOptions(options)}
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
    // autoComplete
    includeInputInList
    filterSelectedOptions
  />
};

AutoComplete.propTypes = {
  onChange: PropTypes.func,
  renderOptions: PropTypes.func,
  inputProps: PropTypes.object,
  onSearch: PropTypes.func.isRequired,
  time: PropTypes.number
}

AutoComplete.defaultProps = {
  inputProps: { label: "Label", margin: "normal", variant: "outlined" },
  renderOptions: ((options) => options.map(option => option)),
  onChange: () => { },
  time: 500,
}

export default AutoComplete;
