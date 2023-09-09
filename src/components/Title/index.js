export default function Title({ title, icon }){
    return (
        <div>
            <h1 className="text-xl items-center font-semibold flex flex-raw">
                {icon}
                {title}
            </h1>
        </div>
    )
}