import { useState } from "react"
import "../styles/root.module.css"
import * as style from "../styles/search.module.css"
import Button from "./button"
import API from '../data/API'
import { createPortal } from 'react-dom';


import { v4 as uuid } from 'uuid';
import pencil from "../assets/pencil-icon.svg"
import NoResult from "./noResult"
import Modal from "./modal"

function Card({user}){
    const [showEditModal, setShowEditModal] = useState(false);
    const handleEdit=()=>{
        setShowEditModal(true)
    }
    return(
        <>
            <div className={style.search_card_container}>
                <div className={style.search_card_textContainer}>
                    <h4 className={style.search_card_name}>{user.nome}</h4>
                    <div className={style.search_card_textContainerSub}>
                        <p className={style.search_card_text}>{`CPF: ${user.cpf.slice(0,3)}.${user.cpf.slice(3,6)}.${user.cpf.slice(6,9)}-${user.cpf.slice(9,11)}`}</p>
                        <p className={style.search_card_text}>{`Celular: (${user.telefone.slice(0,2)})${user.telefone.slice(2,7)}-${user.telefone.slice(7,11)}`}</p>
                    </div>
                </div>
                <Button
                    action={handleEdit}
                >
                    <img src={pencil} alt="edit-icon" />
                </Button>
            </div>
            <div className={style.search_card_border}></div>
            {
                showEditModal && createPortal(
                    <Modal user={user} closeModal={()=>{setShowEditModal(false)}}>Editar Pessoa</Modal>,
                    document.getElementById('root')
                )
            }
        </>
    )
}

function SearchList({data,isFilter}){

    const [toshow,setToShow]=useState(data.slice(0,4))

    const handleClick=(e)=>{
        e.preventDefault()
        let num=toshow.length+4
        setToShow(data.slice(0,num))
    }
    return(
        <>
            <div>
                {
                    !data.length>0?<NoResult/>:(isFilter?data.map((user)=>{
                        return(
                            <Card
                                user={user}
                                key={uuid()}
                            />
                        )
                    }):toshow.map((user)=>{
                        return(
                            <Card
                                user={user}
                                key={uuid()}
                            />
                        )
                    }))
                }
            </div>
            <div>
                <p className={style.search_list_text}
                >
                    Total de pessoas cadastradas <span>{API.getPessoas().length}</span> <a href="" onClick={handleClick}>  Carregar mais?</a>
                </p>
            </div>
        </>
    )
}

function SearchBar({setList,setIsFilter}){
    const [input,setInput]=useState('');

    const handleInput=(e)=>{
        setInput(e.target.value)
    }
    const handleFilter=()=>{
        const allPessoas=API.getPessoas();
        //retirando os caracteres especiais do telefone ou nome de usuario
        const cleanInput=input.replace(/[^a-zA-Z0-9 ]/g, '');
        
        const filterID=allPessoas.filter((user)=>{
            return user.nome===cleanInput||user.telefone===cleanInput
        })

        setList(filterID)
        setIsFilter(true)
    }
    const handleClear=()=>{
        setInput('');
        setList(API.getPessoas())
        setIsFilter(false)
    }
    return(
        <section className={style.search_navbar_container}>
            <h3 className={style.search_navbar_title}>Pesquisa multipla</h3>
            <input 
                className={style.search_navbar_input}
                type="text"
                placeholder="Digite o nome ou o telefone da pessoa procurada"
                onChange={handleInput}
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
    const [isFilter,setIsFilter]=useState(false)

    return(
        <section className={style.search_container}>
            <SearchBar setList={setList} setIsFilter={setIsFilter}/>
            <SearchList data={list} isFilter={isFilter}/>
        </section>
    )
}

export default Search