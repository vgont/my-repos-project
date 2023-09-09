export default function Container( {children }){
    return(
        <div className="max-w-screen-sm bg-white rounded p-8 my-5 mx-auto shadow-2xl">
            {children}
        </div>
    )
}