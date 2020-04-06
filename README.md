Os pré-requisitos para upar os sistemas localmente são :

1)      Nodejs instalado ;

2)      Yarn instalado;

3)      Mongodb instalado

 

Após a instalação dos componentes  siga os passos a baixo:

 

1)      Baixe o código da apirest node:  https://github.com/rafael784/ApiNode, após o download, perceba que a pasta nodeModules já compõe o projeto, por tanto não será necessário importa-la (via yarn install).

 

2)      Vá no diretório ApiNode-master\src com o CMD e digite node index.js. Caso haja um erro você deverá instalar o  “cors” (npm install cors) que é uma extensão para permitir que os browsers consumam recursos de uma api independente.

 

3)      Após a api já funcionando, baixe o código do react-front (https://github.com/rafael784/ReactFront  ) pelo github. Vá na pasta raiz e digite yarn install. Observe que a pasta node módulos foi importada.

 

4)      Por fim, abra o CMD na pasta raiz (ReactFront-Master) e digite yarn start
