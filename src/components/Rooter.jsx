import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";

export function Rooter(){
return(
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    </div>
)
}