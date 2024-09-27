## Documentação do Projeto: Aplicação React - "As Melhores Cidades do Mundo e Cadastro!"

#### 1. Introdução
- Este documento descreve a estrutura e o funcionamento de uma aplicação React que exibe uma lista das 10 melhores cidades do mundo. A aplicação permite que os usuários visualizem uma lista de cidades, adicionem novas cidades por meio de um formulário, e conta com a utilização de diversos componentes React para modularidade e reutilização de código.

#### 2. Estrutura do Projeto

**2.1. Componentes**

- A aplicação é composta pelos seguintes componentes:

**App.js:** _O componente principal que gerencia o estado e contém os outros componentes._

**CityList.js:** _Responsável pela listagem das cidades e gerenciamento do formulário de cadastro, utilizando hooks para requisições de API e manipulação de estado._

**FormInput.js:** _Um componente reutilizável que renderiza campos de formulário, facilitando a customização de inputs._

**CityItem.js:** _Exibe os detalhes de cada cidade (nome, país, link, e foto), recebendo as informações via props._

**CadastroForm.js:** _Componente que contém os campos para cadastro de novas cidades, sendo gerenciado via formulário controlado (state)._


#### 3. Comunicação entre Componentes

- A comunicação entre os componentes é feita através de propriedades (props). O estado principal da lista de cidades é mantido no componente CityList.js, e é passado para os componentes filhos que precisam acessar ou modificar essa informação.

**CityList.js** _gerencia o estado da lista de cidades e passa os dados para os componentes filhos._

**CityItem.js** _recebe os detalhes de cada cidade (nome, país, link, foto) e renderiza esses dados em um item de lista._

**FormInput.js** _lida com a entrada de dados para o formulário de cadastro e comunica as mudanças de estado ao componente pai (**CityList.js**)._


#### 4. Funcionamento do Formulário e Validações

- O formulário para adicionar novas cidades está implementado dentro de CityList.js e utiliza um formulário controlado.

**Funcionamento:**

_O formulário contém campos para "Nome", "Foto", "País", e "Link", controlados pelo hook useState.
Cada campo tem uma validação para garantir que não sejam enviados valores vazios. Se os campos não estiverem preenchidos, uma mensagem de erro é exibida.
Ao submeter o formulário, os valores são capturados, e uma requisição HTTP do tipo POST é enviada ao JSON server, cadastrando uma nova cidade.
Em seguida, o estado é atualizado com a nova cidade, e o formulário é resetado._

**Alterações Implementadas:**

_Validações adicionadas para garantir que todos os campos estejam preenchidos.
Corrigido o problema de envio de dados, onde campos estavam aparecendo como vazios devido a erros na manipulação de name no formulário.
A função de handleFieldsChange foi modificada para garantir que os valores dos inputs sejam corretamente armazenados no estado._


#### 5. Requisições à API e Manipulação de Estado

- _A aplicação utiliza o useEffect para realizar uma chamada à API e carregar as cidades já cadastradas no JSON server ao iniciar. Para cadastrar novas cidades, o método HTTP POST é utilizado._

**Fluxo de Requisições:**

**GET:** _Ao carregar a página, a lista de cidades já cadastradas é recuperada e exibida na interface._
**POST:** _Quando o usuário cadastra uma nova cidade, os dados são enviados para o servidor e a cidade é adicionada à lista de cidades visível no site._


#### 6. Componente de Listagem

- O componente CityList.js é responsável por renderizar a lista de cidades. Ele recebe a lista de cidades via API, que é mapeada e renderizada individualmente através de CityItem.js.

- **CityItem.js** _recebe os detalhes de cada cidade (nome, país, link, foto) via props e exibe esses dados dentro de um item de lista estilizado._


#### 7. Alterações em FormInput.js e CityItem.js

**FormInput.js**

_O componente foi refatorado para garantir que os valores dos inputs estejam devidamente associados aos campos name e id. Isso corrige problemas de preenchimento e manipulação de estado._

**CityItem.js**

_O componente recebe os dados da cidade e agora inclui um link para mais informações sobre cada cidade cadastrada. Além disso, foram aplicadas melhorias de estilização para exibir melhor as fotos e detalhes._


#### 8. Como Rodar a Aplicação

- **Pré-requisitos:**

_Node.js instalado (versão >= 14.0)
Gerenciador de pacotes npm ou yarn
JSON Server para servir como backend falso._

- **Passos para rodar a aplicação:**

**Clone o repositório:**

bash

git clone https://github.com/seu-repositorio/react-top-cities.git

**Instale as dependências: Navegue até a pasta do projeto e execute:**

bash

npm install

ou

bash

yarn install

**Rode o JSON Server (certifique-se de estar na pasta onde o arquivo db.json está localizado):**

bash

json-server --watch db.json --port 3005

**Rode a aplicação React:**

bash

npm start

ou

bash

yarn start

**Acesse a aplicação:** _Abra o navegador e vá para http://localhost:3000 para visualizar a aplicação._

#### 9. Considerações Finais

Este projeto demonstra a construção de uma aplicação React funcional que integra conceitos essenciais como componentes reutilizáveis, gerenciamento de estado com hooks, comunicação via props, e integração com uma API externa (JSON Server). As validações implementadas garantem uma boa experiência do usuário ao evitar o envio de formulários com dados incompletos. Além disso, a modularidade do código facilita a manutenção e expansão da aplicação, permitindo a adição de novas funcionalidades no futuro, como filtros avançados, ordenação de cidades, ou até mesmo persistência de dados em um backend real. Este projeto oferece uma base sólida para a criação de aplicações mais complexas, ao mesmo tempo em que proporciona um ambiente interativo e dinâmico para os usuários.