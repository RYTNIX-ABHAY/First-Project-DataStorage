import React from "react";
import "./App.css";
import User from "./getuser/user";
import {BrowserRouter,Routes,Route} from "react-router";
import AddUser from "./addUser/AddUser";
import Update from "./updateUser/Update";

function App(){



    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<User/>}></Route>
                <Route path="/add" element={<AddUser/>} ></Route>
                <Route path="/update/:id" element={<Update/>}></Route>
            </Routes>
            </BrowserRouter>

          
        </div>
    )
}

export default App;