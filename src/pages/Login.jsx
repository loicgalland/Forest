import PopUp from "../components/PopUp";
import {useState} from "react";
import {Link} from "react-router-dom";
export default function Login(){
    const [isVisible, setIsVisible] = useState(false)
    const handleVisible = () =>{
        setIsVisible(!isVisible)
    }
    return(
        <div className="py-2 px-5 flex flex-col gap-3">
            <h2 className="text-xl my-3 text-center font-semibold">Se connecter</h2>
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
                <button type="submit" className="text-white bg-orange-500 p-2 rounded-lg">Se Connecter</button>
            </form>
            <span className="font-xl text-center">Vous n'avez pas encore de compte ?</span>
            <Link to="/signin" className="text-orange-500 bg-white p-2 rounded-lg border-solid border-orange-500 border mx-4 text-center hover:bg-orange-500 hover:text-white">Créer un compte</Link>
            <PopUp />
        </div>
    )
}