
import "../styles/root.module.css"
import * as style from "../styles/home.module.css"
import Search from "../components/search";

function Home(){
    return(
        <>
            <header>
                <h2 className={style.home_text_title}>ID Brasil - Listagem Pessoas</h2>
            </header>
            <main>
                <Search/>
            </main>
        </>
    )   
}

export default Home;