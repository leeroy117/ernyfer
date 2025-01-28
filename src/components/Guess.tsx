import React from 'react';

function Guess() {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    console.log("🚀 ~ Guess ~ id:", id)
    
    return ( 
        <h1>Holaaa</h1>
     );
}

export default Guess;