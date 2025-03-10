# soulplus_crud_avaliacao
Aplicação Crud para avaliação

# Aspecto técnico

- Aplicação em Angular
- Utilizar como opcional a biblioteca do bootstrap para gerenciamento de estilos
- Projeto terá 2 componentes criados
  - listaCliente
  - detalhesCliente
- Deve criar o projeto principal (appComponent) e o mesmo deve chamar na inicalização o componente listaCliente
- As funções abaixo descritas fazem o listaCliente chamar o componente detalhesCliente

# Principais requisitos

- Aplicação que contenha os seguintes campos: id, nome, telefone, perfil e url de foto
- A aplicação deve apresentar uma lista de registros (componente listaCliente) e nesta lista deve conter os botões de editar ou deletar o item da lista
- A aplicação terá um botão de "novo" no topo da lista
- Funções dos botões:
  - Novo: a aplicação irá abrir um modal que será um componente detalheCliente, onde todos os campos devem estar em branco e aceitar os respectivos dados. Ao confirmar os dados, então deve-se adicionar um registro novo na lista, fechar o modal e voltar para lista atualizada
  - Editar: a aplicação irá abrir um modal que será um componente detalheCliente, onde todos os campos devem estar preenchidos com os dados do item selecionado. Ao confirmar os dados, então deve-se atualizar os dados do registro da lista, e voltar para a lista atualizada
  - Excluir: a aplicação deve mostrar uma caixa de diálogo confirmando se realmente é para excluir com as opção: confirma e cancela; se confirma - exclui o registro da lista; se cancela então não faz nada
- Esta aplicação não terá backend, tudo será guardado em tela e memória, ou seja, uma vez que a mesma for recarregada, é como se nada existisse e os dados começam a serem guardado a aprtir deste momento, mas todas as funções definidas devem funcionar
