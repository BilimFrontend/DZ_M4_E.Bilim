import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokemonPage from "./page/pokemonPage/PokemonPage";
import Menu from "./component/menu/Menu";
import {useEffect, useState} from "react";
import User from "./page/user/Users";
import Users from "./page/user/Users";
import UsersInfo from "./page/userInfo/UsersInfo";
import FormPage from "./page/formPage/FormPage";
import PokemonInfo from "./page/pokemonInfo/PokemonInfo";
import MainPage from "./page/mainPage/MainPage";
import axios from "axios";
import Pagination from "./page/pagination/Pagination";
import UserPage from "./page/userPage/UserPage";

function App() {
  return (
    <>

        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/users/:id'} element={<UsersInfo/>}/>
                <Route path={'/form'} element={<FormPage/>}/>
                <Route path={'/pokemon/:name'} element={<PokemonInfo/>}/>
            </Routes>
        </BrowserRouter>
    </>

  );
}

export default App;
