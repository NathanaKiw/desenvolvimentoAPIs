const service =  require('./service')

async function main(){
    try {
        const result = await service.obterPessoas('a')

        for(let i=0; i <= result.results.length -1; i++){
            const pessoa = result.results[i]
        }
    } catch (error) {
        console.error('erro interno', error)
    }
}

main()