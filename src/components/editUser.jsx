import * as addUserCSS from "../styles/addUser.module.css"

function EditUser(){

    return(
        <>
            <section className={addUserCSS.modal_container}>
                <div className={addUserCSS.modal}>
                </div>
            </section>
        </>
    )
}

export default EditUser;