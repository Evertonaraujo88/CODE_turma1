CREATE DATABASE FirstRoad;


INSERT INTO tb_tiposusuario VALUES(
	UUID_TO_BIN(UUID()),
    "AdmMaster"
    );
INSERT INTO tb_tiposusuario VALUES(
	UUID_TO_BIN(UUID()),
    "Gestor"
    );
INSERT INTO tb_tiposusuario VALUES(
	UUID_TO_BIN(UUID()),
    "Colaborador"
    );
    
SELECT *FROM tb_tiposusuario;
SELECT BIN_TO_UUID(Id_tipoUsuario) ,tituloTipoUsuario FROM tb_tiposusuario;
 
 INSERT INTO tb_unidades VALUES(
	UUID_TO_BIN(UUID()),
    "VolksWagem Brasil",
    "12345678912345",
    "Rua Niteroi",
    "180",
    "Planta São Caetano",
    "Centro",
    "123456789"
    );
    
    SELECT BIN_TO_UUID(Id_unidade), razaoSocial, cnpj, logradouro, numero, complemento, bairro, cep FROM tb_unidades;
    
    INSERT INTO tb_cargo VALUES(
	UUID_TO_BIN(UUID()),
    "Diretor"
    );
       INSERT INTO tb_cargo VALUES(
	UUID_TO_BIN(UUID()),
    "Gerente"
    );
    
       INSERT INTO tb_cargo VALUES(
	UUID_TO_BIN(UUID()),
    "Coordenador"
    );
       INSERT INTO tb_cargo VALUES(
	UUID_TO_BIN(UUID()),
    "Desenvolvedor"
    );
SELECT BIN_TO_UUID(Id_cargo), nomeCargo FROM tb_cargo;

 INSERT INTO tb_conteudo VALUES(
	UUID_TO_BIN(UUID()),
    "Padrão de BEM",
    "Esse conteúdo trata-se de um treinamento para boas pricaticas e processo de nomenclatura de código",
    "https://www.alura.com.br/",
    "00:15:00"
    );
SELECT BIN_TO_UUID(Id_conteudo), tituloConteudo, descricaoConteudo, link, tempoConteudo FROM tb_conteudo;

 INSERT INTO tb_usuarios VALUES(
	UUID_TO_BIN(UUID()),
    "Everton Araujo",
    "everton@vw.com",
    "senai",
    "123456",
    "1988-04-04",
    "6d488372-7910-11ee-8704-6018955666f8",
    "bdadc69c-7915-11ee-8704-6018955666f8",
    "3f403f12-7916-11ee-8704-6018955666f8"
    );

