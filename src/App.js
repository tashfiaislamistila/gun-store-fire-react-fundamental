import { useEffect, useState } from 'react';
import './App.css';
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
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
