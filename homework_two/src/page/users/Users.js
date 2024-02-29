import React, {useState} from 'react';
import classes from "./Users.module.css";
import Button from "../../components/button/Button";

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
                        <p>First name: {userMapped.firstname}</p>
                        <p>Last name: {userMapped.lastname}</p>
                        <p>Birthdate: {userMapped.birthDate}</p>
                        <Button onClick={() => getUser(userMapped.id) } text={"Подробнее"}/>
                        {user.id === userMapped.id &&
                            <div className={classes.info_user}>
                                <p>Phone: {user?.phone}</p>
                                <p>Website: {user?.website}</p>
                                <p>Email: {user?.email}</p>
                            </div>
                        }
                    </li>)
            }
        </ul>
    );
};

export default Users;