// let idade = 5;
// console.log(idade)
// let altura = 190;
// console.log(altura)
// const valorIngressoAdulto = 20;
// console.log(valorIngressoAdulto)
// let nome = 'Rafael 09ewq9a90ud'; // String literal
// let idade = 23.5; // Number literal
// let aprovado = true; // Boolean
// let sobrenome ; // Undefined
// let corSelecionada = null; // Objeto null
// console.log(typeof sobrenome)

// let pessoa = {
//     nome: 'Felipe',
//     idade: 25,
//     aprovado: true,
//     sobrenome: 'Rodrigues'
// };
// console.log(pessoa)
// console.log(pessoa.nome + " " + pessoa.sobrenome)

// let lista = [26,true,46,'oi',12]
// console.log(lista)
// console.log(lista[3])
// console.log(lista.length)

// let corSite = "azul";
// function resetaCor(cor, tonalidade){
//     corSite = cor + ' ' + tonalidade;
// };
// console.log(corSite)
// resetaCor("vermelho", "escuro")
// console.log(corSite)

// function MultiplicaPorDois(valor){
    // return valor * 2;
// }
// console.log(MultiplicaPorDois(3))
// let resultado = MultiplicaPorDois(5)
// console.log(resultado)

// let pontos = 101;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo)

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar)

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar)

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// let candidatoRecusado = !podeAplicar;
// console.log(candidatoRecusado)

// let a = 'vermelho';
// let b = 'azul';
// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

// let hora = 19;
// if (hora > 6 && hora < 12) {
//     console.log('Bom dia')
// }
// else if (hora > 12 && hora < 18) {
//     console.log('Boa tarde')
// }
// else {
//     console.log('Boa noite')
// }

// let permissao = 'diretor';
// switch (permissao){
//     case 'comum':
//         console.log('Usuário comum');
//         break;
//     case 'gerente':
//         console.log('Usuário gerente');
//         break;
//     case 'diretor':
//         console.log('Usuário diretor');
//         break;
//     default:
//         console.log('Usuário não reconhecido'); 
// }

// for (let i = 1; i <= 5; i++){
//     if (i % 2 !== 0){
//         console.log('estou aprendendo', i)
//     }
// }

// let i = 1;
// while (i <= 5) {
//     if (i % 2 !== 0){
//         console.log('estou aprendendo', i)
//     }
//     i++;
// }

// let i = 0;
// do {
//     console.log('digitando', i);
//     i++;
// } while (i < 10)

// const pessoa = {
//     nome: 'Rafael',
//     idade: 24
// };
// for (let chave in pessoa) {
//     console.log(chave);
// }

// const cores = ['verde', 'azul', 'preto'];
// for (let indice in cores) {
//     console.log(indice, cores[indice])
// }

// const cores = ['verde', 'azul', 'preto'];
// for (let cor of cores) {
//     console.log(cor)
// }

// let valorMaior = maiorNumero(9, 8);
// console.log(valorMaior);
// function maiorNumero (valor1, valor2) {
//     return valor1 > valor2 ? valor1 : valor2;
// }

// const resultado = fizzBuzz(11);
// console.log(resultado);
// function fizzBuzz(entrada){
//     if (typeof entrada !== 'number')
//         return 'Não é um número';
//     if ((entrada % 3 === 0) && (entrada % 5 === 0))
//         return 'FizzBuzz';
//     if (entrada % 3 === 0)
//         return 'Fizz';
//     if (entrada % 5 === 0)
//         return 'Buzz';
//     return entrada;
// }

// verificarVelocidade(90);
// function verificarVelocidade(velocidade) {
//     const velocidadeMaxima = 70;
//     const kmPorPonto = 5
//     if (velocidade <= velocidadeMaxima)
//         console.log('Ok');
//     else {
//         const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
//         if (pontos >= 12)
//             console.log('Carteira suspensa');
//         else
//             console.log('Pontos', pontos);
//     }
// }

