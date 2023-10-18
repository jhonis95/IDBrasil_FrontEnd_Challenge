import { useState } from "react"
import "../styles/root.module.css"
import * as style from "../styles/search.module.css"
import Button from "./button"
import NoResult from "./noResult"
import API from '../data/API'

import { v4 as uuid } from 'uuid';
import { useEffect } from "react";
import pencil from "../assets/pencil-icon.svg"

function Card({name,cpf,phone}){

    return(
        <div>
            <div>
                <h4>{name}</h4>
                <p>{cpf}</p>
                <p>{phone}</p>
            </div>
            <img src={pencil} alt="edit-icon" />
        </div>
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
                {
                    // data==undefined?<NoResult/>:data.map((user)=>{
                    //     <Card
                    //         name={user.name}
                    //         cpf={user.cpf}
                    //         phone={user.telefone}
                    //         key={uuid()}
                    //     />
                    // })
                }
            </div>
            <div>
                <p>Total de pessoas cadastradas <span>{'numero de pesssoas'}</span> Carregar mais?</p>
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
            <footer>© 2023 Powered by ID Brasil.</footer>
        </section>
    )
}

export default Search