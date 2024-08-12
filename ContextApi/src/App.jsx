import React from 'react';
import './App.css';
import UserContextProvider from './Context/UserContextProvider';

function App() { 
  return (
    <UserContextProvider>
      <h1>hello</h1>
    </UserContextProvider>
  );
}
export default App;