// exibirTipo(10);
// function exibirTipo(limite) {
//     for (let i = 0; i <= limite; i++) {
//         if (i % 2 === 0)
//             console.log(i, 'Par')
//         else
//             console.log(i, 'Impar')
//     }
// }

// const filme = {
//     titulo: 'Poderoso Chefão',
//     ano: 1980,
//     diretor: 'Coppola',
//     personagem: 'Don Corleone'
// }
// exibirPropriedades(filme);
// function exibirPropriedades(obj) {
//     for (prop in obj)
//         if (typeof obj[prop] === 'string')
//             console.log(prop, obj[prop]);
// }

// somar(15);
// function somar(limite) {
//     let m3 = 0;
//     let m5 = 0;
//     for (let i = 0; i <= limite; i++){
//         if (i % 3 === 0)
//             m3 += i;
//         if (i % 5 === 0)
//             m5 += i;
//     }
//     console.log(m3 + m5);
// }

// const array = [90, 90, 90];
// console.log(media(array));
// function media(notas) {
//     const media = calcularMedia(notas)
//     if (media < 59) return 'F';
//     if (media < 69) return 'D';
//     if (media < 79) return 'C';
//     if (media < 89) return 'B';
//     return 'A';
// }
// function calcularMedia(array) {
//     let soma = 0;
//     for (let valor of array) {
//         soma += valor;
//     }
//     return soma / (array.length);
// }

// exibirAsteriscos(10);
// function exibirAsteriscos(linhas) {
//     let padrao = '';
//     for (let linha = 1; linha <= linhas; linha++) {
//         padrao += '*';
//         console.log(padrao);
//     }
// }

// exibirNumerosPrimos(15);
// function exibirNumerosPrimos(limite) {
//     for (let numero = 2; numero <= limite; numero++) {
        
//         if (numerosPrimos(numero)) console.log(numero)
//     }
// }
// function numerosPrimos(numero) {
//     for (let divisor = 2; divisor < numero; divisor++) {
//         if (numero % divisor === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

// const celular = {
//     marca: 'ASUS',
//     tamanhoTela: 6,
//     capacidadeBateria: 5000,
//     ligar: function() {
//         console.log("Fazendo ligação...")
//     }
// }
// function criarCelular(marca, tamanhoTela, capacidadeBateria) {
//     return {
//         marca,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar() {
//             console.log("Fazendo ligação...")
//         }
//     }
// }
// const celular1 = criarCelular('Zenfone', 5.5, 5000);
// console.log(celular1);

// function Celular(marca, tamanhoTela, capacidadeBateria) {
//     this.marca = marca,
//     this.tamanhoTela = tamanhoTela,
//     this.capacidadeBateria = capacidadeBateria,
//     this.ligar = function() {
//         console.log('Fazendo ligação....');
//     }
// }
// const celular = new Celular('asus', 5.8, 5000);
// console.log(celular);

// const mouse = {
//     cor: 'verde',
//     marca: 'razor'
// }
// mouse.velocidade = 5000;
// mouse.trocarDPI = function () {
//     console.log('mudando DPI');
// }
// delete mouse.velocidade;
// delete mouse.trocarDPI;
// console.log(mouse);

// COPIAR OBJETO
// const celular = {
//     marca: 'ASUS',
//     tamanhoTela: 6,
//     capacidadeBateria: 5000,
//     ligar: function() {
//         console.log("Fazendo ligação...")
//     }
// }
// const novoObjeto1 = Object.assign({
//     bateria: 5000
// }, celular);
// console.log(novoObjeto1);
// const novoObjeto2 = {...celular};
// console.log(novoObjeto2);

// console.log(Math.random());
// console.log(Math.max(1, 2, 8, 4));
// console.log(Math.min(3, 2, 8, 4));

// const texto = 'meu primeiro texto';
// console.log(texto[5])
// console.log(texto.includes('meu'))
// console.log(texto.startsWith('meu'))
// console.log(texto.endsWith('texto'))
// console.log(texto.replace('texto', 'textão'))
// console.log(texto.split(' '))

