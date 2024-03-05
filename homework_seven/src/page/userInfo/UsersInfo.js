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
        <div className={classes.user_info}>
            <div className={classes.users_card}>
                <p><strong>Street: </strong>{user?.address?.street}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Phone: </strong>{user.phone}</p>
                <p><strong>Website: </strong>{user.website}</p>
                <p><strong>Company: </strong>{user?.company?.name}</p>
            </div>
        </div>
    );
};

export default UsersInfo;