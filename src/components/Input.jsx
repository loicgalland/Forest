export default function Input({ type, Placeholder }){
    return(
     <input type={type} name={type} className="bg-white rounded-lg p-2 w-full text-black z-0" placeholder={Placeholder}/>
    )
}