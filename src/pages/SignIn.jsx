import PopUp from "../components/PopUp";
import {useState} from "react";

export default function SignIn(){
    const [isVisible, setIsVisible] = useState(false)
    const [isAccepted, setIsAccepted] = useState(false)
    const handleVisible = () => {
        setIsVisible(!isVisible)
    }
    const handleAccepted = () =>{
        setIsAccepted(!isAccepted)
    }
    return(
        <div className="py-2 px-5 flex flex-col gap-3">
            <h2 className="text-xl my-3 text-center font-semibold">Créer un compte</h2>
            <form className="py-4 px-4 bg-teal-800 text-white rounded-lg flex flex-col gap-4">
                <input type="email" name="email" className="bg-white rounded-lg p-2 w-full text-black z-0" placeholder="Adresse mail..."/>
                <div>
                    <input type={`${isVisible ? 'text' : 'password'}`}
                           className="bg-white rounded-lg p-2 w-full text-black relative"
                           placeholder="Mot de passe..."
                    />
                    <div className="flex align-middle mt-2">
                        <input type="checkbox" onClick={handleVisible} className="checkbox"/>
                        <span  className="text-xs mx-2">Voir le mot de passe</span>
                    </div>
                </div>
                <button type="submit" className={`text-white bg-orange-500 p-2 rounded-lg ${!isAccepted ? "bg-orange-400" : ""}`} disabled={!isAccepted}>Se Connecter</button>
                <div className="flex align-middle">
                    <input type="checkbox" onClick={handleAccepted} className="checkbox"/>
                    <span  className="text-xs mx-2">J'ai lu et accepté les <a href="#" className="text-orange-500 underline">conditions d'utilisations</a></span>
                </div>
            </form>
            <PopUp text="Consultez les dernières recommandations de voyage relatives au COVID-19"/>
        </div>
    )
}