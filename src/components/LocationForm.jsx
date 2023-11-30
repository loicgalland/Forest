
import CheckInput from "./CheckInput";
import Button from "./Button";

export default function LocationForm({
                                         searchInputValue,
                                         handleSearchInputValue,
                                         resetSearchInputValue,
                                         checkOutValue,
                                         checkInValue,
                                         handleCheckInValue,
                                         handleCheckOutValue,
                                         adultNumber,
                                         handleAdultNumber,
                                         childNumber,
                                         handleChildNumber,
                                         roomNumber,
                                         handleRoomNumber,
                                         checkboxValue,
                                         handleCheckboxValue
}){
    return(
        <form className="bg-teal-800 p-3 rounded-md flex flex-col gap-3">
            <div className="bg-white p-2 flex items-center rounded-md gap-2">
                <i className="fa-solid fa-magnifying-glass text-lg"></i>
                <input type="text" className="w-full px-2" id="locationValue" value={searchInputValue} onChange={handleSearchInputValue} placeholder="Location..."/>
                <i className="fa-solid fa-xmark text-xl" onClick={resetSearchInputValue}></i>
            </div>
            <div className="flex w-full gap-2">
                <div className="bg-white flex flex-col p-2 rounded-md w-full">
                    <span className="text-gray-400">Du</span>
                    <input type="date"  value={checkInValue} id="checkInValue" onChange={handleCheckInValue}/>
                </div>
                <div className="bg-white flex flex-col p-2 rounded-md w-full">
                    <span className="text-gray-400">Au</span>
                    <input type="date" value={checkOutValue} id="checkOutValue" onChange={handleCheckOutValue}/>
                </div>
            </div>
            <div className="flex gap-2 bg-white rounded-md p-2 ">
                <div className="flex flex-col border-e-2">
                    <span className="text-gray-400">Adultes</span>
                    <input type="number" className="w-full" value={adultNumber} id="adultNumberValue" onChange={handleAdultNumber}/>
                </div>
                <div className="flex flex-col border-e-2">
                    <span className="text-gray-400">Enfants</span>
                    <input type="number" className="w-full" value={childNumber} id="childNumberValue" onChange={handleChildNumber}/>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-400">Chambres</span>
                    <input type="number" className="w-full" value={roomNumber} id="roomNumberValue" onChange={handleRoomNumber}/>
                </div>
            </div>
            <CheckInput text="Je voyage pour le travail" id="travelForWorkCheckbox" checkboxValue={checkboxValue} handleCheckbox={handleCheckboxValue}/>
            <Button path={`${searchInputValue ? `/hotels/${searchInputValue}` : "/"}`} text="Rechercher" />
        </form>
    )
}