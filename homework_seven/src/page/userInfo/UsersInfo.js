import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import classes from "./UsersInfo.module.css";

{/*useParams - смотрит по параметрам*/}
const UsersInfo = () => {

    const {id} = useParams()

    const [user, setUser] = useState({})
    const getUser = async () => {
        const response = await fetch(`https://jsonplaceholder.org/users/${id}`)
        const data = await (response.json())
        setUser(data)
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <div className={classes.users_card}>
            <p>{user.firstname}</p>
            <p>{user?.address?.city}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UsersInfo;