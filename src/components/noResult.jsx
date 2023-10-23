import * as style from "../styles/search.module.css"

function NoResult(){
    return(
        <>
            <p className={style.search_list_text}>Nenum resultado encontrado para a consulta</p>
        </>
    )
}

export default NoResult;