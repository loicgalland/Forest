import PopUp from "../components/PopUp";
import Card from "../components/card";
function Home() {
  return (
    <div className="py-2 px-5 flex flex-col gap-3 mb-28">
        <div>
            <h1 className="text-xl font-semibold">Rechercher</h1>
            <span className="font-thin text-sm">Destination, établissement ou même une adresse</span>
        </div>
        <form className="py-4 px-4 bg-teal-800 text-white rounded-lg flex flex-col gap-4 relative">
            <i className="fa-solid fa-magnifying-glass text-black absolute top-6 left-6 text-lg"></i>
            <input
                type="text"
                className="bg-white rounded-lg py-2 px-8 w-full text-black"
                placeholder="Localisation ..."
            />
            <i className="fa-solid fa-xmark text-black absolute text-xl right-6 top-6"></i>
            <div className="flex gap-4 w-full">
                <div>
                    <label htmlFor="checkin">Arrivée</label>
                    <input type="date" name="checkin" className="w-full p-2 rounded-lg text-black" placeholder="Du ..."/>
                </div>
                <div>
                    <label htmlFor="checkout">Départ</label>
                    <input type="date" name="checkout"  className="w-full p-2 rounded-lg text-black" placeholder="Au ..."/>
                </div>
            </div>
            <div className="flex gap-0.5">
                <input type="number" className="w-full p-2 rounded-l-lg text-black" placeholder="Adultes"/>
                <input type="number" className="w-full p-2 text-black" placeholder="Enfants"/>
                <input type="number" className="w-full p-2 rounded-r-lg text-black" placeholder="Chambres"/>
            </div>
            <div className="flex gap-2 items-center bg-white text-black p-2 rounded-lg">
                <input type="checkbox" className="checkbox"/>
                <span>Je voyage pour le travail</span>
            </div>
            <button type="submit" className="text-white bg-orange-500 p-2 rounded-lg"> Rechercher</button>
        </form>
        <h2 className="text-xl font-semibold">Nos coups de coeur</h2>
        <div className="flex gap-4 overflow-scroll">
            <Card city="Lyon" description="Appartement T2 en plein coeur de Lyon"/>
            <Card city="Marseille" description="Appartement T2 en plein coeur de Lyon"/>
            <Card city="Toulouse" description="Appartement T2 en plein coeur de Lyon"/>
            <Card city="Paris" description="Appartement T2 en plein coeur de Lyon"/>
            <Card city="Strasbourg" description="Appartement T2 en plein coeur de Lyon"/>
            <Card city="Annecy" description="Appartement T2 en plein coeur de Lyon"/>
        </div>
        <button className="bg-orange-500 text-white rounded-lg p-2"> Ajotuer votre établissement</button>
    </div>
  );
}

export default Home;
