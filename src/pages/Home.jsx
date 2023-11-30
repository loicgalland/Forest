import LocationForm from "../components/LocationForm";
import Card from "../components/card";
import Button from "../components/Button";
import PopUp from "../components/PopUp";
import {useState} from "react";
function Home() {
    // State declaration (location, date)
    const [searchInputValue, setsearchInputValue] = useState('')
    const [checkInValue, setCheckInValue] = useState('')
    const [checkOutValue, setCheckOutValue] = useState('')
    const [adultNumber, setAdultNumber] = useState(0)
    const [childNumber, setChildNumber] = useState(0)
    const [roomNumber, setRoomNumber] = useState(0)
    const [travelForWork, setTravelForWork] = useState(false)
    // Update Location
    const handleInputValue = (e) => {
        setsearchInputValue(e.target.value)
    }
    // Reset Location
    const resetInputValue = () =>{
        setsearchInputValue('')
    }
    //Update CheckIn date
    const handleCheckInValue = (e) =>{
        setCheckInValue(e.target.value)
    }
    //Update CheckOut date
    const handleChekOutValue = (e) =>{
        setCheckOutValue(e.target.value)
    }
    // Update adults child and rooms numbers
    const handleChildNumber = (e) =>{
        setChildNumber(e.target.value)
    }
    const handleAdultNumber = (e) =>{
        setAdultNumber(e.target.value)
    }
    const handleRoomNumber = (e) =>{
        setRoomNumber(e.target.value)
    }

    // Update checkbox vlue
    const handleCheckboxValue = () =>{
        setTravelForWork(!travelForWork)
    }
  return (
    <div className="py-2 px-5 flex flex-col gap-3">
        <div>
            <h1 className="text-xl font-semibold">Rechercher</h1>
            <span className="font-thin text-sm">Destination, établissement ou même une adresse</span>
        </div>
        <LocationForm
            searchInputValue={searchInputValue}
            handleSearchInputValue={handleInputValue}
            resetSearchInputValue={resetInputValue}
            checkOutValue={checkOutValue}
            checkInValue={checkInValue}
            handleCheckOutValue={handleChekOutValue}
            handleCheckInValue={handleCheckInValue}
            adultNumber={adultNumber}
            handleAdultNumber={handleAdultNumber}
            childNumber={childNumber}
            handleChildNumber={handleChildNumber}
            roomNumber={roomNumber}
            handleRoomNumber={handleRoomNumber}
            checkboxValue={travelForWork}
            handleCheckboxValue={handleCheckboxValue}
        />
        <PopUp text='Consultez les dernières recommandations de voyage relatives au COVID-19'/>
        <h2 className="text-xl font-semibold">Nos coups de coeur</h2>
        <div className="flex gap-4 overflow-scroll">
            <Card city="Lyon" description="Appartement T2 en plein coeur de Lyon"/>
            <Card city="Marseille" description="Appartement T2 en plein coeur de Lyon"/>
        </div>
        <Button path="/addHotel" text="Ajotuer votre établissement" />
    </div>
  );
}

export default Home;
