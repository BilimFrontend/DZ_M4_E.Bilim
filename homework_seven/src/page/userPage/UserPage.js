import React, {useEffect, useState} from 'react';
import Users from "../user/Users";
import Pagination from "../pagination/Pagination";
import axios from "axios";
const UserPage = () => {
    const [users, setUsers] = useState([])
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(4)
    console.log(users)


    const handleNext = () => {
        setOffset(prev => prev+limit)
    }

    const handlePrev = () => {
        if (offset > 0){
            setOffset(prev => prev-limit)
        }
    }

    const page = Math.floor(offset/limit)+1
    const getUsers = async () => {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users?_start=${offset}&_limit=${limit}`)
        return data
    }

    useEffect(() => {
        getUsers().then((users) => setUsers(users))
    }, [limit, offset]);

    return (
        <div>
            <Users key={users.name} users={users}/>
            <Pagination handleNext={handleNext} handlePrev={handlePrev} page={page}/>
        </div>
    );
};

export default UserPage;