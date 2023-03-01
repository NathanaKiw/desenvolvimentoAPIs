function obterUsuario(callback){
    setTimeout(() => {
        return callback(null,{
            id:'1',
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario,callback){
    setTimeout(() =>{
        return callback(null,{
            telefone:'23432345',
            ddd:'11'
        })
    }, 2000)
}

function obterEndereco(idUsuario,callback){
    setTimeout(()=>{
        return callback(null,{
            rua:'rua dos bobos',
            numero:'0'
        })
    },2000)
}

obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || 0 === false
    if(error){
        console.error('DEU RUIM em USUARIO', error)
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('DEU RUIM em TELEFONE', error1)
            return
        }
        obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
            if(error2){
                console.error('DEU RUIM em ENDERECO', error2)
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua},${endereco.numero},
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })  
})
