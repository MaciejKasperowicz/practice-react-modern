/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState([])
    const [time, setTime] = useState(0);
    const [charactersAmount, setCharactersAmount] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }
    useEffect(() => {
        if (inputValue === word) {

            setResults(prevResults => ([...prevResults, { word, time, charactersAmount }]))
            console.log(results);
            setInputValue("");
            regenerateWord();
            setCharactersAmount(0);
            console.log({ time });
            setTime(0);
        }
    }, [inputValue])

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setCharactersAmount(value => value + 1);
    }

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

    }



    return (
        <div>
            <h1>{word}</h1>
            <input
                ref={intervalRef}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={startTimer}
                onBlur={stopTimer}
            />
            <ul>
                {results.length > 0 && results.map((result, i) => (
                    <li key={i}>Na słowo: <strong>{result.word}</strong> potrzebowałeś: <strong>{result.time}</strong> sekund oraz użyłeś: <strong>{result.charactersAmount} </strong> znaków.</li>
                )
                )}
            </ul>
        </div>
    );
};

export default SpeedTest;
