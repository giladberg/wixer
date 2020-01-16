import React from 'react';

export default function Introduction(props) {

    return <div className='introduction-container flex'>
        <div className="bachelor-section flex column justify-center">
            <span>Bachelor</span>
            <img src="https://image.shutterstock.com/z/stock-vector-wedding-couple-pictogram-man-with-shackle-and-iron-ball-369672824.jpg"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas id placeat itaque nemo maxime dolor tempore unde dolorum mollitia incidunt. Enim harum voluptatum at officiis suscipit laborum quam ducimus reprehenderit!</p>
        </div>

        <img className="introduction-main-img" src="https://www.yatatu.com/wp-content/uploads/2019/07/bodas-despedida-soltero-game-over-3-300x400.jpg"></img>

        <div className="bachelorette-section flex column justify-center">
            <span>Bachelorette</span>
            <img src="https://image.shutterstock.com/image-vector/wedding-loading-engaged-600w-369672746.jpg"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit, facere architecto rem provident reprehenderit corrupti beatae pariatur maxime. Corporis aliquam, magnam recusandae atque nulla explicabo esse excepturi aspernatur error.</p>

        </div>

    </div>
}