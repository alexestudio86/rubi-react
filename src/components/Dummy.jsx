import axios from "axios";
import { useState, useEffect } from "react";
import { GetDummies } from '../store/modules/GetDummies';
import { useParams } from "react-router-dom";

export function Dummy ( ){

    const [dummyResponse, setDummy] = useState([]);
    const params = useParams();

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.dummyID}`)
            .then( res => {
                setDummy(res.data)
            })
    }, [])

    return (
        <>
            <h1>{params.dummyID}</h1>
            <GetDummies dummyResponse={dummyResponse} />
        </>
    )
}