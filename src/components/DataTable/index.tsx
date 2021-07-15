import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import Skeleton from '@material-ui/lab/Skeleton';
import CustomFooter from './components/CustomFooter';


interface DataTableProps {
  isLoading?: boolean,
  data: any,
  columns: any,
  options: any,
  title?: string,
  pagination?: boolean,
  nativePagination?: boolean,
  sherlock?: any,
  fixedHeader?: boolean,
  pageSize?: number
}

const defaultOptions = {
  filterType: 'textField',
  selectableRows: 'none',
  elevation: 0,
  responsive: 'vertical',
  print: false,
  download: false,
  filter: false,
  search: false,
  viewColumns: false,
}

const DataGridTextLabels = {
  body: {
    noMatch: 'Nenhum registro encontrado',
    toolTip: 'Ordenar'
  },
  pagination: {
    next: 'Próximo',
    previous: 'Anterior',
    rowsPerPage: 'Linhas por pág:',
    displayRows: 'de'
  },
  toolbar: {
    search: 'Procurar',
    downloadCsv: 'Download CSV',
    print: 'Imprimir',
    viewColumns: 'Colunas',
    filterTable: 'Procurar na Tabela'
  },
  filter: {
    all: 'Todos',
    title: 'Filtros',
    reset: 'Limpar'
  },
  viewColumns: {
    title: 'Visualizar Colunas',
    titleAria: 'Mostrar/Ocultar Colunas da Tabela'
  },
  selectedRows: {
    text: 'Linhas Selecionadas',
    delete: 'Remover',
    deleteAria: 'Remover Linhas Selecionadas'
  }
};

const skeletonData = [
  {
    col1: ''
  }
];

const skeletonColumns = [
  {
    name: 'col1',
    label: 'Carregando',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => <Skeleton />
    }
  }
];

const paginateData = (data, start, pageSize) => {
  return data.slice(start, start + pageSize);
};

function fetchFromObject(obj, path) {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : null;
  }, obj || this);
}

const investigate = (data, sherlock) => {
  const { query, columns } = sherlock;
  if (query === '') return false;
  return data.filter(d => {
    let isFound = false;
    for (let row of columns) {
      const fetched = fetchFromObject(d, row);
      if (!fetched) {
        continue;
      }
      // if (fetched.toString().toLowerCase().indexOf(query.toLowerCase()) >= 0) {
      //   isFound = true
      //   break
      // }
      if (
        fetched
          .toString()
          .toLowerCase()
          .includes(query.toLowerCase())
      ) {
        isFound = true;
        break;
      }
    }
    return isFound;
  });
};

const DataTable: React.FC<DataTableProps> = props => {
  const {
    isLoading,
    data,
    columns,
    options: optionsProps,
    title,
    pagination,
    nativePagination,
    sherlock,
    fixedHeader,
    pageSize
  } = props;
  const [_data, setData] = useState([]);
  const [dataDisplay, setDataDisplay] = useState([]);
  const [_pagination, setPagination] = useState({
    curPage: 0,
    pageSize: pageSize
  });

  const options = { ...defaultOptions, ...optionsProps }

  useEffect(() => {
    let __data = _data;

    if (pagination) {
      __data = paginateData(
        __data,
        _pagination.curPage * _pagination.pageSize,
        _pagination.pageSize
      );
    }
    changeDisplayedData(__data);
    //eslint-disable-next-line
  }, [_data, pagination, _pagination]);

  useEffect(() => {
    if (sherlock) {
      const investigated = investigate(data, sherlock);
      if (investigated) {
        setData(investigated);
        return;
      }
    }
    setData(data);
  }, [data, sherlock]);

  const changeDisplayedData = __data => {
    setDataDisplay([...__data]);
  };

  const handleChangePage = curPage => {
    setPagination({ ..._pagination, curPage });
  };

  const handleChangeRowsPerPage = pSize => {
    setPagination({ ..._pagination, pageSize: parseInt(pSize) });
  };

  options.fixedHeader = fixedHeader;
  options.textLabels = DataGridTextLabels;
  options.pagination = nativePagination;
  options.count = _data?.length || 0;
  options.customFooter = (
    count,
    page,
    rowsPerPage,
    changeRowsPerPage,
    changePage,
    textLabels
  ) => {
    if (!pagination || isLoading) return <></>;
    return (
      <CustomFooter
        count={_data?.length}
        page={_pagination.curPage}
        rowsPerPage={_pagination.pageSize}
        changeRowsPerPage={handleChangeRowsPerPage}
        changePage={handleChangePage}
        textLabels={textLabels}
      />
    );
  };

  return (
    <MUIDataTable
      title={title}
      data={isLoading ? skeletonData : dataDisplay}
      columns={isLoading ? skeletonColumns : columns}
      options={options}
    />
  );
};

DataTable.defaultProps = {
  pagination: true,
  nativePagination: false,
  data: [],
  sherlock: false,
  pageSize: 25,
  fixedHeader: false
};

export default DataTable;
