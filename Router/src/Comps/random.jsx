import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Random = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 11);
        setRandomNumber(number);
    };

    return (<>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl mb-4">Random Number Generator</h1>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={generateRandomNumber}
            >
                Generate Random Number
            </button>
            {randomNumber && (
                <p className="text-2xl mt-4">Random Number: {randomNumber}</p>
            )}
             <Link to='/'><button className='bg-blue-500 text-white mt-5 hover:bg-blue-600 rounded-md px-2 py-1'>Goback</button></Link>
        </div>
        </>
    );
};

export default Random;