import React from 'react';
import Anime, { anime } from 'react-anime';

const Emoji = () => {

    const animeProps = {
        loop: true,
        translateX: [{
            value: '-25vh',
            easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)',
            duration: 1000
        },
        {
            value: '-50vh',
            easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000);',
            duration: 1000
        }],
        translateY: [{
            value: '-50vh',
            easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000);',
            duration: 1000,
        }, {
            value: '0vh',
            easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)',
            duration: 1000,
        }],
        scale: [{
            value: 5,
            easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)',
            duration: 1000,
        },
        {
            value: 1,
            easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)',
            duration: 1000,
        }]
    };

    return (
        <div className="emoji-wrapper">
            <Anime {...animeProps} className="emoji">
                <div className="emoji-inner">
                    😀
                </div>
            </Anime>
        </div>
    );
}

export default Emoji;