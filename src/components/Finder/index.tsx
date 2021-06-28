import React, { useState, useEffect, useCallback } from 'react';
import {
  Grow,
  IconButton,
  TextField,
  InputAdornment,
  CircularProgress
} from '@material-ui/core';
import {
  Search as SearchIcon,
  Close as CloseIcon
} from "@material-ui/icons/";
// import KeyboardEventHandler from 'react-keyboard-event-handler';
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
}

const Finder: React.FC<FinderProps> = React.forwardRef((props, ref?: React.Ref<HTMLInputElement>) => {

  const { onSearch, onClose, searching, time, isOpen: _isOpen, showIcons, label, variant } = props
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

  return <React.Fragment>
    {/* <KeyboardEventHandler
      handleKeys={['ctrl+p']}
      onKeyEvent={(key: string, e: React.KeyboardEvent<HTMLInputElement>) => abrirCaixaDePesquisa()} /> */}
    {showIcons && <IconButton
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
          InputProps={showIcons && {
            endAdornment: (
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
            )
          }}
        />
      </Grow>
    }
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
