// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John"; 

//Resposta 1

const funcionario = {
    código: 10,
    nome: 'João'
};

//Resposta 2

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'João'
};

//Resposta 3 e 4
 
interface Funcionario {
    codigo: Number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10,
funcionarioObj.nome ='João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}