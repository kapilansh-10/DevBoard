import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Notes from "../pages/Notes"; 
import Profile from "../pages/Profile";
import Tasks from "../pages/Tasks";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/notes" element={<Notes />}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}