// Promises com async/await
//importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                id:'1',
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() =>{
            return resolve({
                telefone:'23432345',
                ddd:'11'
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario,callback){
        setTimeout(()=>{
            return callback(null,{
                rua:'rua dos bobos',
                numero:'0'
            })
        },2000)    
}

//1o passo adicionar a palavra async na função -> automaticamente ela retornará uma promise (Lembrar de chamar a função main)
main()
async function main(){
try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)

    const resultado = await Promise.all([
        obterTelefone(usuario.id),
        obterEnderecoAsync(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd}) ${telefone.telefone},
        Endereco: ${endereco.rua}, ${endereco.numero} 
    `)

    console.timeEnd('medida-promise')
} catch (error) {
    console.error('DEU RUIM', error)
}
}

