import React from 'react';
import Anime, { anime } from 'react-anime';

// Function to generate random number 
function rando(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

const Emoji = (props) => {


    const veiwHeight = rando(10, 80);
    const veiwWidth = rando(5, 45);
    const direction = ['-', '+'][rando(0, 1)];

    console.log(direction);
    console.log('vw: ', veiwWidth);
    console.log('vh: ', veiwHeight);

    const animeProps = {
        loop: false,
        translateX: [{
            value: `${direction}${veiwWidth}vw`,
            easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)',
            duration: 1000
        },
        {
            value: `${direction}${veiwWidth * 2}vw`,
            easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000);',
            duration: 1000
        }],
        translateY: [{
            value: `-${veiwHeight}vh`,
            easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000);',
            duration: 1000,
        }, {
            value: '20vh',
            easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)',
            duration: 1000,
        },],
        scale: [{
            value: 5,
            easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)',
            duration: 1000,
        },
        {
            value: 12,
            easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000);',
            duration: 1000,
        }],
        rotate: [{ value: -360, duration: 1000, easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)', }, { value: -720, duration: 1000, easing: 'linear' }]
    };

    return (
        <div className="emoji-wrapper">
            <Anime {...animeProps} >
                <div className="emoji-inner" onClick={props.handleWhack}>
                    <span className="emoji">😀</span>
                </div>
            </Anime>
        </div>
    );
}

export default Emoji;