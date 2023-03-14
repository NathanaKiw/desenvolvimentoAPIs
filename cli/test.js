const {
    deepStrictEqual
} = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
    nome:'Flash',
    poder:'Speed',
    id:1
}

describe('Suite de manipulação de Herois', () =>{
    it('deve pesquisar um herois usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR

        ok(null, expected)
    })

    // it('deve cadastrar um heroi, usando arquivos', async()=>{
    //     const expected = {}
    //     ok(null,expected)
    // })
})