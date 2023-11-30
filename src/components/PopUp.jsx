export default function PopUp({text}){
    return(
        <a href="#" className="text-gray-400 bg-white shadow p-4 flex items-center gap-5 rounded-md">
            <i className="fa-solid fa-circle-info"></i>
            <p className="text-xs">{text}</p>
            <i className="fa-solid fa-chevron-left rotate-180"></i>
        </a>
    )
}