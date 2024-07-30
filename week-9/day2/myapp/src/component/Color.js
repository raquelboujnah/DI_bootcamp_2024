import React, { useEffect, useState } from 'react';


const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    useEffect(() => {
        alert('useEffect reached');
        setFavoriteColor('yellow');
      }, []);

    const changeColorToBlue = () => {
    setFavoriteColor('blue');
    };

    return(
        <>
            <h1>My favorite color is {favoriteColor}</h1>
            <button onClick={changeColorToBlue}>Change to Blue</button>
        </>
    )
}

export default Color