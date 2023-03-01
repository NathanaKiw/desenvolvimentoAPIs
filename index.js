function obterUsuario(){
    // quando der algum problema -> reject(ERRO)
    // quando der sucesso -> resolve
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
            return resolve(null,{
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

const usuarioPromise = obterUsuario()

usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
    })
    .then(function (resultado){
        console.log('Resultado', resultado)
    })
    .catch(function (error){
        console.log('DEU RUIM', error)
    })

// obterUsuario(function resolverUsuario(error, usuario){
//     // null || "" || 0 === false
//     if(error){
//         console.error('DEU RUIM em USUARIO', error)
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('DEU RUIM em TELEFONE', error1)
//             return
//         }
//         obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
//             if(error2){
//                 console.error('DEU RUIM em ENDERECO', error2)
//             }
//             console.log(`
//             Nome: ${usuario.nome},
//             Endereço: ${endereco.rua},${endereco.numero},
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })  
// })
