import './App.css';
import ProfileInfo from './Componets/ProfileInfo';
import New from './Componets/New';
import Activities from './Componets/Activities';
import React,{useState} from 'react';
 
function App() {
  const [count,setcount]=useState(10)
  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 max-h-96'>
          <ProfileInfo />
          <Activities />
          <New />
      </div>
     
    </div>
  );
}

export default App;