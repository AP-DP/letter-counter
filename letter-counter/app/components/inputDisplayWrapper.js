'use client'

// React Elements
import React from 'react';
import { useState, useEffect } from 'react';
// Components
import UserInputArea from './userInputArea';
import GridDisplay from './gridDisplay';
// Functionality
import { countLetters } from '../utils/counter';

function InputDisplayWrapper() {
    const [userInput, setUserInput] = useState("");
    const [count, setCount] = useState({});

    useEffect(() => {
        let letterCount = countLetters(userInput);
        setCount(letterCount);
    }, [userInput]);

    return (
        <>
            <UserInputArea 
                exportInput={setUserInput}
            />
            <GridDisplay 
                data = {count}
            />
        </>
    );
}

export default InputDisplayWrapper;