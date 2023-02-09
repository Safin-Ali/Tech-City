import React, { useEffect, useState } from 'react';
import './cursor.css';

const AutoType = ({ textArr = [], delay = 0, typeSpeed = 0, style = {}, className = '', cursorColor = '#232324' }) => {

    // index for textArr
    const [arrIndex, setArrIndex] = useState(0);

    // store splited textArr
    const [splitText, setSplitText] = useState('');

    // delay time function
    const waitTime = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve(true), delay*1000 || 3000)
        });
    };

    // recursion function for typing
    async function autoType(text = [], direction = false, delayTime = true, index = 0) {

        // reverse type
        if (text.length === index || direction) {
            if (delayTime) await waitTime();
            if (index === 0) {
                return setArrIndex(arrIndex + 1)
            };
            return setTimeout(() => {
                setSplitText(cur => cur.slice(0, -1))
                text = text.slice(0, -1);
                return autoType(text, true, false, text.length);
            }, typeSpeed*100 || 200);
        };

        // forward type
        return setTimeout(() => {
            setSplitText(cur => cur.concat(text[index]))
            return autoType(text, false, true, index + 1);
        }, typeSpeed*100 || 200);
    };

    // call depending by textArr index
    useEffect(() => {
        if (arrIndex === textArr.length) return setArrIndex(0);
        autoType(textArr[arrIndex]?.split(''));
        return () => { }
    }, [arrIndex]);

    return (
        <>
            <span style={style} className={`${className}`}>{splitText}</span>
            <span style={{ backgroundColor: cursorColor }} className={`cursor`}></span>
        </>
    );
};

export default AutoType;