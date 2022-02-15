import React, { useState } from 'react';
import TableCell from "@material-ui/core/TableCell"

import {
  // ActionDialog
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  // AutoComplete,
  // TelefoneTextField,
  // formatarTelefone
  // NumeroInscricaoTextField
  // PasswordTextField
  // PageHeader
  // CurrencyTextField
  // ContentDivider
  // Button,
  // Finder,
  // ButtonBox,
  DataTable
  // TextField
} from 'mio-library-ui';

// import { Box, makeStyles } from '@material-ui/core';

const App = () => {
  const [value, setValue] = useState('');
  // const iRef = useRef(null);

  const changeOrder = () => {
    if (value === 'asc') {
      setValue('desc')
      return
    }
    setValue('asc')
  }

  const data = [
    {
      "uuid": "5e53e9c8a10a4700118c590e",
      "_id": {
        "$oid": "5e53e9c8a10a4700118c590e"
      },
      "identificador": "app-mio-admin",
      "nome": "M-IO ADMIN",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": "2020-02-24T15:20:40.059Z",
      "updated_at": {
        "$date": "2020-06-04T14:19:06.386Z"
      },
      "grupos": [
        {
          "identificador": "grupo-administrador",
          "nome": "Administrador",
          "ativo": true,
          "_id": "5e53ea41a10a4700118c5911"
        },
        {
          "identificador": "app-moderador",
          "nome": "Moderador",
          "ativo": true,
          "_id": {
            "$oid": "5e5d11560617e3001169b616"
          }
        },
        {
          "identificador": "grupo-app-center",
          "nome": "App Center",
          "ativo": true,
          "_id": {
            "$oid": "5e94fd3434cea00012b38f2c"
          }
        },
        {
          "identificador": "grupo-datac-home",
          "nome": "Data C Home",
          "ativo": true,
          "_id": {
            "$oid": "5e98a2a91a60d50012fb2a2e"
          }
        },
        {
          "identificador": "grupo-projects",
          "nome": "Projects",
          "ativo": true,
          "_id": {
            "$oid": "5ed902d962130c001213842c"
          }
        }
      ]
    },
    {
      "_id": {
        "$oid": "5e53e9e4a10a4700118c590f"
      },
      "identificador": "app-stella",
      "nome": "Stella",
      "ativo": true,
      "habilitaEmpresa": true,
      "temTemplate": true,
      "created_at": "2020-02-24T15:21:08.818Z",
      "updated_at": {
        "$date": "2020-02-27T18:31:14.714Z"
      }
    },
    {
      "_id": {
        "$oid": "5e53e9eda10a4700118c5910"
      },
      "identificador": "app-mio",
      "nome": "M-IO",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": "2020-02-24T15:21:17.454Z",
      "updated_at": {
        "$date": "2020-04-15T03:03:59.299Z"
      },
      "grupos": [
        {
          "identificador": "grupo-administrador",
          "nome": "Administrador",
          "ativo": true,
          "_id": "5e53ea5aa10a4700118c5912"
        }
      ]
    },
    {
      "_id": {
        "$oid": "5e5cf90b0617e3001169b613"
      },
      "identificador": "app-mio-protocolo",
      "nome": "Protocolo",
      "ativo": true,
      "habilitaEmpresa": true,
      "created_at": {
        "$date": "2020-03-02T12:16:11.502Z"
      },
      "updated_at": {
        "$date": "2020-03-02T12:16:11.502Z"
      }
    },
    {
      "_id": {
        "$oid": "5e7d578a4bf35d0b7b09f32a"
      },
      "identificador": "app-mio-gestao",
      "nome": "M-IO GESTÃO",
      "ativo": true,
      "habilitaEmpresa": true,
      "created_at": {
        "$date": "2020-03-27T01:31:54.712Z"
      },
      "updated_at": {
        "$date": "2020-04-15T03:04:07.752Z"
      },
      "grupos": [
        {
          "identificador": "grupo-padrao",
          "nome": "Padrão",
          "ativo": true,
          "_id": {
            "$oid": "5e7d583d4bf35d0b7b09f32d"
          }
        }
      ]
    },
    {
      "_id": {
        "$oid": "5e94fff134cea00012b38f2d"
      },
      "identificador": "app-mio-mailer",
      "nome": "M-IO MAILER",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": {
        "$date": "2020-04-14T00:12:33.523Z"
      },
      "updated_at": {
        "$date": "2020-04-15T03:04:20.964Z"
      },
      "grupos": [
        {
          "identificador": "grupo-administrador",
          "nome": "Administrador",
          "ativo": true,
          "_id": {
            "$oid": "5e95003834cea00012b38f2e"
          }
        },
        {
          "identificador": "grupo-principal",
          "nome": "Principal",
          "ativo": true,
          "_id": {
            "$oid": "5e951da21a60d50012fb2a2b"
          }
        }
      ]
    },
    {
      "_id": {
        "$oid": "5ed6953362130c001213842a"
      },
      "identificador": "app-mio-projects",
      "nome": "M-IO Projects",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": {
        "$date": "2020-06-02T18:06:43.021Z"
      },
      "updated_at": {
        "$date": "2020-08-20T19:44:47.481Z"
      },
      "grupos": [
        {
          "identificador": "grupo-padrao",
          "nome": "Padrão",
          "ativo": true,
          "_id": {
            "$oid": "5ed6954262130c001213842b"
          }
        },
        {
          "identificador": "grupo-projects",
          "nome": "Projetos",
          "ativo": true,
          "_id": {
            "$oid": "5f3ed2af4e55390012c9654d"
          }
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0cf7acddc24400128f30f3"
      },
      "identificador": "app-pessoal",
      "nome": "Data C Pessoal",
      "ativo": true,
      "habilitaEmpresa": true,
      "created_at": {
        "$date": "2020-07-14T00:09:15.983Z"
      },
      "updated_at": {
        "$date": "2020-07-14T00:09:32.488Z"
      },
      "grupos": [
        {
          "identificador": "grupo-padrao",
          "nome": "Grupo Padrão",
          "ativo": true,
          "_id": {
            "$oid": "5f0cf7bcddc24400128f30f4"
          }
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f31b53f4e55390012c96546"
      },
      "identificador": "app-fdv",
      "nome": "Força de Vendas",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": {
        "$date": "2020-08-10T20:59:43.150Z"
      },
      "updated_at": {
        "$date": "2020-08-10T21:00:04.914Z"
      },
      "grupos": [
        {
          "identificador": "grupo-padrao",
          "nome": "Grupo Padrão",
          "ativo": true,
          "_id": {
            "$oid": "5f31b5544e55390012c96547"
          }
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f6364c6221ea100129914ce"
      },
      "identificador": "app-contabil",
      "nome": "Data C Contábil",
      "ativo": true,
      "habilitaEmpresa": true,
      "created_at": {
        "$date": "2020-09-17T13:29:42.928Z"
      },
      "updated_at": {
        "$date": "2020-09-17T13:30:12.554Z"
      },
      "grupos": [
        {
          "identificador": "grupo-padrao",
          "nome": "Grupo Padrão",
          "ativo": true,
          "_id": {
            "$oid": "5f6364e4221ea100129914cf"
          }
        }
      ]
    },
    {
      "_id": {
        "$oid": "615f3e38a596cb0012c46d68"
      },
      "identificador": "app-emissor-boletos",
      "nome": "Data C - Emissor Boletos",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": {
        "$date": "2021-10-07T18:36:40.766Z"
      },
      "updated_at": {
        "$date": "2021-10-07T18:36:40.777Z"
      }
    },
    {
      "_id": {
        "$oid": "615f3e52a596cb0012c46d69"
      },
      "identificador": "app-helpdesk",
      "nome": "Data C - Helpdesk",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": {
        "$date": "2021-10-07T18:37:06.183Z"
      },
      "updated_at": {
        "$date": "2021-10-07T18:37:06.183Z"
      }
    },
    {
      "_id": {
        "$oid": "615f3e71a596cb0012c46d6a"
      },
      "identificador": "app-clientes",
      "nome": "Data C - Clientes",
      "ativo": true,
      "habilitaEmpresa": false,
      "created_at": {
        "$date": "2021-10-07T18:37:37.194Z"
      },
      "updated_at": {
        "$date": "2021-10-07T18:37:37.194Z"
      }
    }
  ]


  return (
    <div
      style={
        {
          // width: '100%',
          // height: '100%',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        }
      }
    >
      <DataTable
        data={data || []}
        columns={[
          {
            name: 'nome',
            options: {
              customHeadRender: (columnMeta, handleToggleColumn, sortOrder) => {
                return <TableCell key={2} onClick={() => { changeOrder() }} style={{ cursor: 'pointer' }}>
                  {columnMeta.name}
                </TableCell>
              }
            }
          },
          {
            name: 'ativo',
          },
        ]}
        pagination={true}
        pageSize={5}
        orderBy={`nome ${value}`}
      />
    </div>
  );
};

export default App;
