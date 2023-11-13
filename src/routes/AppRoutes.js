import {Route, Routes} from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default AppRoutes;