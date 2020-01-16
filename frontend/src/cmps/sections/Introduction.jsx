import React from 'react';

export default function Introduction(props) {

    return <div className='introduction-container section-container flex'>
        <div className="bachelor-section flex column justify-center">
            <img src="https://i2.wp.com/www.mancrates.com/blog/wp-content/uploads/2017/09/bachelor-party.jpg?w=620&ssl=1"></img>
            <p contentEditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas id placeat itaque nemo.</p>
        </div>

        <img className="introduction-main-img" src="https://image.spreadshirtmedia.com/content/f_png,f_auto,c_mpad,h_400,w_400,q_70/aum/na/designs/1010443533,width=300,height=300/beer-t-shirts.png"></img>

        <div className="bachelorette-section flex column justify-center">
            <img src="https://miro.medium.com/max/1008/0*bdE5plmbY3f7znF7.jpg"></img>
            <p contentEditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit</p>

        </div>

    </div>
}