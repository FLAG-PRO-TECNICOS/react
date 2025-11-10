# Blog de Viagens

## Objetivo
O objetivo deste projeto é construir um Blog de Viagens com HTML, CSS e JS / React.

## Recursos
### Página Inicial
#### Destaque da Página Inicial
- Como a primeira coisa que as pessoas veem ao visitar o seu site, a seção de destaque é a área que aparece imediatamente na tela, sob o seu logótipo e menu
- Deve conter uma imagem de fundo e um título
#### Lista de Locais de Viagem
- Construir uma lista de locais para onde viajou
- As seguintes informações devem ser exibidas na lista:
	- Nome da cidade e país
	- Data da visita (quando chegou)
	- Uma miniatura da cidade
#### Mapa com os locais (opcional)
- Adicionar as coordenadas dos locais como alfinetes em um mapa
- Mais informações abaixo

### Página Detalhada do Blog
- Cabeçalho
	- Nome da cidade e país
	- Data da visita (de e até)
- Galeria de imagens para o local
	- Pode criar a sua própria galeria ou usar frameworks de galeria de código aberto
	- Um exemplo em HTML, CSS e JS:
		- https://www.w3schools.com/howto/howto_js_slideshow.asp
- Descrição da viagem (pode ser Lipsum, mas sempre fica melhor com texto real)
- Condições meteorológicas atuais na cidade
#### Como mostrar as condições meteorológicas atuais do local de viagem
* Pode obter as condições meteorológicas atuais (incluindo um ícone) do local de viagem usando a [API OpenWeatherMap](https://openweathermap.org/api)
* Mostrá-lo como parte das informações do local de viagem

### Página para Adicionar Novo Local
- Um formulário para adicionar novos locais
- Pode experimentar com vários elementos de entrada, por exemplo, `<input type="date" />` ou `<textarea>`
- O formulário não precisa ser funcional, mas ao clicar em enviar, uma pré-visualização dos dados inseridos deve ser exibida no console log

### Página do Viajante
- Uma página para apresentar o autor do blog
- Seja tão criativo quanto quiser :)

## Tarefas Bônus
### JSON
* Crie o seu próprio arquivo JSON com todos os dados do blog na forma de uma Mock API

### Previsão do Tempo
* Adicione a previsão para os próximos dias na seção de detalhes de uma cidade

### Mapa
- Até agora, não brincamos com a incorporação de um mapa. Se quiser, sinta-se à vontade para brincar com uma API de mapas e como integrá-la no seu aplicativo. Você pode então mostrar o local de viagem em um mapa para cada local de viagem.
* Sinta-se à vontade para usar qualquer API de mapas como Google Maps ou MapBox
- [API do Google Maps](https://developers.google.com/maps/documentation/javascript/overview)
- [MapBox](https://www.mapbox.com) Eu recomendo este pela facilidade e boa documentação

## Considerações
* Os modelos fornecidos são apenas exemplos, sinta-se à vontade para projetar/estruturar seu site conforme achar melhor;
* Tenha em mente a responsividade, faça o seu melhor para fazer o seu site parecer bom tanto em navegadores de Desktop quanto em dispositivos móveis;
- Ao começar a implementar, concentre-se em criar o HTML e o CSS primeiro, o JS se torna muito mais simples quando você já tem uma IU para codificar;
- Estilize o seu site como desejar, sinta-se à vontade para usar um framework CSS como Tailwind, Bulma ou Bootstrap;
- Use o Wouter como framework de roteamento para o React
- Você tem permissão (e até mesmo é encorajado) para pedir ajuda aos seus colegas de classe ou ajudá-los;
- Você pode pedir suporte ao professor a qualquer momento

## Submissão
O prazo de submissão é no dia `21 de dezembro`
Para enviar o projeto, nos envie um e-mail com as seguintes informações:
- Projeto:
	* Link para o repositório do Github do seu projeto ou Code Sandbox
	* Um arquivo zip com o projeto também é aceitável
- Envie para Helder
