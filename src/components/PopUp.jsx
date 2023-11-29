export default function PopUp(){
    return(
        <a href="#" className="fixed bottom-32 left-2 text-gray-400 bg-white shadow-lg p-4 flex items-center gap-5 mx-4">
            <i className="fa-solid fa-circle-info"></i>
            <p className="text-xs">Consultez les dernières recommandations de voyage relatives au COVID-19</p>
            <i className="fa-solid fa-chevron-left rotate-180"></i>
        </a>
    )
}