export default function SubmitButton({ children, type }){
    return(
        <button type={type} className="border-0 bg-[#0d2636] rounded ml-2 px-4 flex justify-center items-center">
            {children}
        </button>
    )
}