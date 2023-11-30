export default function CheckInput({text, id, checkboxValue, handleCheckbox}){
    return(
        <div className="flex gap-2 text-white items-center">
            <input type="checkbox" className="checkbox" id={id} value={checkboxValue} onChange={handleCheckbox}/>
            <span>{text}</span>
        </div>

    )
}