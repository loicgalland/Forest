import {Link} from "react-router-dom";

export default function Button({path, text}){
    return(
        <Link to={path} className="text-white bg-orange-500 p-2 rounded-lg text-center">{text}</Link>
    )
}