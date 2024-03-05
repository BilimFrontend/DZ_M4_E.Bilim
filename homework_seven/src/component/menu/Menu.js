import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from "./Menu.module.css";

{/*NavLink, link - Не перезагружает страницу: to - переход*/}
const Menu = () => {
    return (
        <div className={classes.header}>
            <ul className={classes.list}>
                <li className={classes.list_nav}>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? classes.active : classes.nav_link}
                    >Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/users"
                             className={({isActive}) => isActive ? classes.active : classes.nav_link}
                    >Users</NavLink>
                </li>
                <li>
                    <NavLink to="/form"
                             className={({isActive}) => isActive ? classes.active : classes.nav_link}
                    >Form</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;