// const mensagem = 'oi,\n essa é minha \'primeira\' mensagem';
// console.log(mensagem)
// const outra = `oi,
// essa é minha 'primeira' mensagem`
// console.log(outra)

// const nome = 'Rafael'
// const email =
// `Olá ${nome} ${2+2}

// Seu cadastro foi realizado com sucesso.

// Obrigado!!!`
// console.log(email)

// const data1 = new Date();
// const data2 = new Date('March 06 2019 09:30');
// const data3 = new Date(2019, 02, 06, 9, 30);
// console.log(data3.getDay())

// let postagem = {
//     titulo: 'a',
//     mensagem: 'b',
//     autor: 'c',
//     visualizacoes: 10,
//     comentarios: [
//         {autor: 'a', mensagem: 'b'},
//         {autor: 'a', mensagem: 'b'},
//     ],
//     estaAoVivo: true
// }
// console.log(postagem)

// function Postagem(titulo, mensagem, autor) {
//     this.titulo = titulo,
//     this.mensagem = mensagem,
//     this.autor = autor,
//     this.visualizacoes = 0,
//     this.comentarios = [],
//     this.estaAoVivo = false
// }
// let postagem = new Postagem('a', 'b', 'c');
// console.log(postagem);

// const numeros = [1, 2, 3];
// numeros.unshift(0);
// console.log(numeros)
// numeros.splice(1, 0, 'a');
// console.log(numeros)
// numeros.push(5);
// console.log(numeros)

// const numeros = [1, 2, 3, 1, 4];
// console.log(numeros.indexOf(3));
// console.log(numeros.lastIndexOf(1));

// const marcas = [
//     {id:1, nome:'a'},
//     {id:2, nome:'b'},
// ]
// console.log(marcas.find(function(marca){
//     return marca.nome === 'a';
// }));

// const marcas = [
//     {id:1, nome:'a'},
//     {id:2, nome:'b'},
// ]
// console.log(marcas.find(marca => marca.nome === 'a'));

// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros);
// const ultimo = numeros.pop();
// console.log(ultimo);
// console.log(numeros);
// const primeiro = numeros.shift();
// console.log(primeiro);
// console.log(numeros);
// const meio = numeros.splice(2, 1);
// console.log(meio);
// console.log(numeros);

// let numeros = [1, 2, 3, 4, 5, 6];
// numeros = [];
// console.log(numeros);

// let numeros = [1, 2, 3, 4, 5, 6];
// numeros.length = 0;
// console.log(numeros);

// let numeros = [1, 2, 3, 4, 5, 6];
// numeros.splice(0, numeros.length);
// console.log(numeros);

// const primeiro = [1, 2, 3];
// const segundo = [4, 5, 6];
// const combinado = primeiro.concat(segundo);
// console.log(combinado);
// const cortado = combinado.slice(1, 3);
// console.log(cortado);

// const primeiro = [1, 2, 3];
// const segundo = [4, 5, 6];
// const combinado = [...primeiro, 'a', ...segundo];
// console.log(combinado);
// const clonado = [...combinado];
// console.log(clonado);

// const numeros = [1, 2, 3, 4, 5];
// numeros.forEach((numero, indice) => console.log(numero, indice));

// const numeros = [1, 2, 3, 4, 5, 6];
// const combinado = numeros.join('-');
// console.log(combinado);
// const frase = 'olá bem vindo ao curso';
// const separado = frase.split(' ');
// console.log(separado);
// console.log(separado.join('-'));

// let cor = prompt('olá, qual sua cor preferida?');
// if (cor === 'Azul') {
//     alert('Isso aí')
// }

function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosFelipe = ['Silvana', 'Geraldo', 'Rafael']
    if (ConvidadosFelipe.includes(NomeConvidado)) {
        document.getElementById('permissaoDeEntrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}