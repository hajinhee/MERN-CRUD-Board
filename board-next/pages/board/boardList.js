import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {BoardList} from '@/components';
import axios from 'axios';

export default function BoardListPage() {
    const [data, setData] = useState([])
    const columns = ['title', 'name', 'email', 'content'];
    const SERVER = 'http://127.0.0.1:5000'
    
    useEffect(() => {
        axios
            .get(`${SERVER}/board/boardList`)
            .then((res) => {
                setData(res.data.boards);
            })
            .catch((err) => {
                if (err.code === "ERR_NETWORK") {}
                console.log(err)
            })
        }, []);    
    return (
        <BoardList columns={columns} colspan={4} data={data}/> 
    )
}
