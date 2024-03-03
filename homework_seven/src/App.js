import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokemonPage from "./page/pokemonPage/PokemonPage";
import Menu from "./component/menu/Menu";
import {useEffect, useState} from "react";
import User from "./page/user/User";
import Users from "./page/user/User";
import UsersInfo from "./page/userInfo/UsersInfo";
import FormPage from "./page/formPage/FormPage";
import PokemonInfo from "./page/pokemonInfo/PokemonInfo";
import MainPage from "./page/mainPage/MainPage";

function App() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.org/users')
        const data = await (response.json())
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, []);

  return (
    <>

        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/users'} element={<Users users={users}/>}/>
                <Route path={'/users/:id'} element={<UsersInfo/>}/>
                <Route path={'/form'} element={<FormPage/>}/>
                <Route path={'/pokemon/:name'} element={<PokemonInfo/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
