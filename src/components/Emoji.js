import React,{useState} from 'react';
import Anime, { anime } from 'react-anime';

// Function to generate random number 
function rando(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

const Emoji = (props) => {

    const [alive, setAlive] = useState(true);

    const veiwHeight = rando(10, 80);
    const veiwWidth = rando(10, 40);
    const direction = ['-', '+'][rando(0, 1)];

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
            value: rando(10,15),
            easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000);',
            duration: 1000,
        }],
        rotate: [{ value: -360, duration: 1000, easing: 'cubicBezier(0.420, 0.000, 1.000, 1.000)', }, { value: -720, duration: 1000, easing: 'linear' }]
    };

    function emojiClicked(e){
        props.handleWhack(e, (match)=>{
            if(match){
                setAlive(false)
            }else{

            }
        });
    }

    return alive ? (
        <div className="emoji-wrapper">
            <Anime {...animeProps} >
                <div className="emoji-inner" onClick={emojiClicked}>
                    <span className="emoji">😀</span>
                </div>
            </Anime>
        </div>
    ) : null;
}

export default Emoji;