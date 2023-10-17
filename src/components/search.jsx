import { useState } from "react"

function SearchList(){
    return(
        <>
            <div>
                <p>Total de pessoas cadastradas <span>{'numero de pesssoas'}</span></p>
                <p>Carregar mais?</p>
            </div>
        </>
    )
}

function SearchBar(){
    const {input,setInput}=useState;
    const {list,setList}=useState;
    
    const fetchData=()=>{

    }
    return(
        <>
            <p>Pesquisa multipla</p>
            <input type="text" name="" id="" placeholder="Digite o nome ou o telefone da pessoa procurada"/>
            <div>
                <button>Filtrar</button>
                <button>Limpar</button>
            </div>
        </>
    )
}

function Search(){
    return(
        <>
            <SearchBar/>
            <SearchList data/>
            <footer>© 2023 Powered by ID Brasil.</footer>
        </>
    )
}

export default Search