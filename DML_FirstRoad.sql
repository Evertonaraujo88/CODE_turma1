
USE FirstRoad;


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
    "SpringBoot",
    "Aprendendo SpringBoot do zero ao avançado!!",
    "https://www.udemy.com.br/",
    "00:17:00"
    );
SELECT BIN_TO_UUID(Id_conteudo), tituloConteudo, descricaoConteudo, link, tempoConteudo FROM tb_conteudo;

 INSERT INTO tb_usuarios VALUES(
	UUID_TO_BIN(UUID()),
    "Lucas Lessa",
    "lessa@vw.com",
    "senai",
    "789456",
    "1994-05-19",
    UUID_TO_BIN("6586a940-8017-11ee-93e3-6018955666f8"),/*tipoUsuario*/
    UUID_TO_BIN("71a1f4ce-8017-11ee-93e3-6018955666f8"),/*Unidade*/
    UUID_TO_BIN("88eca334-8017-11ee-93e3-6018955666f8")/*cargo*/    
);

select BIN_TO_UUID(Id_usuario), nomeUsuario from tb_Usuarios;

INSERT INTO tb_UnidadesOrganizacionais VALUES(
	UUID_TO_BIN(UUID()),
    "TI",
    UUID_TO_BIN("d8873aa7-8017-11ee-93e3-6018955666f8"),
    UUID_TO_BIN("71a1f4ce-8017-11ee-93e3-6018955666f8")
);    
select BIN_TO_UUID(Id_uo), nomeDepartament from tb_UnidadesOrganizacionais;

INSERT INTO tb_Trilha VALUES(
	UUID_TO_BIN(UUID()),
    "Trilha Dev iniciante",
    "Esta trilha contem passos iniciais para um dev iniciante",
    "",
    "",
    UUID_TO_BIN("88eca334-8017-11ee-93e3-6018955666f8"),/*Id_cargo*/
    UUID_TO_BIN("2aff301d-801a-11ee-93e3-6018955666f8"),/*Id_uo*/
    UUID_TO_BIN("a9411e4a-8018-11ee-93e3-6018955666f8")/*Id_conteudo*/
);
SELECT BIN_TO_UUID(Id_trilha), tituloTrilha, descricaoTrilha, tempoTrilha, situacao, (Id_cargo), (Id_uo), (Id_conteudo) from tb_Trilha;