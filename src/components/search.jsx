import { useState } from "react"
import "../styles/root.module.css"
import * as style from "../styles/search.module.css"
import Button from "./button"
import API from '../data/API'

import { v4 as uuid } from 'uuid';
import pencil from "../assets/pencil-icon.svg"

function Card({name,cpf,phone}){

    return(
        <>
            <div className={style.search_card_container}>
                <div className={style.search_card_textContainer}>
                    <h4 className={style.search_card_name}>{name}</h4>
                    <div className={style.search_card_textContainerSub}>
                        <p className={style.search_card_text}>{`CPF: ${cpf}`}</p>
                        <p className={style.search_card_text}>{`Celular: ${phone}`}</p>
                    </div>
                </div>
                <button>
                    <img src={pencil} alt="edit-icon" />
                </button>
            </div>
            <div className={style.search_card_border}></div>
        </>
    )
}

function SearchList({data}){
    return(
        <>
            <div>
                {
                    data.map((user)=>{
                        return(
                            <Card
                                name={user.nome}
                                cpf={user.cpf}
                                phone={user.telefone}
                                key={uuid()}
                            />
                        )
                    })
                }
            </div>
            <div>
                <p className={style.search_list_text}>Total de pessoas cadastradas <span>{data.length}</span> <a href=""> Carregar mais?</a></p>
            </div>
        </>
    )
}

function SearchBar({setList}){
    const [input,setInput]=useState();

    const fetchData=()=>{

    }
    const handleFilter=async()=>{
        // try{
        //     //using the vite docs to import env variables
        //     const filterList=await fetch(`${import.meta.env.VITE_API}`,)
        //     setList(filterList)
        // }catch(err){
        //     console.log(err)
        //     setList('')
        // }
    }
    const handleClear=()=>{
        setInput('');
    }
    return(
        <section className={style.search_navbar_container}>
            <h3 className={style.search_navbar_title}>Pesquisa multipla</h3>
            <input 
                className={style.search_navbar_input}
                type="text"
                placeholder="Digite o nome ou o telefone da pessoa procurada"
                onChange={(e)=>{setInput(e.target.value)}}
                value={input}
            />
            <div className={style.search_navbar_buttonContainer}>
                <Button
                    style={style.search_navbar_buttonFilter}
                    action={handleFilter}
                >
                    Filtrar
                </Button>
                <Button
                    style={style.search_navbar_buttonClear}
                    action={handleClear}
                >
                    Limpar
                </Button>
            </div>
        </section>
    )
}

function Search(){
    const [list,setList]=useState(API.getPessoas());
    const [isFilter,setIsFilter]=useState(false);
    // handleFetchData=()=>{
        // async function handleFetchData(){
            //     try{
            //         const response= await fetch(`${import.meta.env.VITE_API}pessoas`,{
            //             // method:'GET',
            //             mode: 'no-cors',
            //             // headers:{
            //             //     "Content-Type": "application/json",
            //             //     Connection:'keep-alive',
            //             //     Accept:'*/*'
            //             // }
            //         });
            //         console.log(response.info)
            //         if (!response.ok) {
            //             throw new Error(`Error! status: ${response.status}`);
            //         }
            //         const data= await response.json();
            //         console.log(data)
            //         setData(data)
            //     }catch(err){
            //         console.log(err)
            //     }
            // }
    // }
    // useEffect(()=>{
    //     if(!isFilter){
    //         setList(API.getPessoas())
    //     }
    // },[])
    return(
        <section className={style.search_container}>
            <SearchBar setList={setList}/>
            <SearchList data={list}/>
        </section>
    )
}

export default Search