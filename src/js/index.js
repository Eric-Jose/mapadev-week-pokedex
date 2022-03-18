/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostra o cartao correspondednte ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elemntos
1 -listagem
2 -cartao do pokemon

precisamos criar duas variaveis no JS Para Trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokomons

remover a classe aberto so do cartao que esta aberto 
- ao clicar em um pokemon da listagem 
pegamos o id idetificado unico desse pokemon pra saber qual cartao mostrar 
-remover a classe ativo que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variaveis no JS para trabalhar com os elementios da tela 

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const tpokemnsCard = document.querySelectorAll('cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

    pokemon.addEventListener('click', () => {
        //remover a classe aberto so do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //-remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //-adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
    })
})