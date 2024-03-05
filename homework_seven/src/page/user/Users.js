import React, {useState} from 'react';
import Button from "../../component/button/Button";
import classes from "./User.module.css";
import {Link} from "react-router-dom";

const Users = ({users}) => {
    const [user, setUser] = useState({})
    console.log(user)
    const getUser = async (id) => {
        const data = await fetch(`https://jsonplaceholder.org/users/${id}`)
        const user = await (data.json())
        setUser(user)
    }
    return (
            <ul className={classes.users}>
                {
                    users.map(userMapped =>
                        <li key={userMapped.id} className={classes.user}>
                            <div className={classes.user_card}>
                                <div className={classes.user_info}>
                                    <p>First name: {userMapped.name}</p>
                                    <p>Username: {userMapped.username}</p>
                                    <p>City: {userMapped?.address?.city}</p>
                                </div>
                                <div>
                                    <Link className={classes.user_link} to={`/users/${userMapped.id}`}>Подробно</Link>
                                    {/*<Button onClick={() => getUser(userMapped.id)} text={"Подробнее"}/>*/}
                                    {/*{user.id === userMapped.id &&*/}
                                    {/*    <div className={classes.info_user}>*/}
                                    {/*        <p>Phone: {user?.phone}</p>*/}
                                    {/*        <p>Website: {user?.website}</p>*/}
                                    {/*        <p>Email: {user?.email}</p>*/}
                                    {/*    </div>*/}
                                    {/*}*/}
                                </div>
                            </div>
                        </li>)
                }
            </ul>
    );
};

export default Users;