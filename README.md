Data 15/09/2021

 Olá, Espero que esteja tudo bem!

                                    INFORMAÇÕES E CONFIGURAÇÕES PARA USO
                                    ------------------------------------

1 - CONFIGURAÇÃO DO BANCO

 a) crie na raíz do projeto um arquivo .env e configure com as seguintes propriedades:

DB_USER=seu_usuario
DB_PWD=sua_senha
DB_NAME=nome_do_banco
DB_HOST=host_do_banco

 b) encontre na raíz do projeto a pasta script_sql , nela deixei um script sql para criação da tabela veículos e rode no seu banco de dados!

 CREATE TABLE veiculos(
    id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    placa varchar(20) NOT NULL, 
    chassi varchar(50) NOT NULL, 
    renavam varchar(100) NOT NULL, 
    modelo varchar(100) NOT NULL, 
    marca varchar(50) NOT NULL, 
    ano varchar(20) NOT NULL
)

2 - CONFIGURAÇÃO DO SERVIDOR

a) rode o comando npm install para instalar as dependências

OBS: a porta que o front-end irá consumir com a api é a 3000, se tudo correr certo, o front-end ira se comunicar perfeitamente com a api 





