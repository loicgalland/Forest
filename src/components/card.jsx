import {Link} from "react-router-dom";

export default function Card({city, description}){
    return(
        <Link to="/hotel/:id" className="flex flex-col w-16">
            <div className="h-16 w-16 bg-teal-800 rounded-md"></div>
            <span>{city}</span>
            <span className="text-xs font-thin text-ellipsis whitespace-nowrap overflow-hidden">{description}</span>
        </Link>
    )
}