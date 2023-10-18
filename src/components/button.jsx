function Button({style,action,children}){
    return(
        <button className={style} onClick={action}>
            {children}
        </button>
    )
}

export default Button