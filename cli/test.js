const {
    deepStrictEqual
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome:'Flash',
    poder:'Speed',
    id:1
}

describe('Suite de manipulação de Herois', () =>{
    beforeEach(async () =>{
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })
    it('deve pesquisar um herois usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR

        const [resultado] = await database.listar(expected.id)


        deepStrictEqual(resultado, expected)
    })

    it('deve cadastrar um heroi, usando arquivos', async()=>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepStrictEqual(actual,expected)
    })
})