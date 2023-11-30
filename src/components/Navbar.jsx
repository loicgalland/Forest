import ForestLogo from '../assets/images/Forest.svg'
import {Link} from "react-router-dom";
import {useState} from "react";
export default function NavBar(){
    const [isHome, setIsHome] = useState(true)
    const showForest = () =>{
        setIsHome(true)
    }
    const showPrevious = () =>{
        setIsHome(false)
    }
    return(
        <nav className="flex justify-between items-center bg-teal-800 py-2 px-5 text-white sticky top-0 w-full">
           <Link to="/"> <img src={ForestLogo} alt="Logo Forest" onClick={showForest}/></Link>
            <Link to="/login" className="flex" onClick={showPrevious}>
                <i className="fa-regular fa-user text-xl"></i>
            </Link>
        </nav>
    )
}