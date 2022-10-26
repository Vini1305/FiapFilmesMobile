import { createContext, useState } from "react";

export const FavoritesContext = createContext([])

export function FavoritesProvider({children}){
    const [quantidade, setQuantidade] = useState(0)
    const [favoritos, setFavoritos] = useState([])
    const [recentes, setRecentes] = useState([])
    const [titulo, setTitulo] = useState([])
    const [sinopse, setSinopse] = useState([])
    const [releaseDate, setReleaseDate] = useState([])
    const [voteCount, setVoteCount] = useState([])
    const [poster, setPoster] = useState([])

    function adicionarFavorito(filme){
        setQuantidade(quantidade+1)
        let novaLista = favoritos
        novaLista.push(filme)
        setFavoritos(novaLista)
        console.log(favoritos)
    }
    
    function adicionarRecente(filme){
        setTitulo(filme.title)
        setSinopse(filme.overview)
        setReleaseDate(filme.release_date)
        setVoteCount(filme.vote_average.toFixed(1))
        setPoster(filme.poster_path)

        let newList = recentes
        newList.push(filme)
        setRecentes(newList)
        const index = recentes.indexOf(filme)

        console.log(recentes)
    
        if (index > 4) { 
            recentes.shift();
          }        
    }

    function removerFavorito(filme){
        setQuantidade(quantidade-1)

        const index = favoritos.indexOf(filme)

        if (index > -1) { 
            favoritos.splice(index, 1);
          }
    }

    return (
        <FavoritesContext.Provider value={{titulo, sinopse, voteCount, releaseDate, poster, quantidade, adicionarFavorito, removerFavorito, adicionarRecente, favoritos, recentes}}>
            {children}
        </FavoritesContext.Provider>
    )
}