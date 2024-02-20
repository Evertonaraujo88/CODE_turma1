CREATE DATABASE FirstRoad;

drop database firstroad;
USE FirstRoad;

CREATE TABLE tb_TiposUsuario(
	Id_tipoUsuario BINARY(16) NOT NULL,
	tituloTipoUsuario VARCHAR(50) NOT NULL ,
    
    PRIMARY KEY(Id_tipoUsuario)
);

CREATE TABLE tb_Unidades(
	Id_unidade BINARY(16) NOT NULL,
	razaoSocial VARCHAR(50) NOT NULL,
    cnpj VARCHAR(14) NOT NULL UNIQUE,
    logradouro VARCHAR(200) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    bairro VARCHAR (200) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    
    PRIMARY KEY(Id_unidade)
);

CREATE TABLE tb_Cargo(
	Id_cargo BINARY(16) NOT NULL,
	nomeCargo VARCHAR(50) NOT NULL,
    
    PRIMARY KEY(Id_cargo)
);

CREATE TABLE tb_Conteudo(
	Id_conteudo BINARY(16) NOT NULL,
	tituloConteudo VARCHAR(50) NOT NULL,
    descricaoCOnteudo VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    tempoConteudo time NOT NULL,
    
    PRIMARY KEY(Id_conteudo)
);


CREATE TABLE tb_Usuarios(
	Id_usuario BINARY(16) NOT NULL,
    nomeUsuario VARCHAR(255) NOT NULL,
    email VARCHAR (100) NOT NULL UNIQUE,
    senha VARCHAR (60) NOT NULL,
    nif INT NOT NULL UNIQUE,
    dataNascimento DATE NOT NULL,
    
    Id_tipoUsuario BINARY(16)NOT NULL,
	Id_unidade BINARY(16)NOT NULL,
	Id_cargo BINARY(16) NOT NULL,
    
	PRIMARY KEY(Id_usuario),
    FOREIGN KEY(Id_tipoUsuario) REFERENCES tb_TiposUsuario(Id_tipoUsuario),
    FOREIGN KEY(Id_unidade) REFERENCES tb_Unidades(Id_unidade),
    FOREIGN KEY(Id_cargo) REFERENCES tb_Cargo(Id_cargo)
);

CREATE TABLE tb_UnidadesOrganizacionais(
	Id_uo BINARY(16) NOT NULL,
    nomeDepartamento VARCHAR (200)NOT NULL,
    
    Id_usuario BINARY(16) NOT NULL,
	Id_unidade BINARY(16) NOT NULL,
    
	PRIMARY KEY(Id_uo),
    FOREIGN KEY(Id_usuario) REFERENCES tb_usuarios(Id_usuario),
    FOREIGN KEY(Id_unidade) REFERENCES tb_unidades(Id_unidade)
);
 
CREATE TABLE tb_Trilha(
	Id_trilha BINARY(16) NOT NULL,
    tituloTrilha VARCHAR (100) NOT NULL,
    descricaoTrilha VARCHAR (255) NOT NULL,
    tempoTrilha TIME NOT NULL,
    situacao VARCHAR (150) NOT NULL,
    
    Id_cargo BINARY(16) NOT NULL,
	Id_uo BINARY(16) NOT NULL,
    Id_conteudo BINARY(16) NOT NULL,
    
	PRIMARY KEY(Id_trilha),
    FOREIGN KEY(Id_cargo) REFERENCES tb_cargo(Id_cargo),
    FOREIGN KEY(Id_uo) REFERENCES tb_UnidadesOrganizacionais(Id_uo),
    FOREIGN KEY(Id_conteudo) REFERENCES tb_Conteudo(Id_conteudo)
);