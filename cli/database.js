const {
 readFile,
 writeFile
} = require('fs')

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
// Outra forma de obter dados do json
// const dadosJson = require('./herois.json')

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    async ObterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')

        return JSON.parse(arquivo.toString())
    }
    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }
    async listar(id){
        const dados = await this.ObterDadosArquivo()

        const dadosFiltrados = dados.filter(item =>(id ? (item.id === id) : true))

        return dadosFiltrados
    }
    async cadastrar(heroi){
        const dados = await this.ObterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroiComId = {
            id,
            ...heroi //Concatena um objeto
        }
        const dadosFinal = [
            ...dados,
            heroiComId
        ]
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }
}

module.exports = new Database()