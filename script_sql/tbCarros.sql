CREATE TABLE veiculos(
    id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    placa varchar(20) NOT NULL, 
    chassi varchar(50) NOT NULL, 
    renavam varchar(100) NOT NULL, 
    modelo varchar(100) NOT NULL, 
    marca varchar(50) NOT NULL, 
    ano varchar(20) NOT NULL
)