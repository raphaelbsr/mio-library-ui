import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import MuiTablePagination from '@material-ui/core/TablePagination';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';

const defaultFooterStyles = {};

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
}));

const TablePaginationActions = props => {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};

const CustomFooter = props => {
  const {
    count: _count,
    textLabels,
    rowsPerPage,
    page,
    changePage,
    changeRowsPerPage
  } = props;

  const footerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 24px 0px 24px'
  };

  return (
    <TableFooter>
      <TableRow>
        <TableCell style={footerStyle} colSpan={1000}>
          <MuiTablePagination
            component="div"
            count={_count}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={textLabels.rowsPerPage}
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} ${textLabels.displayRows} ${count}`
            }
            backIconButtonProps={{
              'aria-label': textLabels.previous
            }}
            nextIconButtonProps={{
              'aria-label': textLabels.next
            }}
            rowsPerPageOptions={[25, 50, 100]}
            onChangePage={(_, _page) => changePage(_page)}
            // onPageChange={(_, _page) => changePage(_page)}
            onChangeRowsPerPage={_ => changeRowsPerPage(_.target.value)}
            // onRowsPerPageChange={_ => changeRowsPerPage(_.target.value)}
            ActionsComponent={TablePaginationActions}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true
            }}
          />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default withStyles(defaultFooterStyles, { name: 'CustomFooter' })(
  CustomFooter
);
