import React, { useState, useEffect, useRef } from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import _ from "lodash";

var isActive = true

interface AutoComplete {
  /**
   * renderOptions é uma função que recebe um item e retorna o componente que deve ser renderizado
   */
  renderOptions<T>(item: T): React.ReactNode;
  /**
   * Uma função callback que é disparada quando é digitada um valor para busca,
   * este valor é passado como parâmetro e a funcção deve retornar um array filtrado
   */
  onSearch(query: string, params?: any): React.ReactNode;
  /**
   * Uma função callback que é disparada quando o valor é alterado
   */
  onChange<T>(e: React.ChangeEvent<HTMLInputElement>, newValue: T): T;
  /**
   * Parâmetros extras que serão passados como o segundo argumento em onSearch
   */
  extraParams?: any;
  /**
   * Tempo em milisegundos que onSearch será chamado depois da última tecla pressionada
   */
  time?: number;
  inputProps?: any;
  /**
   * Se verdadeiro permite selecionar mais de uma opção
   */
  multiple?: boolean;
}

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

  const search = async (query: any, params: any) => {
    if (isActive) {
      const result = await onSearch(query, params)
      setOptions(result)
    } else {
      isActive = true
    }
    setLoading(false);
  }

  const change = (e: any, newValue: string) => {
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

AutoComplete.defaultProps = {
  inputProps: { label: "Label", margin: "normal", variant: "outlined" },
  renderOption: ((option: any) => option),
  time: 500,
  extraParams: undefined,
  multiple: false
}

export default AutoComplete;
