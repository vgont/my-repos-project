export default function Form({ children, action }){
    return(
        <form className="mt-7 flex flex-row" onSubmit={action}>
            {children}
        </form>
    )
} 