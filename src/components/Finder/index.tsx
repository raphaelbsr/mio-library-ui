import React, { useState, useEffect, useCallback } from 'react';
import {
  Grow,
  IconButton,
  TextField,
  InputAdornment,
  CircularProgress,
  Box,
  TextFieldProps,
  InputProps
} from '@material-ui/core';
import {
  Search as SearchIcon,
  Close as CloseIcon
} from "@material-ui/icons/";
import _ from "lodash";

interface FinderProps extends React.InputHTMLAttributes<React.ReactFragment> {
  onSearch: { <T>(query: string): Array<T> };
  label?: string;
  variant?: "standard" | "filled" | "outlined";
  isOpen?: boolean;
  showIcons?: boolean;
  searching?: boolean;
  time?: number;
  onClose?: any
  textFieldProps?: TextFieldProps
}

const Finder: React.FC<FinderProps> = React.forwardRef((props, ref?: React.Ref<HTMLInputElement>) => {

  const { onSearch, onClose, searching, time, isOpen: _isOpen, showIcons, label, variant, textFieldProps } = props
  const [isOpen, setIsOpen] = useState(false)
  const [growIn, setGrowIn] = useState(false)

  useEffect(() => {
    setIsOpen(_isOpen)
    setGrowIn(_isOpen)
  }, [_isOpen])

  const debouncedHandleTextChange = useCallback(_.debounce(query => onSearch(query), time), [onSearch])

  const handleTextChange = event => {
    debouncedHandleTextChange(event.target.value);
  };

  const abrirCaixaDePesquisa = () => {
    setGrowIn(true)
    setIsOpen(true)
  }
  const fecharCaixaDePesquisa = () => {
    setGrowIn(false)
    setTimeout(() => {
      setIsOpen(false);
      onClose();
    }, 500)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      fecharCaixaDePesquisa();
    }
  };

  let inputProps: InputProps = {
  }

  if (showIcons) {
    inputProps.endAdornment =
      <InputAdornment position="end">
        {
          !searching ? <IconButton
            size="small"
            color="primary"
            onClick={fecharCaixaDePesquisa}>
            <CloseIcon fontSize="small" />
          </IconButton>
            : <CircularProgress size={16} color="primary" />
        }
      </InputAdornment>
  }

  if (textFieldProps?.InputProps) {
    inputProps = {
      ...inputProps,
      ...textFieldProps.InputProps
    }
  }

  return <React.Fragment>
    {/* <KeyboardEventHandler
      handleKeys={['ctrl+p']}
      onKeyEvent={(key: string, e: React.KeyboardEvent<HTMLInputElement>) => abrirCaixaDePesquisa()} /> */}
    <Box style={
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignContent: 'flex-end',
        alignItems: 'center'
      }}
    >
      {showIcons && <IconButton
        style={
          {
            height: '100%',
          }}
        size="small"
        color="primary"
        onClick={abrirCaixaDePesquisa}>
        <SearchIcon fontSize="small" />
      </IconButton>}

      {isOpen &&
        <Grow in={growIn} timeout={{ appear: 500, enter: 500, exit: 500 }}>
          <TextField
            size="small"
            fullWidth
            variant={variant}
            autoFocus={true}
            label={label}
            onKeyDown={onKeyDown}
            onChange={handleTextChange}
            inputRef={ref}
            {...textFieldProps}
            InputProps={inputProps}
          />
        </Grow>
      }
    </Box>
  </React.Fragment>
})

Finder.defaultProps = {
  isOpen: false,
  showIcons: true,
  searching: false,
  time: 500,
  label: '',
  variant: 'standard',
  onClose: () => { return null },
}
export default Finder;
