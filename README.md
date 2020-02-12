<br />
<p align="center">
  <a href="https://rocketseat.com.br">
    <img width="256" src="https://datac-mio.s3-sa-east-1.amazonaws.com/LogoMio.png" alt="Logo">
  </a>
  <h3 align="center">MIO Library UI</h3>
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%c3%bado)
- [Sobre o Projeto](#sobre-o-projeto)
- [Instalação](#instala%c3%a7%c3%a3o)
- [Guia de Uso](#guia-de-uso)
- [Componentes](#componentes)
- [Componentes ToDo](#componentes-todo)
- [Docs](#docs)
  - [&lt;ActionDialog />](#actiondialog)

## Sobre o Projeto

MIO Library UI é um pacote de componentes de interface de usuário baseado na biblioteca [Material-UI](https://material-ui.com).

## Instalação

Para instalar basta executar o seguinte comando

```sh
// Para instalar com npm
npm install mio-library-ui

// Para instalar com yarn
yarn add mio-library-ui
```

## Guia de Uso

Importe o componente que deseja e use de acordo com as especificações na documentação de cada componente

```Jsx
import React, { Component } from 'react';

import { ActionDialog } from 'mio-library-ui';

export default class App extends Component {
  render() {
    return (
        <ActionDialog isOpen={true}>Você quer mesmo excluir este registro</ActionDialog>
    );
  }
}
```

## Componentes

- [ActionDialog](#actiondialog) O componente ActionDialog exibe um caixa de diálogo para o usuário executar alguma ação

## Componentes ToDo

Lista de componentes que ainda precisão ser implementados

## Docs

### &lt;ActionDialog />

ActionDialog exibe um caixa de diálogo para o usuário executar alguma ação. Este é um componente muito flexível que pode ser usado para formulários até caixas de confirmação.

O componente aceita as seguintes propriedades.

| Nome           | Tipo                    | Descrição                                                                                                                                                                                                                                                                  |
| -------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isOpen         | boolean (Obrigatório)   | Quando o valor for "true" o dialog será exibido.                                                                                                                                                                                                                           |
| title          | string (Obrigatório)    | Título do Dialog exibido.                                                                                                                                                                                                                                                  |
| onClose        | function (Obrigatório)  | Uma função callback que é disparada quando o usuário demonstra intenção de fechar o Dialog clicando no ícone fechar ou fora do Dialog.                                                                                                                                     | Ʋ |
| okLabel        | string                  | Texto de rótulo do botão Ok                                                                                                                                                                                                                                                |
| cancelLabel    | string                  | Texto de rótulo do botão Cancelar                                                                                                                                                                                                                                          |
| isOkProcessing | boolean (Padrão: false) | Quando o valor for true o botão Ok exibe um [CircularProgress](https://material-ui.com/components/progress/#circular) ao invés do rótulo do botão, muito usado para indicar o usuário que um processo ainda está em execução                                               |
| onOkClick      | function                | Uma função callback para ser executada quando o usuário clicar no botão Ok.                                                                                                                                                                                                |
| onCancelClick  | function                | Uma função callback para ser executada quando o usuário clicar no botão Cancelar. Geralmente é usado para fechar o Dialog                                                                                                                                                  |
| customActions  | elemento                | O Componente DialogActions provê por padrão dois botões de ação, caso você queira utilizar seus próprios botões de ação basta definir seu componente nessa propriedade. Se fizer isso as propriedades onOkClick, onCancelClick, okLabel, cancelLabel não serão utilizadas. |
| children       | elemento                | Conteúdo do Dialog.                                                                                                                                                                                                                                                        |

MIT © [raphaelbsr](https://github.com/raphaelbsr)
