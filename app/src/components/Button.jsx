function Button({doTask, classTag, children}){
    return (
        <button className={classTag} onClick={doTask} >{children}</button>
    )
}

export default Button;