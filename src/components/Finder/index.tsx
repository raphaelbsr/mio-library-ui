import React, { useState, useCallback } from 'react';
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
  searching?: boolean;
  time?: number;
}

const Finder: React.FC<FinderProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const [growIn, setGrowIn] = useState(false)
  const { onSearch, searching, time } = props

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
    setTimeout(() => { setIsOpen(false) }, 500)
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
    <IconButton
      size="small"
      color="primary"
      onClick={abrirCaixaDePesquisa}>
      <SearchIcon fontSize="small" />
    </IconButton>
    {isOpen &&
      <Grow in={growIn} timeout={{ appear: 500, enter: 500, exit: 500 }}>
        <TextField
          size="small"
          onKeyDown={onKeyDown}
          fullWidth
          autoFocus={true}
          onChange={handleTextChange}
          InputProps={{
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
};

Finder.defaultProps = {
  searching: false,
  time: 500
}
export default Finder;
