export default function SubmitButton({ children, type, loading }){

    return(
        <button type={type} disabled={loading} className="border-0 bg-[#0d2636] rounded ml-2 px-4 flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-50">
            {children}
        </button>
    )
}