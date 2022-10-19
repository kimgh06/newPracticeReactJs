import React from 'react';
import { useEffect, useState } from 'react';

function pokemon(){
    const [id, setid] = useState([]);
    useState(()=>{
        const pokemon = {
            
        }
        fetch("https://pokeapi.co/api/v2/ability/"+{id}+"/")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, []);
    return(
        <>
        </>
    );
}

export default pokemon