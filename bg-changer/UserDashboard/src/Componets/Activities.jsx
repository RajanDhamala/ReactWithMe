import React, { useState } from 'react';

function Activities() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  return (
    <>
      <div className='bg-gray-300 mx-auto container p-4 rounded-md m-4'>
        <h1 className='text-center  font-semibold md:text-3xl text-2xl'>Test History</h1>

        <div className='mt-3 mx-3'>
          <h1 className='text-lg'>All of your test history is here</h1>
          <div className='flex justify-between bg-pink-400 px-4 h-10 items-center rounded-sm mt-3'>
            <p className='text-white text-lg font-semibold'>Not Verified</p>
            <button className='bg-green-600 hover:bg-green-400 text-white rounded-md hover:scale-105 px-2 h-7'>
              Verify Now
            </button>
          </div>
        </div>

        <div className='mt-3 mx-3'>
          <div className='bg-white px-4 py-2 rounded-md flex justify-between items-center'>
            <span className='text-lg flex-grow'>
              1. Computer organization and architecture MCQ on basic structures of computers
            </span>
            <button
              onClick={toggleDropdown}
              className='size-8 ml-4 rounded-md hover:scale-110'
            >
              {isDropdownOpen ? '⬆️' : '⬇️'}
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className='mt-4 mx-3 bg-gray-200 p-4 rounded-md'>
            <div className='bg-white p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4'>Test Details:</h2>
      <ul className='list-disc list-inside'>
        <li><strong>Test Date:</strong> August 12, 2024</li>
        <li><strong>Time Taken:</strong> 45 minutes</li>
        <li><strong>Questions Attempted:</strong> 25</li>
        <li><strong>Questions Correct:</strong> 18</li>
        <li><strong>Questions Wrong:</strong> 7</li>
        <li><strong>Score:</strong> 72%</li>
      </ul>
      <div className='mt-4'>
        <strong>Review:</strong>
        <p className='mt-2 text-gray-700'>
          The test covered fundamental concepts in computer organization. It was moderately challenging, with a few tricky questions on architecture and memory management. Focus on reviewing the sections about CPU functions and data storage for improvement.
        </p>
      </div>
    </div>
          </div>
        )}
                <div className='mt-3 mx-3'>
          <div className='bg-white px-4 py-2 rounded-md flex justify-between items-center'>
            <span className='text-lg flex-grow '>
              2. C Programming MCQ for freshers and begineers
            </span>
            <button
              onClick={toggleDropdown1}
              className='size-8 ml-4 rounded-md hover:scale-110'
            >
              {isDropdownOpen1 ? '⬆️' : '⬇️'}
            </button>
          </div>
        </div>
        {isDropdownOpen1 && (
          <div className='mt-4 mx-3 bg-gray-200 p-4 rounded-md'>
           <div className='bg-white p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4'>Test Details:</h2>
      <ul className='list-disc list-inside'>
        <li><strong>Test Date:</strong> August 15, 2024</li>
        <li><strong>Time Taken:</strong> 50 minutes</li>
        <li><strong>Questions Attempted:</strong> 30</li>
        <li><strong>Questions Correct:</strong> 24</li>
        <li><strong>Questions Wrong:</strong> 6</li>
        <li><strong>Score:</strong> 80%</li>
      </ul>
      <div className='mt-4'>
        <strong>Review:</strong>
        <p className='mt-2 text-gray-700'>
          This test on C Programming was designed for freshers and newbies. It covered basic concepts such as syntax, data types, and simple algorithms. The questions were straightforward and aimed at evaluating fundamental understanding. If you found this test challenging, focusing on C basics and practicing more coding exercises will be helpful.
        </p>
      </div>
    </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Activities;
