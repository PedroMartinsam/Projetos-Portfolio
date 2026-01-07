CREATE DATABASE oficina;

CREATE TABLE cliente (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE veiculo (
    id_veiculo SERIAL PRIMARY KEY,
    placa VARCHAR(10),
    modelo VARCHAR(50),
    ano INT,
    id_cliente INT REFERENCES cliente(id_cliente)
);

CREATE TABLE mecanico (
    id_mecanico SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    especialidade VARCHAR(50)
);

CREATE TABLE ordem_servico (
    id_os SERIAL PRIMARY KEY,
    data_abertura DATE,
    status VARCHAR(30),
    id_veiculo INT REFERENCES veiculo(id_veiculo),
    id_mecanico INT REFERENCES mecanico(id_mecanico)
);

CREATE TABLE servico (
    id_servico SERIAL PRIMARY KEY,
    descricao VARCHAR(100),
    valor DECIMAL(10,2)
);

CREATE TABLE os_servico (
    id_os INT REFERENCES ordem_servico(id_os),
    id_servico INT REFERENCES servico(id_servico),
    quantidade INT,
    PRIMARY KEY (id_os, id_servico)
);

CREATE TABLE peca (
    id_peca SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    valor_unitario DECIMAL(10,2)
);

CREATE TABLE os_peca (
    id_os INT REFERENCES ordem_servico(id_os),
    id_peca INT REFERENCES peca(id_peca),
    quantidade INT,
    PRIMARY KEY (id_os, id_peca)
);

CREATE TABLE pagamento (
    id_pagamento SERIAL PRIMARY KEY,
    id_os INT REFERENCES ordem_servico(id_os),
    forma_pagamento VARCHAR(30),
    valor_total DECIMAL(10,2),
    data_pagamento DATE
);
INSERT INTO cliente (nome, telefone, email)
VALUES ('João Silva', '11999999999', 'joao@email.com');

INSERT INTO veiculo (placa, modelo, ano, id_cliente)
VALUES ('ABC-1234', 'Gol', 2015, 1);

INSERT INTO mecanico (nome, especialidade)
VALUES ('Carlos', 'Motor');

INSERT INTO servico (descricao, valor)
VALUES ('Troca de óleo', 150.00);

INSERT INTO peca (nome, valor_unitario)
VALUES ('Filtro de óleo', 50.00);


SELECT * FROM cliente;

SELECT * FROM ordem_servico
WHERE status = 'Aberta';


SELECT 
    os.id_os,
    SUM(op.quantidade * p.valor_unitario) AS total_pecas
FROM os_peca op
JOIN peca p ON op.id_peca = p.id_peca
JOIN ordem_servico os ON op.id_os = os.id_os
GROUP BY os.id_os;

SELECT descricao, valor
FROM servico
ORDER BY valor DESC;

SELECT 
    op.id_os,
    SUM(op.quantidade * p.valor_unitario) AS total
FROM os_peca op
JOIN peca p ON op.id_peca = p.id_peca
GROUP BY op.id_os
HAVING SUM(op.quantidade * p.valor_unitario) > 200;

SELECT 
    c.nome AS cliente,
    v.modelo,
    os.status,
    os.data_abertura
FROM cliente c
JOIN veiculo v ON c.id_cliente = v.id_cliente
JOIN ordem_servico os ON v.id_veiculo = os.id_veiculo;


