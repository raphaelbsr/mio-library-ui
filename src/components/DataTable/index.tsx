import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { LinearProgress } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton';
import CustomFooter from './components/CustomFooter';

interface DataTableProps {
  isLoading?: boolean
  isFetching?: boolean
  data: any
  columns: any
  options: any
  title?: string
  pagination?: boolean
  nativePagination?: boolean
  sherlock?: any
  fixedHeader?: boolean
  pageSize?: number
  autoDimension?: boolean
  orderBy: string,
  sortParser?: any
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
    isFetching,
    data,
    columns,
    options: optionsProps,
    title,
    pagination,
    nativePagination,
    sherlock,
    fixedHeader,
    pageSize,
    orderBy,
    sortParser,
    ...rest
  } = props;
  const [_data, setData] = useState([]);
  const [dataDisplay, setDataDisplay] = useState([]);
  const [_pagination, setPagination] = useState({
    curPage: 0,
    pageSize: pageSize
  });
  const [dimension, setDimension] = useState({
    width: 500,
    height: 500
  })

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
  }, [_data, pagination, _pagination, orderBy]);

  useEffect(() => {

    const setDataWithSort = (_data) => {

      if (orderBy) {

        let order = 'asc'

        const splited = orderBy.split(" ")
        const sortName = splited[0]

        if (splited[1]) {
          order = splited[1]
        }

        const sorted = _data.sort((a, b) => {
          return (sortParser(a[sortName]) < sortParser(b[sortName]) ? -1 : 1) * (order === 'desc' ? 1 : -1);
        });

        setData(sorted)
        return
      }
      setData(_data)
    }

    if (sherlock) {
      const investigated = investigate(data, sherlock);
      if (investigated) {
        setDataWithSort(investigated);
        return;
      }
    }
    setDataWithSort(data);
  }, [data, sherlock, orderBy]);

  useEffect(() => {
    const handleDimension = () => {

    }
    window.addEventListener('resize', handleDimension)
    return () => {
      if (handleDimension) {
        window.removeEventListener('resize', handleDimension)
      }
    }

  }, [])



  const changeDisplayedData = __data => {
    setDataDisplay([...__data]);
  };

  const handleChangePage = curPage => {
    setPagination({ ..._pagination, curPage });
    if (options?.onChangePage) {
      options.onChangePage(curPage)
    }
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
    <>
      {isFetching && <LinearProgress />}
      <MUIDataTable
        title={title}
        data={isLoading ? skeletonData : dataDisplay}
        columns={isLoading ? skeletonColumns : columns}
        options={options}
        {...rest}
      />
    </>
  );
};

DataTable.defaultProps = {
  pagination: true,
  nativePagination: false,
  data: [],
  sherlock: false,
  pageSize: 25,
  fixedHeader: false,
  autoDimension: false,
  sortParser: (d) => d
};

export default DataTable;
