import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card/Card';
import Navbar from './Component/Navbar/Navbar';
function App() {
  const [guns, setGuns] = useState([]);
  console.log(guns);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))

  }, []);

  return (
    <div>
      <Navbar />
      <div className='card-container'>
        {
          guns.map((gun) => (
            <Card key={gun.id} gunData={gun} />
          ))}
      </div>
    </div>
  );
}

export default App;
