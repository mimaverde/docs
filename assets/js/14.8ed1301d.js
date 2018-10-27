(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{159:function(a,s,t){a.exports=t.p+"assets/img/petshop_chapter3.f1a4212c.jpg"},212:function(a,s,t){"use strict";t.r(s);var e=[function(){var a=this.$createElement,s=this._self._c||a;return s("h1",{attrs:{id:"📋-chapter-3-connect-your-project-to-an-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📋-chapter-3-connect-your-project-to-an-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 📋 Chapter 3: Connect your Project to an API")])},function(){var a=this.$createElement,s=this._self._c||a;return s("thead",[s("tr",[s("th",[s("strong",[this._v("Objetivo do projeto")])]),this._v(" "),s("th",[this._v("Aprender como uma API funciona e como usar em nosso projeto.")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("td",[s("strong",[this._v("O que você irá aprender")])])},function(){var a=this.$createElement,s=this._self._c||a;return s("tr",[s("td",[s("strong",[this._v("Ferramentas que você irá usar")])]),this._v(" "),s("td",[this._v("Um navegador moderno como o Google Chrome. Caso esteja usando o Chrome, instale a extensão Vue.js DevTools. Uma conta em CodeSandbox.io.")])])},function(){var a=this.$createElement,s=this._self._c||a;return s("tr",[s("td",[s("strong",[this._v("Tempo estimado")])]),this._v(" "),s("td",[this._v("1 hora")])])},function(){var a=this.$createElement,s=this._self._c||a;return s("h2",{attrs:{id:"instrucoes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instrucoes","aria-hidden":"true"}},[this._v("#")]),this._v(" Instruções")])},function(){var a=this.$createElement,s=this._self._c||a;return s("h2",{attrs:{id:"adicionando-o-axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adicionando-o-axios","aria-hidden":"true"}},[this._v("#")]),this._v(" Adicionando o Axios")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("p",[a._v("Primeiro, adicione a biblioteca do Axios às dependências do seu projeto. Para fazer isso no Code Sandbox, clique na aba "),t("code",[a._v("File Editor")]),a._v(" -> "),t("code",[a._v("Dependencies")]),a._v(" -> "),t("code",[a._v("Add Dependency")]),a._v(" e procure por "),t("code",[a._v("axios")])])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Importe o Axios para o componente onde executaremos nossa chamada API - "),s("code",[this._v("views/Pets.vue")]),this._v(". No bloco de script desse componente, adicione esta linha:")])},function(){var a=this.$createElement,s=this._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("import")]),this._v(" axios "),s("span",{attrs:{class:"token keyword"}},[this._v("from")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v('"axios"')]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("axios"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("defaults"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("baseURL "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('"https://dog.ceo/api"')]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("h2",{attrs:{id:"chamando-a-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chamando-a-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Chamando a API")])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Queremos que uma nova imagem substitua a antiga corretamente quando o componente é criado, então vamos adicionar um hook "),s("code",[this._v("created ()")]),this._v(" logo após "),s("code",[this._v("data")]),this._v(":")])},function(){var a=this.$createElement,s=this._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("created")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("💡")]),this._v(" "),s("p",[this._v("Nota: Certifique-se de adicionar uma vírgula após o objeto de dados e, em seguida, adicione o "),s("code",[this._v("created ()")]),this._v("!")])])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Dentro do hook criado, adicionaremos nossa primeira consulta à API. Para executar uma requisição GET, o Axios usa o método "),s("code",[this._v("axios.get")]),this._v(". O resultado será uma promise de JavaScript, portanto, temos que fornecer retornos de sucesso e falha a ela. Por enquanto, vamos simplesmente imprimir o resultado da consulta no console. Edite "),s("code",[this._v("created () {}")]),this._v(" colocando este trecho entre as chaves:")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("  axios\n    "),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token keyword"}},[a._v("get")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token string"}},[a._v('"/breed/husky/images/random"')]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("then")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("response "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      console"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("log")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("response"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token keyword"}},[a._v("catch")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("error "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      console"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("log")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("error"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Na visualização do navegador no Code Sandbox, vá para a guia Pets. Você deve ver um objeto no seu console. Dê uma olhada melhor clicando na seta à esquerda. Estamos interessadas ​​em seu campo "),s("code",[this._v("data")]),this._v(". Você pode ver que temos um status "),s("code",[this._v("success")]),this._v(" e uma mensagem com um URL de imagem (você pode copiar/colar no seu navegador e descobrir um Husky bonito).")])},function(){var a=this.$createElement,s=this._self._c||a;return s("h2",{attrs:{id:"use-a-api-1-substitua-alguns-dos-dados-estaticos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-a-api-1-substitua-alguns-dos-dados-estaticos","aria-hidden":"true"}},[this._v("#")]),this._v(" Use a API 1 - Substitua alguns dos dados estáticos")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("p",[a._v("Vamos substituir nossa imagem Husky por essa nova. Primeiro, devemos encontrar um Husky em nosso array de cães com um método "),t("code",[a._v("Array.find")]),a._v(". Ele irá verificar os itens do array "),t("code",[a._v("dogs")]),a._v(" (que já estamos carregando no componente pelo arquivo de dados "),t("code",[a._v("data/dogs.js")]),a._v(') um por um para encontrar o primeiro item correspondente aos critérios fornecidos. No nosso caso, o critério é uma "raça" igual a "husky". Substitua o '),t("code",[a._v("console.log ()")]),a._v(" dentro do callback "),t("code",[a._v("then")]),a._v(" na chamada do Axios que acabamos de implementar por esta string:")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("const")]),a._v(" husky "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("this")]),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dogs"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("find")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dog "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" dog"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("breed "),t("span",{attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'husky'")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("log")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("husky"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Ok, nós encontramos um husky que você pode ver no "),s("code",[this._v("console.log ()")]),this._v('. Você também pode vê-lo na página "Pets" do seu aplicativo. Procure "Max", listado como um husky. Agora vamos fornecer a ele uma nova imagem reatribuindo a URL da imagem dos dados estáticos pelos dados provenientes da API. Adicione esta linha abaixo do trecho que você acabou de adicionar.')])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("husky"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("img "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" response"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("message"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("h2",{attrs:{id:"use-a-api-2-randomize-as-imagens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-a-api-2-randomize-as-imagens","aria-hidden":"true"}},[this._v("#")]),this._v(" Use a API 2 - Randomize as Imagens")])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Vamos tentar carregar uma imagem aleatória para cada cachorro em nosso array "),s("code",[this._v("dogs")]),this._v(". A primeira coisa que precisamos é de um endpoint adequado para cada raça que temos. Vamos criar um array de links usando o método "),s("code",[this._v(".map")]),this._v(".")])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("::: dica 💡\nO método "),s("code",[this._v(".map()")]),this._v(" cria um novo array com os resultados de uma função, aplicada a cada elemento do array original.\n:::")])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Sobrescreva todo o código no "),s("code",[this._v("Created ()")]),this._v(" criando esta constante de linksArray:")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("const")]),a._v(" linksArray "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("this")]),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dogs"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("map")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n   dog "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('"/breed/"')]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("+")]),a._v(" dog"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("breed "),t("span",{attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('"/images/random"')]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Estamos pegando a raça de cada cão no array e inserindo-o dentro da string do endpoint que iremos chamar (usamos o mesmo anteriormente para o husky, mas "),s("code",[this._v("breed")]),this._v(" foi usado como um valor estático lá).")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("p",[a._v("Neste ponto, temos que executar várias chamadas de API usando todos os links que acabamos de criar - tantas chamadas de API quanto existem em nossos dados estáticos. O Axios tem uma função auxiliar para este caso chamada "),t("code",[a._v("axios.all")]),a._v(" e "),t("code",[a._v("axios.spread")]),a._v(". Nós forneceremos uma série de nossos pedidos para "),t("code",[a._v("axios.all")]),a._v(", que retornará uma matriz de respostas e devemos usar o "),t("code",[a._v("axios.spread")]),a._v(' para "espalhar" este array em múltiplos argumentos. Para criar uma matriz de consultas, usaremos um método '),t("code",[a._v(".map")]),a._v(" em nosso "),t("code",[a._v("linksArray")]),a._v(", executando "),t("code",[a._v("axios.get")]),a._v(" para cada link. Adicione este snippet diretamente abaixo do snippet linksArray adicionado pouco antes.")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("axios"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("all")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("linksArray"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("map")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("link "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" axios"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token keyword"}},[a._v("get")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("link"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n   "),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("then")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n     axios"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("spread")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token operator"}},[a._v("...")]),a._v("res"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n       "),t("span",{attrs:{class:"token keyword"}},[a._v("this")]),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dogs"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("forEach")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dog"),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" index"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n         dog"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("img "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" res"),t("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("index"),t("span",{attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("message"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n       "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n     "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n   "),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("💡")]),a._v(" "),t("p",[a._v("O que esta acontecendo aqui? O método "),t("code",[a._v("forEach()")]),a._v(" executa uma função fornecida uma vez para cada elemento do array em linksArray. Basicamente, ele passa pelos dados estáticos e adiciona uma das imagem aleatórias da API a "),t("code",[a._v("this.dogs")]),a._v(", assim que tivermos a resposta da nossa API. Então nós estamos substituindo cada imagem de cão qe temos originalmente por uma nova correspondente da API ("),t("code",[a._v("index")]),a._v(" é o índice do elemento atual sendo processado no array, é o mesmo para os dois arrays porque os objetos de resposta são colocados na mesma ordem em que foram enviados).")])])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("Agora temos novas imagens toda vez que nosso componente "),s("code",[this._v("Pets")]),this._v(" é criado (você pode ver as imagens mudarem na atualização da página ou simplesmente mudando as abas de "),s("code",[this._v("pets")]),this._v(" para "),s("code",[this._v("home")]),this._v(" e vice-versa). Os nomes e raças dos cães ainda estão sendo extraídos de dados estáticos, mas as imagens são provenientes da API, combinadas com a raça do cão estático.")])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[this._v("O único problema remanescente é que ainda podemos ver as imagens antigas por um breve momento quando entramos na página Pets. Vamos limpar as imagens dos cachorros antes de realizarmos uma consulta. Adicione esta string como a primeira dentro do hook "),s("code",[this._v("created ()")]),this._v(":")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("this")]),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dogs"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("forEach")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dog "),t("span",{attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n     dog"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("img "),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('""')]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[s("strong",[this._v("Agora, inicialmente, vemos retratos vazios de cachorros e, em seguida, as imagens são carregadas a partir da API. Progresso!")])])},function(){var a=this.$createElement,s=this._self._c||a;return s("h1",{attrs:{id:"resultado-final"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resultado-final","aria-hidden":"true"}},[this._v("#")]),this._v(" Resultado final")])},function(){var a=this.$createElement,s=this._self._c||a;return s("p",[s("img",{attrs:{src:t(159),alt:"chapter 3 result"}})])}],o=t(0),n=Object(o.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[a._m(0),a._v(" "),t("table",[a._m(1),a._v(" "),t("tbody",[t("tr",[a._m(2),a._v(" "),t("td",[a._v("Usando a "),t("a",{attrs:{href:"https://dog.ceo/dog-api/",target:"_blank",rel:"noopener noreferrer"}},[a._v("DogCEO API"),t("OutboundLink")],1),a._v(", você irá carregar imagens de cães dinamicamente, ao invés de usar dados falsos.")])]),a._v(" "),a._m(3),a._v(" "),a._m(4)])]),a._v(" "),a._m(5),a._v(" "),t("p",[a._v("Se você precisar reiniciar seu projeto, clone "),t("a",{attrs:{href:"https://github.com/VueVixens/projects/tree/master/chapter-1-end",target:"_blank",rel:"noopener noreferrer"}},[a._v("este repositório"),t("OutboundLink")],1),a._v(" no Code Sandbox após efetuar o login.")]),a._v(" "),t("p",[a._v("Até agora, colocamos imagens de cães em nossas telas por meio de alguns dados JSON estáticos que importamos para um componente. Isso é ótimo para fins de demonstração, mas na vida real, você quase sempre criará aplicativos da Web que consomem dados reais provenientes de suas próprias fontes de dados, ou externamente, de algum lugar da Internet. Vamos aprender a consumir dados de terceiros.")]),a._v(" "),t("p",[a._v("Para realizar chamadas de API, precisaremos de uma biblioteca chamada "),t("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[a._v("axios"),t("OutboundLink")],1),a._v(". É um cliente HTTP baseado em "),t("a",{attrs:{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[a._v("Promises"),t("OutboundLink")],1),a._v(" que funciona no navegador e em um ambiente node.js.")]),a._v(" "),t("p",[a._v("::: dica 💡\nOriginalmente, o Vue tinha sua própria maneira de fazer chamadas API usando ajax mas esse recurso foi preterido, pois a biblioteca independente do Axios funcionou muito bem para esse propósito, eliminando a necessidade de uma solução integrada. Leia mais sobre esta decisão "),t("a",{attrs:{href:"https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4",target:"_blank",rel:"noopener noreferrer"}},[a._v("aqui"),t("OutboundLink")],1),a._v(".\n:::")]),a._v(" "),a._m(6),a._v(" "),a._m(7),a._v(" "),a._m(8),a._v(" "),a._m(9),t("p",[a._v("Todas as nossas chamadas usarão a mesma URL de base com diferentes endpoints. Logo abaixo da importação para os axios, adicione o URL base às opções do Axios:")]),a._v(" "),a._m(10),t("p",[a._v("Agora estamos prontos para fazer nossa primeira chamada de API.")]),a._v(" "),a._m(11),a._v(" "),t("p",[a._v("Vamos substituir a primeira imagem estática pela imagem aleatória de Husky da API Dog CEO. Primeiro temos que verificar qual endpoint nós temos que usar. Olhando para a documentação "),t("a",{attrs:{href:"https://dog.ceo/dog-api/",target:"_blank",rel:"noopener noreferrer"}},[a._v("da API"),t("OutboundLink")],1),a._v(" podemos descobrir que precisamos acrescentar "),t("code",[a._v("/breed/husky/images/random")]),a._v(" à chamada da API (a parte "),t("code",[a._v("api")]),a._v(" já está na nossa URL base).")]),a._v(" "),a._m(12),a._v(" "),a._m(13),a._m(14),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("💡")]),a._v(" "),t("p",[a._v("Este é o primeiro hook de lifecycle do nosso aplicativo! Estes são muito úteis quando você quer um bom controle sobre quando executar blocos de código. Leia mais "),t("a",{attrs:{href:"https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks",target:"_blank",rel:"noopener noreferrer"}},[a._v("aqui"),t("OutboundLink")],1)])]),a._v(" "),a._m(15),a._v(" "),a._m(16),a._m(17),a._v(" "),a._m(18),a._v(" "),a._m(19),a._v(" "),a._m(20),a._m(21),a._v(" "),a._m(22),t("p",[a._v("Você deve ver a imagem mudar para uma imagem aleatória de um husky extraída da API Dog CEO.")]),a._v(" "),a._m(23),a._v(" "),a._m(24),a._v(" "),a._m(25),a._v(" "),a._m(26),a._v(" "),a._m(27),a._m(28),a._v(" "),a._m(29),a._v(" "),a._m(30),a._m(31),a._v(" "),a._m(32),a._v(" "),a._m(33),a._v(" "),a._m(34),a._m(35),a._v(" "),a._m(36),a._v(" "),a._m(37)])},e,!1,null,null,null);n.options.__file="ch3.md";s.default=n.exports}}]);